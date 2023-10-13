import { useParams } from 'react-router-dom'
import './Project.css'
import { projects } from '../../data/projects'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import githubLink from '../../../public/assets/github.png'

export const Project = () => {
  const [project, setProject] = useState({})

  // we use useParams() to receive the url params
  const params = useParams()

  useEffect(() => {
    let project = projects.filter((project) => project.id === params.projectId)
    setProject(project[0])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='project-page'>
      <div className='mask-img-project'>
        <img src={`/assets/${project.id}.jpg`} alt={project.id} />
      </div>
      <h1 className='project-name'>{project.name}</h1>
      <p className='project-technologies'>
        {project.technologies && project.technologies.length > 1
          ? project.technologies.map((technology, index) => {
              return index !== project.technologies.length - 1 ? `${technology}, ` : technology
            })
          : project.technologies}
      </p>
      <p className='project-description'>{project.description}</p>
      <div className='project-links-container'>
        <a className='project-link' href={project.url} target='_blank' rel='noreferrer'>
          Ir al projecto
        </a>
        <Link to={`${project.githubUrl}`} target='_blank' rel='noreferrer'>
          <img src={githubLink} className='github-icon' alt='github link' />
        </Link>
      </div>
    </div>
  )
}
