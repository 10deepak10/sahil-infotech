import CTA from '../../components/cta/CTA'
import Footer from '../../components/footer/Footer'
// import Portfolio from '../portfolio/Portfolio'
import Experties from './Experties/Experties'
import './Home.scss'
import Aboutus from './aboutus/Aboutus'
import { Hero } from './hero/Hero'
import Process from './process/Process'
import Services from './services/Services'

const Home = () => {
  return (
    <>
    <Hero/>
    <Process/>
    <Aboutus/>
    <CTA/>
    <Services/>
    <Experties/>
    {/* <Portfolio/> */}
    <Footer/>
    </>
  )
}

export default Home
