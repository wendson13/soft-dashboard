import { useState } from 'react';
import { IoMdMore } from 'react-icons/io';
import { api } from '../../../../services/api';
import { DropdownMenu } from '../../../DropdownMenu';
import { Spinner } from '../../../Loading';
import { BoxShadow } from '../../../Styles/Containers';
import { Options, PercentageBody, Table, TableRowBody, TitleBody, TitleBox } from './styles';
import { TableItemEditable } from './TableItemEditable';

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

type Projects = {
  projects: Project[];
  percentageProjectsCompleted: number;
}

type ProjectsTableProps = {
  projects: Project[],
  percentageProjectsCompleted: number;
  setProjectsList: (project: Projects) => void;
}

export function ProjectsTable({ projects, percentageProjectsCompleted, setProjectsList }: ProjectsTableProps) {

  const [currentModalOpen, setCurrentModalOpen] = useState('');
  const [currentEditing, setCurrentEditing] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChangeCurrentModal = (id: string) => {
    if (loading) return;

    if (currentModalOpen !== id) {
      setCurrentModalOpen(id)
      setModalIsOpen(true);
    }
    else {
      setModalIsOpen(!modalIsOpen);
    }
  }

  const handleActiveEditMode = (id: string) => {
    if (loading) return;

    if (currentEditing !== id) {
      setCurrentEditing(id);
    }


    if (isEditMode) return;
    setIsEditMode(true);
  }

  const handleProjectDataChange = async (data: Project) => {
    setLoading(true);

    const projectData = projects.find(project => project.id === data.id)

    if (projectData) {

      const { data: newProject } = await api.put<Project>(`projects/${projectData.id}`, {
        status: data.status,
        budget: data.budget,
        percentageCompleted: data.percentageCompleted
      })

      const result = projects.map(project => {
        if (project.id === data.id) {
          return newProject;
        }
        else {
          return project;
        }
      })

      const countProjectsComplete = projects.filter(project => project.status === 'done').length;
      const percentageProjectsCompleted = (countProjectsComplete * 100) / projects.length;

      const projectsList = {
        projects: result,
        percentageProjectsCompleted
      }

      setProjectsList(projectsList);
    }

    setLoading(false);
    setIsEditMode(false);
    setModalIsOpen(false);
  }

  const handleDeleteProject = async (id: string) => {
    setCurrentEditing(id);
    setModalIsOpen(false);
    setLoading(true);

    const projectData = projects.find(project => project.id === id);

    if (projectData) {
      await api.delete(`projects/${id}`)

      const result = projects.filter(project => project.id !== id);

      const countProjectsComplete = projects.filter(project => project.status === 'done').length;
      const percentageProjectsCompleted = (countProjectsComplete * 100) / projects.length;

      setProjectsList({
        projects: result,
        percentageProjectsCompleted
      });
    }

    setLoading(false);
  }

  return (
    <BoxShadow>
      <TitleBox>
        <h2>Projects</h2>
        <p>
          done this month
          <span>{`${percentageProjectsCompleted.toFixed(0)}%`}</span>
        </p>
      </TitleBox>

      <Table>
        <thead>
          <tr>
            <th>COMPANIES</th>
            <th>BUDGET</th>
            <th>STATUS</th>
            <th>COMPLETION</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {
            projects &&
            projects.slice(0, 5).map((project) => {

              return (
                <TableRowBody key={project.id}>
                  {
                    isEditMode && currentEditing === project.id ?

                      <TableItemEditable
                        project={project}
                        setProjectsList={handleProjectDataChange}
                        loading={loading}
                      />
                      :
                      <>
                        <TitleBody>
                          <span>
                            <img src={project.logoUrl} alt={project.name} />
                            {project.name}
                          </span>
                        </TitleBody>
                        <td>
                          {
                            project.budget ?
                              Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                              }).format(project.budget)
                              :
                              'Not Set'
                          }
                        </td>

                        <td>{project.status}</td>
                        <PercentageBody percentage={`${project.percentageCompleted}%`} status={project.status}>
                          {`${project.percentageCompleted}%`}
                          <div />
                        </PercentageBody>

                        <Options>
                          <DropdownMenu
                            Icon={loading && currentEditing === project.id ?
                              () => <Spinner size={2} borderSize={.5} /> : IoMdMore}
                            items={[
                              { text: 'Edit', onSelect: () => handleActiveEditMode(project.id) },
                              { text: 'Delete', onSelect: () => handleDeleteProject(project.id) }
                            ]}
                            showSide="left"
                          />
                        </Options>
                      </>
                  }
                </TableRowBody>
              );
            })
          }
        </tbody>
      </Table>
    </BoxShadow>
  );
}
