import { FormEvent, useEffect, useState } from 'react';
import { GiSaveArrow } from 'react-icons/gi';
import { useTheme } from 'styled-components';
import { api } from '../../../../services/api';
import { Avatar } from '../../../Avatar';
import { ImageUpload } from '../../../ImageUpload';
import { Spinner } from '../../../Loading';
import { Modal } from '../../../Modal';
import { BoxShadow } from '../../../Styles/Containers';
import { ProjectItem } from './ProjectItem';
import { AddMembersBox, BoxMemberListAdding, BoxNewMembersInput, ButtonBox, Content, CreateBox, FormModalNewProject, ImageUploadBox, TitleBox } from './styles';

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
  setProjects: (projects: ProjectType[]) => void;
}

type MemberData = {
  id: string;
  name: string;
  imageUrl: string;
}

export function ProjectsSection({ projects, setProjects }: ProjectsType) {

  const [projectsData, setProjectsData] = useState(projects);
  const [modalNewProjectIsOpen, setModalNewProjectIsOpen] = useState(false);
  const [isSubmittingProject, setIsSubmittingProject] = useState(false);
  const [memberSearchByName, setMemberSearchByName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [logoImage, setLogoImage] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [isSearchingMember, setUsSearchingMember] = useState(false);
  const [membersList, setMembersList] = useState<MemberData[]>([]);
  const [autoCompleteMembersList, setAutoCompleteMembersList] = useState<MemberData[]>([]);
  const { colors } = useTheme();

  useEffect(() => {

    if (memberSearchByName.trim() && !autoCompleteMembersList.find(member => member.name.includes(memberSearchByName.toLowerCase()))) {
      searchMemberByName(memberSearchByName);
    }
  }, [memberSearchByName])

  const handleSubmitNewProject = async (event: FormEvent) => {
    event.preventDefault();

    if (isSubmittingProject || !modalNewProjectIsOpen) return;

    setIsSubmittingProject(true);

    try {
      const { data } = await api.post<ProjectType>('projects', {
        name: title,
        description,
        coverUrl: coverImage,
        logoUrl: logoImage,
        members: membersList
      });

      setProjects([
        ...projectsData,
        {
          ...data
        }
      ]);

      setProjectsData([
        ...projectsData,
        {
          ...data
        }
      ]);

      handleModalPropsClear();
      setIsSubmittingProject(false);
      setModalNewProjectIsOpen(false);
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddNewMemberInNewProject = (memberName: string) => {
    const memberNameLowerCase = memberName.toLowerCase();

    const member = autoCompleteMembersList.find(member => member.name.toLowerCase() === memberNameLowerCase);
    const exist = membersList.find(member => member.name.toLowerCase() === memberNameLowerCase);

    if (member && !exist) {
      setMembersList(state => [
        ...state,
        member
      ]);

      setMemberSearchByName('');
      setAutoCompleteMembersList([]);
    }
  }

  const searchMemberByName = async (name: string) => {
    setUsSearchingMember(true);

    const { data } = await api.get<MemberData[]>(`authors/${name}`);

    setAutoCompleteMembersList([...data])

    setUsSearchingMember(false);
  }

  const handleModalPropsClear = () => {
    setMemberSearchByName('');
    setMembersList([]);
    setAutoCompleteMembersList([]);
    setTitle('');
    setDescription('');
    setLogoImage('');
    setCoverImage('');

    setUsSearchingMember(false);
    setIsSubmittingProject(false);
    setModalNewProjectIsOpen(false)
  }

  return (
    <BoxShadow style={{ gap: '1rem' }}>
      <Modal
        width={'auto'}
        isOpen={modalNewProjectIsOpen}
        onCancelled={handleModalPropsClear}
      >
        <FormModalNewProject onSubmit={handleSubmitNewProject}>

          <h1>Create Project</h1>

          <ImageUploadBox>
            <ImageUpload
              required={true}
              src={logoImage}
              alt={'add logo'}
              onChange={setLogoImage}
              width={6}
              height={6}
            />

            <ImageUpload
              required={true}
              src={coverImage}
              alt={'add cover'}
              onChange={setCoverImage}
              width={14}
              height={8}
              borderRadius={0.5}
            />
          </ImageUploadBox>

          <input
            value={title}
            onChange={e => setTitle(e.target.value.trim())}
            type="text"
            placeholder="Project title"
            required
          />

          <textarea
            cols={50}
            rows={8}
            placeholder="Project description"
            required
            value={description}
            onChange={e => setDescription(e.target.value.trim())}
          />

          <AddMembersBox>
            <BoxMemberListAdding>
              {
                membersList.map(member => {
                  return (
                    <Avatar src={member.imageUrl} alt={member.name} key={member.id} />
                  );
                })
              }
            </BoxMemberListAdding>

            <BoxNewMembersInput>
              <input
                type="text"
                list="members"
                placeholder="type new member name"
                required={membersList.length === 0}
                value={memberSearchByName}
                onChange={(e) => setMemberSearchByName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.code === 'Enter') {
                    e.preventDefault();

                    handleAddNewMemberInNewProject(e.currentTarget.value);
                  }
                }}
              />
              {
                isSearchingMember && <Spinner size={2} borderSize={.5} />
              }
            </BoxNewMembersInput>

            <datalist id="members">
              {
                autoCompleteMembersList.map((member, index) => {
                  return (
                    <option value={member.name} key={member.id + index} />
                  );
                })
              }
            </datalist>
          </AddMembersBox>

          <ButtonBox>
            <button onClick={handleModalPropsClear}>Canceled</button>
            <button type="submit">Create</button>
          </ButtonBox>
        </FormModalNewProject>
      </Modal>

      <TitleBox>
        <h2>Projects</h2>
        <span>Architects design houses</span>
      </TitleBox>

      <Content>
        {
          projectsData.slice(-3).map(project => {
            return <ProjectItem key={project.id} project={project} />
          })
        }

        <CreateBox>
          <button type="button" onClick={() => setModalNewProjectIsOpen(true)}>
            <GiSaveArrow size={24} color={colors.gray8} />
            <span>Create new project</span>
          </button>
        </CreateBox>
      </Content>

    </BoxShadow>
  );
}
