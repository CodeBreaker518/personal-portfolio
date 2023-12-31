import { projects } from '../../data/projects'
import { Link } from 'react-router-dom'
import githubLink from '/assets/github.png'
import './ProjectsList.css'

// eslint-disable-next-line react/prop-types
export const ProjectsList = ({ listLimit }) => {
  return (
    <section className='projects-container'>
      {projects.slice(0, listLimit).map((project) => {
        return (
          <article key={project.id} className='project-item'>
            <div className='mask-img'>
              <img src={`/assets/${project.id}.jpg`} alt={project.id} />
            </div>
            <span>{project.categories}</span>
            <h2>
              <Link to={`/proyect/${project.id}`}>{project.name}</Link>
            </h2>
            <div className='project-info-container'>
              <h3>
                Technologies:{' '}
                {project.technologies.length > 0
                  ? project.technologies.slice(0, -1).join(', ') + ', ' + project.technologies.slice(-1)
                  : 'There are no technologies'}
              </h3>
              <Link to={`${project.githubUrl}`} target='_blank' rel='noreferrer'>
                <img src={githubLink} className='github-icon' alt='github link' />
              </Link>
            </div>
          </article>
        )
      })}
    </section>
  )
}
