import { DialogContent, DialogOverlay } from '@radix-ui/react-dialog';
import styled from 'styled-components';

export const Overlay = styled(DialogOverlay)`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.rgba.gray1};
`;

export const Content = styled(DialogContent)`
  position: absolute;
  box-shadow: .1rem .1rem .5rem ${({ theme }) => theme.colors.gray6};
  background: ${({ theme }) => theme.colors.gray1};
  overflow: auto;
  border-radius: 1rem;
  outline: none;
  padding: 2rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: auto;
  -webkit-overflow-scrolling: touch;
`;