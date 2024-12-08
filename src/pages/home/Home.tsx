import CTA from '../../components/cta/CTA'
import Footer from '../../components/footer/Footer'
// import Portfolio from '../portfolio/Portfolio'
import Experties from './Experties/Experties'
import './Home.scss'
import Aboutus from './aboutus/Aboutus'
import Experience from './experience/Experience'
import { Hero } from './hero/Hero'
import IndustriesSwiper from './industry/IndustriesSwiper'
import Process from './process/Process'
import Services from './services/Services'

const Home = () => {
  return (
    <>
    <Hero/>
    <Experience />
    <Process/>
    <Aboutus/>
    <CTA/>
    <Services/>
    <Experties/>
    {/* <Portfolio/> */}
    <IndustriesSwiper/>
    <Footer/>
    </>
  )
}

export default Home
