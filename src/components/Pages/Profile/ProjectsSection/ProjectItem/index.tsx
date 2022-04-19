import styled from 'styled-components'; 

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

type ProjectItemProps = {
  project: ProjectType
}

export function ProjectItem ({ project }: ProjectItemProps) {
  return (
    <Container>
      <img src={project.projectCover} alt={project.name} />

      <strong>Project #{project.id}</strong>
      <h3>{project.name}</h3>

      <p>{project.description}</p>

      <div>
        <button>VIEW PROJECT</button>
        <div>
          {
            project.members.map(member => {
              return <img key={member.email} src={member.imageUrl} alt={member.email} />
            })
          }
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > img {
    min-width: 20%;
    width: 100%;
    height: 10rem;
    object-fit: cover;
    margin-bottom: 1rem;
    border-radius: 1rem;
    box-shadow: .1rem .1rem .75rem ${({theme}) => theme.colors.gray5};
  }

  > strong {
    font-weight: '500';
    color: ${({theme}) => theme.colors.gray7};
  }

  h3 {
    font-size: 1.25rem;
    color: ${({theme}) => theme.colors.dark};
  }

  > p {
    color: ${({theme}) => theme.colors.gray8};
    margin-bottom: 1rem;
  }

  > div {
    display: flex;
    justify-content: space-between;
    padding-right: 0 .5rem;
    margin-top: auto;

    button {
      font-weight: 700;
      padding: 1rem;
      border-radius: .5rem;
      border: .1rem solid ${({theme}) => theme.colors.primary};
      color: ${({theme}) => theme.colors.primary};
      box-shadow: .1rem .1rem .5rem ${({theme}) => theme.colors.gray6};
      background: transparent;
    }

    div {
      display: flex;
      align-items: end;

      img {
        width: 2rem;
        height: 2rem;
        border-radius: 99999rem;
        margin-left: -.75rem;
      }
    }
  }
`;