import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Loading } from '../../components/Loading';
import { AuthorsTable } from '../../components/Pages/Tables/AuthorsTable';
import { ProjectsTable } from '../../components/Pages/Tables/ProjectsTable';
import { api } from '../../services/api';

type UserProject = {
  email: string;
  imageUrl: string;
}

type Project = {
  id: string;
  name: string;
  imageUrl: string;
  members: UserProject[];
  users: number;
  clients: number;
  sales: number;
  budget: number;
  percentageCompeted: number;
  status: 'working' | 'canceled' | 'done';
}

type DataFetch = {
  projects: Project[];
}

type Projects = {
  projects: Project[];
  percentageProjectsCompeted: number;
}

type User = {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
  status: 'Online' | 'Offline';
  employed: string;
  functions: {
    primary: string;
    secondary: string;
  }
}

export function Tables () {

  const [projectData, setProjectsData] = useState<Projects>();
  const [usersList, setUsersList] = useState<User[]>();

  const getProjectData = async (controller: AbortController) => {
    const { data } = await api.get<DataFetch>('projects', { signal: controller.signal });

    const countProjectsComplete = data.projects.filter(project => project.status === 'done').length;
    const percentageProjectsCompeted = (countProjectsComplete * 100) / data.projects.length;

    setProjectsData({
      projects: data.projects,
      percentageProjectsCompeted
    })
  }

  const getUserList = async (controller: AbortController) => {
    const { data } = await api.get<User[]>('user/members', { signal: controller.signal });
    
    setUsersList(data);
  }

  useEffect(() => {
    const controller = new AbortController();

    if(!projectData){
      getProjectData(controller);
    }

    if(!usersList){
      getUserList(controller);
    }

    return () => controller.abort()
  }, [])

  if(!projectData || !usersList){
    return (
      <Loading />
    );
  }

  return (
    <Container>
      <AuthorsTable
        users={usersList} 
        setUsersList={setUsersList}
      />

      <ProjectsTable 
        projects={projectData.projects} 
        percentageProjectsCompeted={projectData.percentageProjectsCompeted}
        setProjectsList={setProjectsData}
      />
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  padding-bottom: 3rem;
  gap: 2rem;
`;