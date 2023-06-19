import { ProjectsList } from '../../components/ProjectsList/ProjectsList'
import './Portfolio.css'

export const Portfolio = () => {
  return (
    <div className='portfolio page'>
      <h1 className='heading'>Portfolio</h1>
      <ProjectsList />
    </div>
  )
}
