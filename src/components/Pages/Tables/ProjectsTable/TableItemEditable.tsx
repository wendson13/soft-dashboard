import { useState } from 'react';
import { Spinner } from '../../../Loading';
import { Select } from '../../../Select';
import { TableEditableInput, TableEditableSubmit, TitleBody } from './styles';

type User = {
  email: string;
  imageUrl: string;
}

type Status = 'working' | 'canceled' | 'done';

type Project = {
  id: string;
  name: string;
  logoUrl: string;
  members: User[];
  users: number;
  clients: number;
  sales: number;
  budget: number;
  percentageCompleted: number;
  status: Status;
}

type TableItemEditableProps = {
  project: Project;
  setProjectsList: (project: Project) => void;
  loading: boolean
}

export function TableItemEditable({ project, setProjectsList, loading }: TableItemEditableProps) {

  const [budget, setBudget] = useState(project.budget);
  const [status, setStatus] = useState(project.status)
  const [percentage, setPercentage] = useState(project.percentageCompleted)

  return (
    <>
      <TitleBody>
        <span>
          <img src={project.logoUrl} alt={project.name} />
          {project.name}
        </span>
      </TitleBody>
      <td>
        <TableEditableInput
          autoFocus
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
        <Select
          onValueChange={e => setStatus(e as Status)}
          selectItemsId={[
            'done',
            'working',
            'canceled'
          ]}
        />
      </td>

      <td>
        <TableEditableInput
          type="number"
          placeholder={`${project.percentageCompleted}%`}
          max={100}
          min={0}
          value={percentage}
          onChange={(e) => setPercentage(Number(e.target.value))}
        />
      </td>

      <TableEditableSubmit>
        {
          loading ?
            <div><Spinner size={2} borderSize={.5} /></div>
            :
            <button
              onClick={() => setProjectsList({
                ...project,
                budget,
                status,
                percentageCompleted: percentage
              })}
            >
              Save
            </button>
        }
      </TableEditableSubmit>
    </>
  );
}