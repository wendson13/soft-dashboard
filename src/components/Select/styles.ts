import { Trigger, Content, Viewport, Item, ItemIndicator } from '@radix-ui/react-select';
import styled from 'styled-components';

export const SelectTrigger = styled(Trigger)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: .5rem;
  border: 0;
  padding: 1rem 2rem;
  font-weight: bold;
  gap: .5rem;
  color: ${({ theme }) => theme.colors.dark};
  background: ${({ theme }) => theme.colors.gray4};
`;

export const SelectContent = styled(Content)`
  overflow: hidden;
  background-color: white;
  border-radius: .5rem;
  box-shadow: .1rem .1rem .5rem ${({ theme }) => theme.colors.gray6};
`;

export const SelectViewport = styled(Viewport)`
  padding: .25rem;
`;

export const SelectItem = styled(Item)`
  display: flex;
  align-items: center;
  position: relative;
  padding: 1rem 2rem;
  border-radius: .5rem;
  color: ${({ theme }) => theme.colors.dark};
  user-select: none;
  transition: .2s;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.gray4};
  }
`;
