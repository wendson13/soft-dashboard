import styled from 'styled-components';

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  padding: 1rem;


  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({theme}) => theme.colors.dark};
  }

  p {
    display: flex;
    align-items: center;
    gap: .5rem;
    font-size: 1rem;
    color: ${({theme}) => theme.colors.gray7};

    span {
      font-weight: 700;
      color: ${({theme}) => theme.colors.info};
    }
  }
`;

export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;

  th, td {
    text-align: left;
    font-size: 1rem;
    color: ${({theme}) => theme.colors.gray8};
    padding: 1rem 0;

    &:first-child {
      padding-left: 1rem;
    }

  }

  th {
    font-weight: 700;
    color: ${({theme}) => theme.colors.gray8};
  }
`;

export const TableRowBody = styled.tr`
  border-top: .2rem solid ${({theme}) => theme.colors.gray4};

  td {
    width: 20%;
    text-align: left;
    font-size: 1rem;
    font-weight: 500;

    > img {
      width: 1.75rem;
      height: 1.75rem;
      border-radius: 9999px;
      margin-left: -.75rem;
    }

    &:first-child {
      padding-left: 1rem;
      color: ${({theme}) => theme.colors.dark}
    }

    &:last-child{
      text-align: right;
      padding-right: 4rem;
    }
  }
`;

export const TitleBody = styled.td`
  span {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 1.75rem;
      height: 1.75rem;
      border-radius: .5rem;
    }
  }
`;

type PercentageBodyProps = {
  percentage: string;
  status: 'working' | 'canceled' | 'done';
}

export const PercentageBody = styled.td<PercentageBodyProps>`
  > div {
      width: 100%;
      height: .25rem;
      margin-top: .5rem;
      overflow: hidden;
      border-radius: 1rem;
      background: ${({theme}) => theme.colors.gray7};

      &::after {
        content: '';
        width: ${({ percentage }) => percentage};
        height: 100%;
        display: block;
        border-radius: 1rem;
        background: ${({status, theme}) => {
          if(status === 'done'){
            return theme.colors.success;
          }
          if(status === 'working'){
            return theme.colors.info;
          }
          if(status === 'canceled'){
            return theme.colors.danger;
          }
        }};
      }
    }
`;

type OptionsProps = {
  isOpen: boolean;
  itemId: string;
  current: string;
}

export const Options = styled.td<OptionsProps>`
  position: relative;

  > div {
    display: flex;
    justify-content: end;
  }

  > span {
    display: flex;
    flex-direction: column;
    background: red;
    position: absolute;
    right: 5.5rem;
    border-radius: .5rem;
    overflow: hidden;
    transition: .3s;
    box-shadow: .1rem .1rem .5rem ${({theme}) => theme.colors.gray6};
    background: ${({theme}) => theme.colors.gray1};

    ${({ isOpen, current, itemId }) => isOpen && current === itemId ? (
      `top: 1rem;
      opacity: 1;
      z-index: 100;`
    ):
      `top: .5rem;
      opacity: 0;
      z-index: -1;`
    }


    button {
      border: 0;
      font-size: 1.1rem;
      padding: .25rem .5rem;
      background: transparent;

      &:hover {
        background: ${({theme}) => theme.colors.gray4};
      }
    }

    button:last-child {
      border-top: .1rem solid ${({theme}) => theme.colors.gray4};
    }
  }

  svg {
    cursor: pointer;
  }
`;

export const TableEditableInput = styled.input`
  padding: .5rem;
  border-radius: .5rem;
  border: .1rem solid gray;
  font-size: 1.1rem;
`;

export const TableEditableSelect = styled.select`
  padding: .5rem;
  border-radius: .5rem;
  border: .1rem solid gray;
  background: transparent;
  cursor: pointer;
`;

export const TableEditableSubmit = styled.td`
  > div {
    display: flex;
    justify-content: end;
  }


  button {
    background: transparent;
    border: 0;
  }
`;