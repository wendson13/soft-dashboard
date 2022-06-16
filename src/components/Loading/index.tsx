import styled from 'styled-components';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

type SpinnerProps = {
  size?: number
  borderSize?: number;
}

export function Loading() {
  return (
    <Container>
      <Spinner />
    </Container>
  );
}

export function Spinner({ size = 10, borderSize = 1.5 }: SpinnerProps) {
  return (
    <AccessibleIcon.Root label='loading'>
      <SpinnerStyle size={size} borderSize={borderSize} />
    </AccessibleIcon.Root>
  );
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

type SpinnerType = {
  size: number;
  borderSize: number;
}

const SpinnerStyle = styled.div<SpinnerType>`
  width: ${({ size }) => `${size}rem`};
  height: ${({ size }) => `${size}rem`};
  border-radius: 9999px;
  border: ${({ borderSize }) => `${borderSize}rem`} solid;
  border-color: ${({ theme }) => theme.colors.gray5} ${({ theme }) => theme.colors.gray5} ${({ theme }) => theme.colors.gray5} ${({ theme }) => theme.colors.info};
  animation: .6s spinner ease-in-out infinite;

  @keyframes spinner {
    from {
      transform: rotateZ(-360deg); 
    }
  }
`;
