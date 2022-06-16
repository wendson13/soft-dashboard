import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { Spinner } from '../Loading';

type AvatarProps = AvatarPrimitive.AvatarImageProps & {
  size?: number | string;
  borderRadius?: number | string;
}

export function Avatar({ size = '2rem', borderRadius = '99999rem', ...rest }: AvatarProps) {
  return (
    <AvatarPrimitive.Root>
      <AvatarPrimitive.Image
        {...rest}
        style={{
          width: size,
          height: size,
          borderRadius
        }}
      />
      <AvatarPrimitive.Fallback>
        <Spinner size={2} borderSize={.5} />
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>

  );
}