import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './pages/projects';
import Services from './pages/services';
import ContactUs from './pages/contactUs';
import Home from './pages/home';
import Header from './components/header';
import Err from './components/err404';
import Down from './components/down'
import About from './pages/about'
import Safety from './pages/safety'
function App() {
  const color = useSelector((state) => state.counter.mode);
  return (
    <div className={"App "+color}>
      <BrowserRouter>
      <Header/>
        <Routes>

            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="services" element={<Services />} />
            <Route path="aboutUs" element={<About />} />
            <Route path="contactUs" element={<ContactUs />} />
            <Route path="projects" element={<Projects />} />
            <Route path="safety" element={<Safety />} />
            <Route path="*" element={<Err />} />
        </Routes>
        <Down/>
      </BrowserRouter>
    </div>
  );
}

export default App;
