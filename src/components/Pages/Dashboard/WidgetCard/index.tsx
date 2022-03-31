import { IconType } from 'react-icons';
import styled, { useTheme } from 'styled-components';
import { BoxShadow } from '../../../Styles/Containers';

type WidgetCardProps = {
  title: string;
  subTitle: string;
  percentage?: number;
  Icon: IconType;
}

export function WidgetCard ({ title, subTitle, percentage = 0, Icon } : WidgetCardProps) {

  const { colors } = useTheme()

  return (
    <BoxShadow style={{ flexDirection: 'row', justifyContent: 'space-between', gap: '1rem' }}>
      <Data percentage={percentage}>
        <strong>{title}</strong>

        <p>
          {subTitle}
          <span>{percentage >= 0 ? `+${percentage.toFixed(0)}%` 
          : `${percentage.toFixed(0)}%`}</span>
        </p>
      </Data>

      <IconBox>
        <Icon size={24} color={colors.gray1} />
      </IconBox>
    </BoxShadow>
  );
}

type DataType = {
  percentage: number
}

const Data = styled.div<DataType>`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  h2 {
    font-size: 1rem;
    font-weight: 500;
    color: ${({theme}) => theme.colors.gray8};
  }

  p {
    display: flex;
    align-items: center;
    gap: .5rem;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({theme}) => theme.colors.dark};

    span {
      font-size: 1rem;
      color: ${({percentage, theme}) => percentage >= 0 ? theme.colors.success
      : theme.colors.danger};
    }
  }
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  padding: .5rem .75rem;
  border-radius: .5rem;
  background: ${({theme}) => theme.gradients.primary};
`;
