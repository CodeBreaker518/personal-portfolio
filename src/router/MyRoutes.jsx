import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom'
import './MyRoutes.css'
import '../styles/global.css'
import { Home } from '../pages/HomePage/Home'
import { Portfolio } from '../pages/PortfolioPage/Portfolio'
// import { Services } from '../pages/ServicesPage/Services'
import { Curriculum } from '../pages/CurriculumPage/Curriculum'
import { Contact } from '../pages/ContactPage/Contact'
import { NotFound } from '../pages/NotFoundPage/NotFound'
import { HeaderNav } from '../components/Layout/HeaderNav/HeaderNav'
import { Footer } from '../components/Layout/Footer/Footer'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Project } from '../pages/ProjectPage/Project'

const ScrollToTop = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return null
}

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, x: '-5%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ ease: 'easeOut', duration: 0.5 }}>
      <Routes location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        {/* <Route path='/services' element={<Services />} /> */}
        <Route path='/curriculum' element={<Curriculum />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/proyect/:projectId?/' element={<Project />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </motion.div>
  )
}

export const MyRoutes = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuActive(!isMenuActive)
  }

  useEffect(() => {
    if (isMenuActive) {
      document.body.classList.add('menu-active')
    } else {
      document.body.classList.remove('menu-active')
    }
  }, [isMenuActive])

  return (
    <div className='router'>
      <BrowserRouter>
        {/* Header & Navigation */}
        <HeaderNav isMenuActive={isMenuActive} onMenuToggle={handleMenuToggle} />

        {/* Main content */}
        <section className='main-content'>
          <ScrollToTop />
          <AnimatedRoutes />
        </section>

        {/* Footer */}
        <Footer />
      </BrowserRouter>
    </div>
  )
}
