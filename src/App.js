
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import ProjectCard from './components/Projects';
import Clients from './components/Clients';
import Testimonials from './components/Testimonial';
import Footer from './components/Footer';


function App() {
  return (
    <Nav/>
    <About/>
    <Clients/>
    <Services/>
    <Testimonials/>
    <MainTestimonials/>
    <ContactFooter/>
  );
}

export default App;
