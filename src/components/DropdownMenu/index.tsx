import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import styled from 'styled-components';

type Item = {
  text: string | ReactNode;
  onSelect: () => void;
}

type DropdownMenuProps = {
  Icon: IconType;
  items: Item[];
  showSide?: "top" | "right" | "bottom" | "left";
}

export function DropdownMenu({ Icon, items, showSide = 'bottom' }: DropdownMenuProps) {
  return (
    <DropdownMenuPrimitive.Root>
      <Trigger>
        <Icon size={28} />
      </Trigger>

      <Content side={showSide}>
        {
          items.map((item, index) => {
            return (
              <Item onSelect={item.onSelect} key={index}>
                {item.text}
              </Item>
            );
          })
        }
      </Content>

    </DropdownMenuPrimitive.Root >

  );
}

export const Trigger = styled(DropdownMenuPrimitive.Trigger)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background-color: transparent;
`;

export const Content = styled(DropdownMenuPrimitive.Content)`
  border-radius: .25rem;
  box-shadow: .1rem .1rem .5rem ${({ theme }) => theme.colors.gray6};
  background: ${({ theme }) => theme.colors.gray1};
`;

export const Item = styled(DropdownMenuPrimitive.Item)`
  padding: .5rem 1rem;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.gray4};
  }
`;