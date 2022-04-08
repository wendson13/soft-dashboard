import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { BsArrowRightShort } from 'react-icons/bs';
import { FaMoneyCheckAlt, FaShoppingCart } from 'react-icons/fa';
import { GiDiploma, GiEarthAmerica } from 'react-icons/gi';
import { IoRocketSharp } from 'react-icons/io5';
import { WidgetCard } from '../../components/Pages/Dashboard/WidgetCard';
import { ChartUserActive } from '../../components/Pages/Dashboard/ChartUserActive';
import { ChartSales } from '../../components/Pages/Dashboard/ChartSales';
import { ProjectsTable } from '../../components/Pages/Dashboard/ProjectTable';
import { OrdersHistoryTable } from '../../components/Pages/Dashboard/OrdersHistoryTable';
import { ChartsBox, Container, Documentation, Info, RocketBox, TablesBox, WidgetBox, Working } from './styles';
import { useTheme } from 'styled-components';
import { Loading } from '../../components/Loading';

type User = {
  email: string;
  imageUrl: string;
}

type Summary = {
  money: number;
  users: number;
  clients: number;
  sales: number;
}

type SummaryMonth = {
  month: string;
  money: number;
  users: number;
  clients: number;
  sales: number;
  clicks: number;
  items: number;
}

type SummaryYear = {
  year: number;
  monthly: SummaryMonth[];
}

type Order = {
  id: number;
  imageUrl: string;
  message: string;
  createdAt: string;
}

type Project = {
  id: string;
  name: string;
  imageUrl: string;
  members: User[];
  users: number;
  clients: number;
  sales: number;
  budget: number;
  percentageCompeted: number;
  status: 'working' | 'canceled' | 'done';
}

type DataFetch = {
  projects: Project[],

  summary: Summary;

  summaryMonth: SummaryMonth[]

  summaryYear: SummaryYear[];

  orders: {
    lastMonth: number,

    list: Order[];
  }
}

type SummaryType = {
  money: {
    amount: string;
    percentage?: number;
  }
  users: {
    amount: string;
    percentage?: number;
  }
  clients: {
    amount: string;
    percentage?: number;
  }
  sales: {
    amount: string;
    percentage?: number;
  }
}

type DataType = {
  projects: Project[],
  percentageCompeted: number;
  summary: SummaryType;
  summaryMonth: {
    monthly: string[];
    money: number[];
    users: number[];
    clients: number[];
    sales: number[];

    total: {
      users: number;
      items: number;
      clicks: number;
      sales: number;
    }
  };

  summaryYear: {
    currentYear: {
      year: number;
      sales: number[];
    },
    lastYear: {
      year: number
      sales: number[];
    };

    differenceYearSales: number;
  }

  orders: {
    lastMonth: number,

    list: Order[];
  }
}

export const calcPercentageDifference = (num1: number, num2: number) => {
  const difference = num1 - num2;

  const percentage = (difference * 100) / num1;

  return percentage;
}

export function Dashboard () {

  const [data, setData] = useState<DataType>();
  const { colors } = useTheme();

  useEffect(() => {
    const storage = localStorage.getItem('soft@summary')

    api.get<DataFetch>('projects').then(({data}) => {


      const countProjectsComplete = data.projects
      .filter(project => project.status === 'done').length;

      const totalProjects = data.projects.length
      const percentage = (countProjectsComplete * 100) / totalProjects;

      const summaryMonth = {
        monthly: data.summaryMonth.map((item) => item.month),
        money: data.summaryMonth.map((item) => item.money),
        clients: data.summaryMonth.map((item) => item.clients),
        sales: data.summaryMonth.map((item) => item.sales),
        users: data.summaryMonth.map((item) => item.users),

        total: {
          items: data.summaryMonth.reduce((count, item) => item.items + count, 0),
          clicks: data.summaryMonth.reduce((count, item) => item.clicks + count, 0),
          sales: data.summaryMonth.reduce((count, item) => item.sales + count, 0),
          users: data.summaryMonth.reduce((count, item) => item.users + count, 0),
        }
      }

      const summarySalesCurrentYear = data.summaryYear[0].monthly.reduce((count, item) => item.sales + count, 0);
      const summarySalesLastYear = data.summaryYear[0].monthly.reduce((count, item) => item.sales + count, 1)

      const summaryYear = {
        currentYear: {
          year: data.summaryYear[0].year,
          sales: data.summaryYear[0].monthly.map(item => item.sales),
        },
        lastYear: {
          year: data.summaryYear[1].year,
          sales: data.summaryYear[1].monthly.map(item => item.sales),
        },

        differenceYearSales: calcPercentageDifference(summarySalesCurrentYear, summarySalesLastYear)
      }

      if(storage){
        const summary: Summary = JSON.parse(storage);

        setData({
          projects: data.projects,
          percentageCompeted: percentage,
          summary: {
            money: {
              amount: Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(data.summary.money),

              percentage: calcPercentageDifference(data.summary.money, summary.money),
            },
  
            clients: {
              amount: Intl.NumberFormat('en-US').format(data.summary.clients),
              percentage: calcPercentageDifference(data.summary.clients, summary.clients),
            },

            users: {
              amount: Intl.NumberFormat('en-US').format(data.summary.users),
              percentage: calcPercentageDifference(data.summary.users, summary.users),
            },
  
            sales: {
              amount: Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(data.summary.sales),

              percentage: calcPercentageDifference(data.summary.sales, summary.sales),
            },
          },

          summaryMonth,

          summaryYear,

          orders: data.orders
        })

        localStorage.setItem('soft@summary', JSON.stringify(data.summary));
      }
      else{
        
        const summary = {
          money: {
            amount: Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(data.summary.money),

          },
          clients: {
            amount: Intl.NumberFormat('en-US').format(data.summary.clients),
          },

          users: {
            amount: Intl.NumberFormat('en-US').format(data.summary.users),
          },

          sales: {
            amount: Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(data.summary.sales),
          }
        }

        setData({
          projects: data.projects,
          percentageCompeted: percentage,
          summary,

          summaryMonth,

          summaryYear,

          orders: data.orders
        })

        localStorage.setItem('soft@summary', JSON.stringify(data.summary));
      }
    })
  }, [])

  if(!data){
    return (
      <Loading />
    );
  }

  return (
    <Container>
      <WidgetBox>
        <WidgetCard 
          title="Total's Money" 
          subTitle={data.summary.money.amount}
          percentage={data.summary.money.percentage}
          Icon={FaMoneyCheckAlt}
        />

        <WidgetCard 
          title="Total's Users" 
          subTitle={data.summary.users.amount}
          percentage={data.summary.users.percentage}
          Icon={GiEarthAmerica}
        />

        <WidgetCard 
          title="New Clients" 
          subTitle={data.summary.clients.amount}
          percentage={data.summary.clients.percentage}
          Icon={GiDiploma}
        />

        <WidgetCard 
          title="Sales" 
          subTitle={data.summary.sales.amount}
          percentage={data.summary.sales.percentage}
          Icon={FaShoppingCart}
        />
      </WidgetBox>

      <Info>
        <Documentation>
          <div>
            <span>Built by developers</span>
            <h2>Soft Dashboard</h2>
            <p>From colors, cards, typography to complex elements, you will find the full documentation.</p>
          
            <button>
              Read More
              <BsArrowRightShort size={26} />
            </button>
          </div>

          <RocketBox>
            <IoRocketSharp size={164} color={colors.gray1} />
          </RocketBox>
        </Documentation>

        <Working>
          <div>
            <h2>Work with the rockets</h2>
            <p>Wealth creation in an evolutionarily recent positive-sum game, It is all about who take the opportunity first.</p>
            
            <button>
              Read More
              <BsArrowRightShort size={26} />
            </button>
          </div>

          <img src="https://images.unsplash.com/photo-1589884629108-3193400c7cc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="working" />
        </Working>
      </Info>

      <ChartsBox>
        <ChartUserActive projectInfo={data.summaryMonth} />
        <ChartSales summaryYear={data.summaryYear} />
      </ChartsBox>

      <TablesBox>
        <ProjectsTable projects={data.projects} percentage={data.percentageCompeted} />
        <OrdersHistoryTable orders={data.orders} />
      </TablesBox>
    </Container>
  );
}
