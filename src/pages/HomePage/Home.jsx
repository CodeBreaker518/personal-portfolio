import { Link } from 'react-router-dom'
import { ProjectsList } from '../../components/ProjectsList/ProjectsList'
import './Home.css'

export const Home = () => {
  return (
    <div className='home'>
      <h1>
        Hi! <br />I am Diego Perez Perez, I am 20 years old, student at the University of Guanajuato, Mexico. A
        passionate <strong>Front end web developer</strong> searching for amazing projects to collaborate and people to
        work with as a team.
      </h1>

      <h2>
        I would love to collaborate with you if you are interested on me! <Link to='/contact'>Contact with me.</Link>
      </h2>

      <section className='last-projects'>
        <h2 className='heading'>Some of my projects</h2>
        <p>These are some of my web development projects</p>
        <ProjectsList listLimit='2' />
      </section>
    </div>
  )
}
