import { memo } from 'react';
import styled from 'styled-components'; 

type SwitchProps = {
  isChecked: boolean;
  toggle: () => void;
}

function SwitchComponent ({ isChecked, toggle } : SwitchProps) {

  return (
    <Container>
      <input type="checkbox" checked={isChecked} onChange={toggle} />
      <span />
    </Container>
  );
}

export const Switch = memo(SwitchComponent, (prev, next) => {
  return prev.isChecked === next.isChecked
})

const Container = styled.label`
  display: inline-block;
  width: 3rem;
  height: 1.5rem;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    transition: .5s;
    background: ${({theme}) => theme.colors.gray5};
    
    &:before {
      position: absolute;
      content: '';
      width: 1rem;
      height: 1rem;
      margin-left: .25rem;
      border-radius: 9999px;
      background: ${({theme}) => theme.colors.gray2};
      transition: .3s;
    }
  }

  input:checked + span {
    background: ${({theme}) => theme.colors.dark};

    &:before {
      transform: translateX(22px);
    }
  }
`