import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
// import Portfolio from "./pages/portfolio/Portfolio";
import Header from "./components/header/Header";

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
      </Router>
    </>
  );
}

export default App;
