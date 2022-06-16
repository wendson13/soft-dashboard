import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { Conversations } from '../../components/Pages/Profile/Conversations';
import { Navigation } from '../../components/Pages/Profile/Navigation';
import { ProfileInfo } from '../../components/Pages/Profile/ProfileInfo';
import { ProjectsSection } from '../../components/Pages/Profile/ProjectsSection';
import { Settings } from '../../components/Pages/Profile/Settings';
import { api } from '../../services/api';

type Social = {
  imageUrl: string;
  link: string;
}

type Conversation = {
  id: string;
  imageUrl: string;
  name: string;
  message: string;
}

type DataType = {
  settings: {
    account: {
      follows: boolean;
      answers: boolean;
      mentions: boolean;
    };

    application: {
      projects: boolean;
      products: boolean;
      newsletter: boolean;
    }
  }

  conversations: Conversation[];
}

type Info = {
  imageUrl: string;
  name: string;
  function: string;
  about: string;
  mobile: string;
  email: string;
  location: string;
  social: Social[];
}

type Member = {
  imageUrl: string;
  email: string;
}

type ProjectType = {
  id: string;
  name: string;
  coverUrl: string;
  description: string;
  members: Member[];
}

type ProjectsType = {
  projects: ProjectType[];
}

type DataFetch = DataType & {
  userInfo: Info;
}

export function Profile() {

  const [data, setData] = useState<DataType>();
  const [userInfo, setUserInfo] = useState<Info>();
  const [projects, setProjects] = useState<ProjectType[]>();

  const handleGetProfileData = async () => {
    await api.get<DataFetch>('user/profile').then(({ data }) => {
      setData({
        settings: data.settings,
        conversations: data.conversations
      });

      setUserInfo(data.userInfo);
    })

    const { data } = await api.get<ProjectsType>('projects');

    const projectData = data.projects.slice(-3).map((project, index) => {
      return {
        id: String(data.projects.length - index),
        name: project.name,
        description: project.description,
        coverUrl: project.coverUrl,
        members: project.members
      }
    }).reverse();

    setProjects(projectData);
  }

  useEffect(() => {
    if (!data) {
      handleGetProfileData()
    }
  }, [data]);

  if (!data || !userInfo || !projects) {
    return (
      <Loading />
    );
  }

  return (
    <Container>
      <Header themeType='dark' />

      <main>
        <Navigation userInfo={userInfo} />
        <Options>
          <Settings
            account={data.settings.account}
            application={data.settings.application}
          />
          <ProfileInfo info={userInfo} setInfo={setUserInfo} />

          <Conversations conversations={data.conversations} />
        </Options>

        <ProjectsSection
          projects={projects}
          setProjects={setProjects}
        />
      </main>

      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-right: 1rem;
  }
`;

const Options = styled.section`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  & > * {
    max-width: calc(33% - .5rem);
  }
`;