import styled from 'styled-components';
import * as SwitchPrimitive from '@radix-ui/react-switch';

type SwitchProps = {
  isChecked: boolean;
  text: string;
  toggle: () => void;
}

export function Switch({ isChecked, toggle, text }: SwitchProps) {
  return (
    <Container>
      <SwitchStyle checked={isChecked} onCheckedChange={toggle}>
        <Thumb />
      </SwitchStyle>
      {text}
    </Container>
  );
}

const Container = styled.label`
  display: flex;
  align-items: center;
  gap: .5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.dark};
`;

const SwitchStyle = styled(SwitchPrimitive.Root)`
  width: 3rem;
  height: 1.5rem;
  background: ${({ theme }) => theme.colors.gray5};
  border-radius: 9999px;
  padding-left: .1rem;
  position: relative;
  border: 0;

  &[data-state="checked"] {
    background: ${({ theme }) => theme.colors.dark};
  };
`;

const Thumb = styled(SwitchPrimitive.Thumb)`
  display: block;
  width: 1rem;
  height: 1rem;
  background: ${({ theme }) => theme.colors.gray2};
  border-radius: 9999px;
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

  &[data-state="checked"] {
    transform: translateX(170%);
  };
`;