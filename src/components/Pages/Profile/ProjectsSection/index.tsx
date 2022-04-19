import { GiSaveArrow } from 'react-icons/gi';
import styled, { useTheme } from 'styled-components'; 
import { BoxShadow } from '../../../Styles/Containers';
import { ProjectItem } from './ProjectItem';

type Member = {
  imageUrl: string;
  email: string;
}

type ProjectType = {
  id: string;
  name: string;
  projectCover: string;
  description: string;
  members: Member[];
}

type ProjectsType = {
  projects: ProjectType[];
}

export function ProjectsSection ({ projects }: ProjectsType) {

  const { colors } = useTheme();

  return (
    <BoxShadow  style={{ gap: '1rem' }}>

      <TitleBox>
        <h2>Projects</h2>
        <span>Architects design houses</span>
      </TitleBox>

      <Content>
        {
          projects.map(project => {
            return <ProjectItem key={project.id} project={project} />
          })
        }

        <UploadBox>
          <button>
            <GiSaveArrow size={24} color={colors.gray8} />
            <span>Upload new project</span>
          </button>
        </UploadBox>
      </Content>
  
    </BoxShadow>
  );
}

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  margin-bottom: 1rem;

  h2 {
    font-size: 1.5rem;
    font-weight: '700';
    color: ${({theme}) => theme.colors.dark};
  }

  span {
    color: ${({theme}) => theme.colors.gray7};
  }
`;

const UploadBox = styled.div`
  button {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    border-radius: .5rem;
    border: .1rem solid ${({theme}) => theme.colors.gray6};
    background: transparent;

    span {
      color: ${({theme}) => theme.colors.dark};
    }
  }
`;

const Content = styled.div`
  display: flex;
  gap: 2rem;

  > div {
    width: 25%;
  }
`;
