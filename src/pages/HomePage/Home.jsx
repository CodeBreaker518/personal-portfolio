import { Link } from 'react-router-dom'
import { ProjectsList } from '../../components/ProjectsList/ProjectsList'
import './Home.css'

export const Home = () => {
  return (
    <div className='home'>
      <h1 className='presentation-text'>
        I&apos;m Diego Perez Perez.
        <br />
        Student at the University of Guanajuato, Mexico.
        <br />
        Passionate <strong>Front end web developer</strong> searching for amazing projects to collaborate and people to work with
        as a team.
      </h1>

      <h2 className='contact-info'>
        Get in Touch with me! <Link to='/contact'>Contact.</Link>
      </h2>

      <section className='last-projects'>
        <h2 className='heading'>Projects</h2>
        <p>These are some of my projects</p>
        <ProjectsList listLimit='2' />
      </section>
    </div>
  )
}
