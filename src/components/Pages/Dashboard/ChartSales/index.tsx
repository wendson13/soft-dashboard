import styled, { useTheme } from 'styled-components';
import Chart from 'react-apexcharts';
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi';
import { BoxShadow } from '../../../Styles/Containers';

type SummaryYear = {

  currentYear: {
    year: number;
    sales: number[];
  },

  lastYear: {
    year: number;
    sales: number[];
  }

  differenceYearSales: number
}

type ChartSalesProps = {
  summaryYear: SummaryYear;
}

export function ChartSales ({ summaryYear } : ChartSalesProps) {

  const { colors } = useTheme();

  const options = {
    chart: {
      zoom: {
        enabled: false
      },
    },
    fill: {
      shade: 'dark',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.5,
        opacityTo: 0.1,
      },
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    tooltip: {
      enabled: true,
      theme: 'light',
      style: {
        fontSize: '16px',
        fontFamily: 'Roboto, sans-serif',
      },
    },
    grid: {
      strokeDashArray: 7,
    },
    xaxis: {
      categories: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
      labels: {
        show: true,
        style: {
          colors: colors.dark,
          fontSize: '14px',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 400,
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: colors.dark,
          fontSize: '14px',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 500,
        },
      },
    }
  }
  
  return (
    <BoxShadow style={{ width: '53%' }}>
      <TitleBox>
        <strong>Sales Overview</strong>
        <span>
          {
            summaryYear.differenceYearSales > 0 
            ? (
              <>
                <BiUpArrowAlt size={24} color={colors.success}/>
                {`+${summaryYear.differenceYearSales.toFixed(0)}% more in ${summaryYear.currentYear.year}`}
              </>
            ) 
            : (
              <>
                <BiDownArrowAlt size={24} color={colors.danger}/>
                {`${summaryYear.differenceYearSales.toFixed(0)}% less in ${summaryYear.currentYear.year}`}
              </>
            )
          }
        </span>
      </TitleBox>

      <ChartBox>
        <Chart options={options} 
          series={[
            {
              name: String(summaryYear.currentYear.year),
              data: summaryYear.currentYear.sales,
              color: colors.primary,
            }, 
            {
              name: String(summaryYear.lastYear.year),
              data: summaryYear.lastYear.sales,
              color: colors.gray12,
            }
          ]} 
          height={410}
          type="area"
        />
      </ChartBox>
    </BoxShadow>
  );
}

const ChartBox = styled.div`
  border-radius: .5rem;
  padding: .5rem;
  background: ${({theme}) => theme.colors.gray1};
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  strong {
    font-size: 1.5rem;
    font-weight: 700;
  }

  > span {
    display: flex;
    align-items: center;
    gap: .5rem;
    color: ${({theme}) => theme.colors.gray8};
  }
`;