import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode } from 'react';
import { Content, Overlay } from './styles';

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  width: number | string;
}

export const Modal = ({ children, isOpen, width }: ModalProps) => (

  <Dialog.Root open={isOpen}>

    <Dialog.Portal>

      <Overlay />

      <Content style={{ width }}>
        {children}
      </Content>

    </Dialog.Portal>

  </Dialog.Root>

);
