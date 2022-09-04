import React, { useEffect, useState } from 'react';
import { AboutProject, CloseModal, ModalContent, ProjectImage, ProjectList, ProjectListItem, ProjectModal, ProjectName } from './projects_styles';
import { StyledSection, Title } from '../style';
import { useQuery } from "graphql-hooks";
import { AiOutlineClose } from 'react-icons/ai'
import Modal from './Modal';

const PROJECT_QUERY = `query Project{
	allProjects{
	id
	title
    description
    deploy
    repo
    banner {
      url
    }
    images {
      url
    }
  }
}

  `

const Projects = () => {
	const { loading, error, data } = useQuery(PROJECT_QUERY)
	const [modal, setModal] = useState({ open: false, images: [], title: '', description: '', repo: '', deploy: '', id: 0 })

	useEffect(() => {
		document.body.style.overflow = modal.open ? 'hidden' : 'visible'
	}, [modal.open])

	if (loading) return 'Carregado'
	if (error) return 'Erro'

	function openModal(project) {
		setModal({
			open: true,
			images: project.images.map(image => image.url),
			title: project.title,
			description: project.description,
			repo: project.repo,
			deploy: project.deploy,
			id: project.id
		})

	}
	function closeModal() {
		setModal({ open: false })
	}



	return (
		<StyledSection>
			<Title margin='30px 0px 20px 0px' textAlign='center'>Projetos</Title>
			<Modal modalStats={modal} closeModal={closeModal} />
			<ProjectList>
				{data.allProjects.map(project => {
					return (
						<ProjectListItem key={project.id} onClick={() => openModal(project)}>
							<ProjectImage src={project.banner.url} />
							<AboutProject>
								<ProjectName>{project.title}</ProjectName>
							</AboutProject>
						</ProjectListItem>
					)
				})}
			</ProjectList>
		</StyledSection>
	);
};

export default Projects;