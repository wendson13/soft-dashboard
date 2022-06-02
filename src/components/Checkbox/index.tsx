import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { ReactNode } from 'react';
import { BsCheck } from 'react-icons/bs';
import styled from 'styled-components';

type CheckBoxProps = {
  toggle: () => void;
  isChecked: boolean;
  children?: ReactNode;
  isRequired?: boolean;
}

export function Checkbox({ isChecked, toggle, isRequired = false, children }: CheckBoxProps) {
  return (
    <Container>
      <CheckboxStyle checked={isChecked} onCheckedChange={toggle} required={isRequired}>
        <Indicator>
          <BsCheck size={20} />
        </Indicator>
      </CheckboxStyle>
      {children}
    </Container>
  );
}

export const Container = styled.label`
  display: flex;
  align-items: center;
  gap: .5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.dark};
`;

export const CheckboxStyle = styled(CheckboxPrimitive.Root)`
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray8};
  border-radius: .25rem;
  background: transparent;
`;

export const Indicator = styled(CheckboxPrimitive.Indicator)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.dark};
`;