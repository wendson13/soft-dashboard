import styled from 'styled-components';
import { BoxShadow } from '../../../Styles/Containers';

type User = {
  email: string;
  imageUrl: string;
}

type Project = {
  id: string;
  name: string;
  imageUrl: string;
  members: User[];
  users: number;
  clients: number;
  sales: number;
  budget: number;
  percentageCompeted: number;
  status: 'working' | 'canceled' | 'done';
}

type ProjectsTableProps = {
  projects: Project[];
  percentage: number;
}

export function ProjectsTable ({ projects, percentage } : ProjectsTableProps) {

  return (
    <BoxShadow>
      <TitleBox>
        <h2>Projects</h2>
        <p>
          done this month
          <span>{`${percentage}%`}</span>
        </p>
      </TitleBox>

      <Table>
        <thead>
          <tr>
            <th>COMPANIES</th>
            <th>MEMBERS</th>
            <th>BUDGET</th>
            <th>COMPLETION</th>
          </tr>
        </thead>

        <tbody>
          {
            projects.slice(0, 5).map((project) => {
              return (
                <TableRowBody 
                  key={project.id}
                  status={project.status}
                  percentage={`${project.percentageCompeted}%`}
                >
                  <td>
                    <span>
                      <img src={project.imageUrl} alt={project.name} />
                      {project.name}
                    </span>
                  </td>
                  <td>
                    {
                      project.members.map((user, index) => {
                        return (
                          <img key={user.email + index} src={user.imageUrl} alt={user.email} />
                        );
                      })
                    }
                  </td>
                  <td>
                    {
                      project.budget ? 
                      Intl.NumberFormat('en-US', {
                        currency: 'USD',
                        style: 'currency'
                      }).format(project.budget)
                      :
                      `Not Set`
                    }
                  </td>
                  <td>
                    {
                      project.status === 'canceled' ? 
                      'canceled'
                      :
                      `${project.percentageCompeted}%`
                    }
                    <div />
                  </td>
                </TableRowBody>
              );
            })
          }
        </tbody>
      </Table>
    </BoxShadow>
  );
}

const TitleBox = styled.div`
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

const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;

  th, td {
    width: 20%;
    text-align: left;
    font-size: 1rem;
    color: ${({theme}) => theme.colors.gray8};
    padding: 1rem 0;

    &:first-child {
      width: 40%;
      padding-left: 1rem;
    }

    &:last-child{
      padding-right: 1rem;
    }
  }

  th {
    font-weight: 700;
    color: ${({theme}) => theme.colors.gray8};
  }
`;

type TableRowBodyProps = {
  percentage: string;
  status: 'working' | 'canceled' | 'done';
}

const TableRowBody = styled.tr<TableRowBodyProps>`
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

    div {
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

    &:first-child {
      width: 40%;
      padding: 0 1rem;
      color: ${({theme}) => theme.colors.dark}
    }

    &:last-child{
      padding-right: 1rem;
    }
  }
`;
