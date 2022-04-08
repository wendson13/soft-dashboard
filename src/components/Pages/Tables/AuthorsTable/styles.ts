import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({theme}) => theme.colors.dark};
  margin: 1rem;
`;

export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;

  th, td {
    width: 20%;
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;

    &:first-child {
      width: auto;
      padding-left: 1rem;
    }

    &:last-child{
      width: 10%;
      padding-right: 1rem;
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
    text-align: left;
    font-size: 1rem;
    color: ${({theme}) => theme.colors.gray7};
  }
  
  button {
    background: transparent;
    border: 0;
    color: ${({theme}) => theme.colors.gray7};
  }
`;

export const MemberBox = styled.td`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: .5rem;
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${({theme}) => theme.colors.gray9};
    }

    span {
      color: ${({theme}) => theme.colors.gray7};
    }
  }
`;

export const FunctionBox = styled.td`
  p {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    font-weight: 500;
    color: ${({theme}) => theme.colors.gray7};

    span {
      font-weight: 400;
      color: ${({theme}) => theme.colors.gray6};
    }
  }
`;

type StatusBoxType = {
  status: 'Online' | 'Offline';
}

export const StatusBox = styled.td<StatusBoxType>`
  span {
    font-weight: 700;
    padding: .25rem .75rem;
    border-radius: .5rem;
    color: ${({theme}) => theme.colors.gray1};
    background: ${({theme, status}) => status === 'Online' 
    ? theme.gradients.success 
    : theme.gradients.secondary};
  }
`;


export const TitleEditable = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({theme}) => theme.colors.dark};
  margin: 1rem;
`;

export const TableEditable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;

  th, td {
    width: 20%;
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0;

    &:first-child {
      width: auto;
      padding-left: 1rem;
    }

    &:last-child{
      width: 10%;
      padding-right: 1rem;
    }
  }

  th {
    font-weight: 700;
    color: ${({theme}) => theme.colors.gray8};
  }
`;

export const TableRowBodyEditable = styled.tr`
  border-top: .2rem solid ${({theme}) => theme.colors.gray4};

  td {
    text-align: left;
    font-size: 1rem;
    color: ${({theme}) => theme.colors.gray7};
  }
  
  button {
    background: transparent;
    border: 0;
    color: ${({theme}) => theme.colors.gray7};
  }
`;

export const MemberBoxEditable = styled.td`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: .5rem;
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${({theme}) => theme.colors.gray9};
    }

    span {
      color: ${({theme}) => theme.colors.gray7};
    }
  }
`;

export const FunctionBoxEditable = styled.td`

  input:first-child {
    font-size: 1.1rem;
    font-weight: 500;
    border-radius: .5rem;
    padding: .5rem;
    margin-bottom: .5rem;
    border: .1rem solid ${({theme}) => theme.colors.gray6}; 
  }

  input:last-child {
    font-size: 1.1rem;
    border-radius: .5rem;
    padding: .5rem;
    border: .1rem solid ${({theme}) => theme.colors.gray6}; 
  }
`;

export const EmployedEditable = styled.td`
  input {
    padding: .5rem;
    font-size: 1.1rem;
    border-radius: .5rem;
    border: .1rem solid ${({theme}) => theme.colors.gray6}; 
  }
`;
