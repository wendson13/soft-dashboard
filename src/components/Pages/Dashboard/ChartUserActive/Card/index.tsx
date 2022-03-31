import { IconType } from 'react-icons';
import styled, { useTheme } from 'styled-components';

type CardProps = {
  title: string;
  Icon: IconType;
  value: string;
  percentage: string;
}

export function Card ({ title, Icon, value, percentage } : CardProps) {

  const { colors } = useTheme();

  return (
    <Container>
      <Title>
        <IconBox>
          <Icon size={18} color={colors.gray1}/>
        </IconBox>
        {title}
      </Title>

      <ValueBox percentage={percentage}>
        <strong>{value}</strong>
        <div />
      </ValueBox>
    </Container>
  );
}

const Container = styled.div`
  width: 5rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

const IconBox = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: .5rem;
  background: ${({theme}) => theme.gradients.primary};
`;

const Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${({theme}) => theme.colors.gray7};
`;

type ValueBoxProps = {
  percentage: string;
}

const ValueBox = styled.div<ValueBoxProps>`
  strong {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({theme}) => theme.colors.dark};
  }

  div {
    width: 100%;
    height: .5rem;
    overflow: hidden;
    border-radius: 1rem;
    background: ${({theme}) => theme.colors.gray7};

    &::after {
      content: '';
      width: ${({ percentage }) => percentage};
      height: 100%;
      display: block;
      border-radius: 1rem;
      background: ${({theme}) => theme.colors.dark};
    }
  }
`;
