import * as SelectPrimitive from '@radix-ui/react-select';
import { ImCross } from 'react-icons/im';
import { IoIosArrowDown } from 'react-icons/io';
import { SelectContent, SelectItem, SelectTrigger, SelectViewport } from './styles';
import { BsCheck } from 'react-icons/bs';

type SelectProps = {
  selectItemsId: string[];
  onValueChange: (value: string) => void;
}

export function Select({ selectItemsId, onValueChange }: SelectProps) {
  return (
    <SelectPrimitive.Root defaultValue="visa" onValueChange={value => onValueChange(value)}>
      <SelectTrigger aria-label="card">
        <SelectPrimitive.Value />

        <SelectPrimitive.Icon>
          <IoIosArrowDown />
        </SelectPrimitive.Icon>

      </SelectTrigger>

      <SelectContent>
        <SelectPrimitive.ScrollUpButton>
          <ImCross />
        </SelectPrimitive.ScrollUpButton>

        <SelectViewport>
          {
            selectItemsId.map((item, index) => {
              return (
                <SelectItem value={item} key={index}>
                  <SelectPrimitive.ItemText>{item}</SelectPrimitive.ItemText>

                  <SelectPrimitive.ItemIndicator>
                    <BsCheck size={20} />
                  </SelectPrimitive.ItemIndicator>
                </SelectItem>
              );
            })
          }
        </SelectViewport>

        <SelectPrimitive.ScrollDownButton>
          <ImCross />
        </SelectPrimitive.ScrollDownButton>
      </SelectContent>
    </SelectPrimitive.Root>
  );
}