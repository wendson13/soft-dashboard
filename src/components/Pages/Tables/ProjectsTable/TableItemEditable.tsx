import { useState } from 'react';
import { Spinner } from '../../../Loading';
import { TableEditableInput, TableEditableSelect, TableEditableSubmit, TitleBody } from './styles';

type User = {
  email: string;
  imageUrl: string;
}

type Status = 'working' | 'canceled' | 'done';

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
  status: Status;
}

type TableItemEditableProps = {
  project: Project;
  setProjectsList: (project: Project) => void;
  loading: boolean
}

export function TableItemEditable ({ project, setProjectsList, loading } : TableItemEditableProps ) {

  const [budget, setBudget] = useState(project.budget);
  const [status, setStatus] = useState(project.status)
  const [percentage, setPercentage] = useState(project.percentageCompeted)

  return (
    <>
      <TitleBody>
        <span>
          <img src={project.imageUrl} alt={project.name} />
          {project.name}
        </span>
      </TitleBody>
      <td>
        <TableEditableInput 
          type="number"
          min={0}
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          placeholder={
          project.budget ?
          Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(project.budget)
          : 
          'Not Set'
        } />
      </td>

      <td>
        <TableEditableSelect 
          value={status}
          onChange={(e) => {
            const statusValue = e.target.value as Status;

            setStatus(statusValue);
          }}
        >
          <option>done</option>
          <option>working</option>
          <option>canceled</option>
        </TableEditableSelect>
      </td>

      <td>
        <TableEditableInput 
          type="number" 
          placeholder={`${project.percentageCompeted}%`}
          max={100} 
          min={0}
          value={percentage}
          onChange={(e) => setPercentage(Number(e.target.value))}
        />
      </td>

      <TableEditableSubmit>
        {
          loading ? 
          <div><Spinner size={2}  borderSize={.5} /></div>
          :
          <button
            onClick={() => setProjectsList({
              ...project,
              budget,
              status,
              percentageCompeted: percentage
            })}
          >
            Save
          </button>
        }
      </TableEditableSubmit>
    </>
  );
}