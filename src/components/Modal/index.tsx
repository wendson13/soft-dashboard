import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode } from 'react';
import { Content, Overlay } from './styles';

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onCancelled?: () => void;
  width: number | string;
}

export const Modal = ({ children, isOpen, width, onCancelled }: ModalProps) => (

  <Dialog.Root open={isOpen}>

    <Dialog.Portal>

      <Overlay />

      <Content
        style={{ width }}
        onInteractOutside={onCancelled}
        onEscapeKeyDown={onCancelled}
      >
        {children}
      </Content>

    </Dialog.Portal>

  </Dialog.Root>

);
