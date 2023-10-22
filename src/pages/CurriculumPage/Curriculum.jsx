import { Link } from 'react-router-dom'
import { IconExternalLink } from '@tabler/icons-react'
import './Curriculum.css'

export const Curriculum = () => {
  return (
    <div className='curriculum page'>
      <h1>Curriculum</h1>

      <section className='curriculum-section'>
        <article className='section experience'>
          <h2 className='section-title'>Experience</h2>
          <ul className='section-list'>
            <li className='section-item'>
              <h4 className='experience-title'>Soluciones Electrónicas SIMTRO</h4>
              <p className='experience-date'>June 2023 - August 2023</p>
              <p className='experience-info'>
                Participation in the implementation of functionalities and resolution of little bugs in a software used as
                shooting simulator by the Secretariat of National Defense (SEDENA) of Mexico
              </p>
            </li>
            <li className='section-item'>
              <h4 className='experience-title'>Autodidact</h4>
              <p className='experience-date'>2021 - Today</p>
              <p className='experience-info'>
                Personal experience throught my projects{' '}
                <Link className='internal-link' to='/portfolio'>
                  Personal Proyects
                </Link>
              </p>
            </li>
          </ul>
        </article>

        <article className='section knowledge'>
          <h2 className='section-title'>Knowledge</h2>
          <ul className='section-list'>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Express</li>
            <li>Git & GitHub</li>
          </ul>
        </article>

        <article className='section education'>
          <h2 className='section-title'>Education</h2>
          <ul className='section-list'>
            <li>Technical career in programming (2017 - 2020)</li>
            <li>Bachelor&apos;s Degree in Computer Systems Engineering (2020 - today)</li>
          </ul>
        </article>

        <article className='section personal-projects'>
          <h2 className='section-title'>Personal Proyects</h2>
          <p>
            Check my personal proyects! <Link to='/portfolio'>Personal Proyects</Link>
          </p>
        </article>

        <article className='section languages'>
          <h2 className='section-title'>Languages</h2>
          <ul className='section-list'>
            <li>
              English - C1{' '}
              <a className='certificate' target='_blank' rel='noreferrer' href='https://www.efset.org/cert/nAshmx'>
                Certificate <IconExternalLink size={15} />
              </a>
            </li>
            <li>Spanish - Native</li>
          </ul>
        </article>
      </section>
    </div>
  )
}
