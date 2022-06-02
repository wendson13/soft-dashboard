import { memo } from 'react';
import { Container, SwitchStyle, Thumb } from './styles';

type SwitchProps = {
  isChecked: boolean;
  text: string;
  toggle: () => void;
}

function SwitchComponent({ isChecked, toggle, text }: SwitchProps) {
  return (
    <Container>
      <SwitchStyle checked={isChecked} onCheckedChange={toggle}>
        <Thumb />
      </SwitchStyle>
      {text}
    </Container>
  );
}

export const Switch = memo(SwitchComponent, (prev, next) => {
  return prev.isChecked === next.isChecked
});