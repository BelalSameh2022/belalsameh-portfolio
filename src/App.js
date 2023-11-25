import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Themes from "./components/themes/Themes";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notFound/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
