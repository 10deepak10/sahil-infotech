import CTA from '../../components/cta/CTA'
// import Portfolio from '../portfolio/Portfolio'
import Experties from './Experties/Experties'
import './Home.scss'
import Aboutus from './aboutus/Aboutus'
import BookAService from './bookservice/BookAService'
import Experience from './experience/Experience'
import { Hero } from './hero/Hero'
import IndustriesSwiper from './industry/IndustriesSwiper'
import Process from './process/Process'
import Services from './services/Services'

 const processData= [
    {
      step: 1,
      title: "Understand & Recommend",
      img: "/media/icons/human-resources.svg",
      description:
        "We constantly aspire to break boundaries by understanding our clients' requirements and striving to deliver tailored solutions that meet their needs, helping them achieve success with scalable, efficient, and innovative strategies.",
    },
    {
      step: 2,
      title: "Strategy & Planning",
      img: "/media/icons/web-development.svg",
      description:
        "Understanding the challenges organizations face, we are committed to equipping our clients with scalable, efficient, and innovative computing services through the application of the best strategies.",
    },
    {
      step: 3,
      title: "Design & Develop",
      img: "/media/icons/vector.svg",
      description:
        "With a team of highly skilled designers and developers, we meet the criteria for UX/UI software design, API integrations, backend development, and frontend development (Angular, React, Vue.js, etc.). Our excellent problem solvers are dedicated to adding value to your organization.",
    },
    {
      step: 4,
      title: "Marketing Recommendation",
      img: "/media/icons/marketing.svg",
      description:
        "Our experts leverage top marketing strategies and tactics to maximize your marketing investment, ensuring the highest return by creating targeted solutions that drive growth and achieve your business objectives effectively.",
    },
    {
      step: 5,
      title: "Testing & Launch",
      img: "/media/icons/launch.svg",
      description:
        "Testing and validation are crucial. We have a dedicated team of testers who create test scenarios, catch regressions, and produce automated integration, unit, and UI tests.",
    },
  ];


const Home = () => {
  return (
    <>
   <Hero
      title={`Transform Your Digital Journey with<br/><span> Sahil Infotech</span>`}
      subtitle={`We are a team of innovative developers at Sahil Infotech, <br/>building cutting-edge websites with the latest technologies to 
      elevate your business.`}
      image="../../../../media/hero.jpg"
      buttonText="Contact Us"
      buttonPath="/contact"
    />
    <Experience />
    <Process  ourProcess={processData} arrowOrder={["→", "→", "_", "←", "↓"]}/>
    <Aboutus/>
    <CTA/>
    <Services/>
    <Experties/>
    {/* <Portfolio/> */}
    <IndustriesSwiper/>
    <BookAService/>
    </>
  )
}

export default Home
