import { BiImageAdd } from 'react-icons/bi';
import styled from 'styled-components';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

type ImageUploadProps = {
  src: string;
  alt?: string;
  required?: boolean;
  onChange: (newSrc: string) => void;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
}

export function ImageUpload({ src, onChange, borderRadius = 99999, width, height, alt, required = false }: ImageUploadProps) {

  const handleSetPreviewImage = (e: HTMLInputElement) => {
    if (e.files) {
      const reader = new FileReader();
      reader.readAsDataURL(e.files[0]);
      reader.onload = (event) => {
        if (event.target && event.target.result) {
          onChange(event.target.result as string);
        }
      }
    }
  }

  return (
    <Container
      borderRadius={borderRadius}
      width={isNaN(Number(width)) ? width : `${width}rem`}
      height={isNaN(Number(height)) ? height : `${height}rem`}>

      {
        src ?
          <img src={src} alt={alt} />
          :
          <AddImageBox>
            <AccessibleIcon.Root
              label="add image"
              children={<BiImageAdd />}
            />
            <span>{alt}</span>
          </AddImageBox>
      }
      <input
        required
        onChange={(e) => handleSetPreviewImage(e.target)}
        type="file"
        accept='image/*'
      />
    </Container>
  );
}

type ContainerProps = {
  width?: number | string;
  height?: number | string;
  borderRadius: number;
}

const Container = styled.div<ContainerProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border: .1rem solid ${({ theme }) => theme.colors.dark};
  border-radius: ${({ borderRadius }) => `${borderRadius}rem`};
  outline: none;
  
  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  input {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    z-index: 10;
    cursor: pointer;
  }
`;

const AddImageBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: .25rem;
  text-align: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.dark};

  svg {
    width: 2rem;
    height: 2rem;
  }
`;