import { IconType } from 'react-icons';
import { useTheme } from 'styled-components';
import { Container, HeaderBox, IconBox } from './styles';

type EarningsCardProps = {
  Icon: IconType;
  title: string;
  description: string;
  value: string;
}

export function EarningsCard ({ Icon, title, description, value } : EarningsCardProps) {

  const { colors } = useTheme();

  return (
    <Container>
      <IconBox>
        <Icon size={32} color={colors.gray1}/>
      </IconBox>

      <HeaderBox>
        <h2>{title}</h2>
        <p>{description}</p>
      </HeaderBox>

      <strong>{value}</strong>
    </Container>
  );
}
