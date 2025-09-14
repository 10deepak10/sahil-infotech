import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import "./App.scss";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Career from "./pages/career/Career";
import JobDetail from "./pages/career/jobDetail/JobDetail";
import JobForm from "./pages/jobForm/JobForm";

function App() {
  return (
    <HelmetProvider>
      <Router>
        {/* 🌍 Default SEO for the site */}
        <Helmet>
          <title>Sahil Infotech | Web Development & IT Solutions</title>
          <meta
            name="description"
            content="Sahil Infotech builds cutting-edge websites and IT solutions using the latest technologies to elevate your business. Explore our services and career opportunities."
          />
          <meta
            name="keywords"
            content="Sahil Infotech, web development, careers, IT services, frontend developer jobs, backend developer jobs"
          />
          <meta property="og:site_name" content="Sahil Infotech" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/media/hero-bg.png" />
          <meta property="og:url" content="https://www.sahilinfotech.com" />

          {/* ✅ Organization Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sahil Infotech",
              url: "https://www.sahilinfotech.com",
              logo: "https://www.sahilinfotech.com/media/logo-white.png",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91 90167-38858",
                  contactType: "customer support",
                  areaServed: "IN",
                  availableLanguage: ["English", "Hindi"],
                },
              ],
              sameAs: [
                "https://www.instagram.com/sahil_infotech/",
                "https://www.facebook.com/sahilinfotech06/",
                "https://www.linkedin.com/company/sahil-infotech/",
              ],
            })}
          </script>
        </Helmet>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/job-detail/:id/:slug" element={<JobDetail />} />
          <Route path="/apply/:id?" element={<JobForm />} />
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          <Route path="*" element={<Home />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
