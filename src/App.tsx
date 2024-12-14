import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
// import Portfolio from "./pages/portfolio/Portfolio";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        </Routes>
        <ScrollToTop/>
        <Footer />
      </Router>
    </>
  );
}

export default App;
