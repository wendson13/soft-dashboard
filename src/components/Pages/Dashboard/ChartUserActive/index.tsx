import styled, { useTheme } from 'styled-components';
import Chart from 'react-apexcharts';
import { useEffect, useState } from 'react';
import { Card } from './Card';
import { FaMoneyCheckAlt, FaTools } from 'react-icons/fa';
import { BsFiles } from 'react-icons/bs';
import { IoRocketSharp } from 'react-icons/io5';
import { calcPercentageDifference } from '../../../../pages/Dashboard';
import { BoxShadow } from '../../../Styles/Containers';

type Summary = {
  month: string;
  money: number;
  users: number;
  clients: number;
  sales: number;
  clicks: number;
  items: number;
}

type ChartUserActiveProps = {
  projectInfo: {
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
  }
}

export function ChartUserActive ({ projectInfo }: ChartUserActiveProps) {

  const [userDifferencePercentage, setUserDifferencePercentage] = useState(0);
  const { colors } = useTheme();
  
  useEffect(() => {
    const users = projectInfo.users

    const percentage = calcPercentageDifference(users[users.length - 1], users[users.length - 2]);
    setUserDifferencePercentage(percentage);
  }, [])

  const options = {
    fill: {
      colors: [colors.gray1],
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
        distributed: false,
        borderRadius: 5,
      },
    },
    tooltip: {
      enabled: true,
      fillSeriesColor: false,
      theme: 'dark',
      style: {
        fontSize: '16px',
        fontFamily: 'Roboto, sans-serif',
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      strokeDashArray: 7,
    },
    xaxis: {
      categories: [...projectInfo.monthly],
      labels: {
        show: false,
      }
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: colors.gray1,
          fontSize: '14px',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 400,
        },
      },
    }
  }
  
  return (
    <BoxShadow style={{ width: '45%' }} >
      <ChartBox>
        <Chart 
          options={options} 
          series={[{ name: 'Users', data: projectInfo.users }]}
          height={300}
          type='bar'
        />
      </ChartBox>

      <TitleBox>
        <h2>Active Users</h2>
        <span>
          <span>{userDifferencePercentage > 0 ? `(+${userDifferencePercentage.toFixed(0)}%)` 
          : `(${userDifferencePercentage.toFixed(0)}%)`}</span>
          than last month
        </span>
      </TitleBox>

      <CardBox>
        <Card title="Users" value={
          `${Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            notation: 'compact'
          }).format(projectInfo.total.users)}`
        }
          Icon={BsFiles}
          percentage="30%"
        />

        <Card title="Clicks" value={
          `${Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            notation: 'compact'
          }).format(projectInfo.total.clicks)}`
        }
          Icon={IoRocketSharp}
          percentage="80%"
        />

        <Card title="Sales" value={
          `${Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            notation: 'compact'
          }).format(projectInfo.total.sales)}`
        }
          Icon={FaMoneyCheckAlt}
          percentage="55%"
        />

        <Card title="Items" value={`${projectInfo.total.items}`}
          Icon={FaTools}
          percentage="96%"
        />
      </CardBox>
    </BoxShadow>
  );
}

const ChartBox = styled.div`
  border-radius: .5rem;
  padding: .5rem;
  background: ${({theme}) => theme.gradients.dark};
`;

const CardBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  h2 {
    margin: .5rem 0;
    font-size: 1.5rem;
    font-weight: 700;
  }

  > span {
    display: flex;
    gap: .5rem;
    margin: .5rem 0;
    color: ${({theme}) => theme.colors.gray8};

    span {
      font-weight: 700;
    }
  }
`;