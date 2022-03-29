import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Exp from './components/experience/Exp';
import Footer from './components/footer/Footer';
import Nav from './components//nav/Nav';
import Project from './components/Projects/Projects'
import Test from './components/testimonial/Test';



function App() {
  return (
    <>
    <Header />
    <Nav/>
    <About/>
    <Exp/>
    <Project/>
    <Test/>
    <Contact/>
    <Footer/>
   
    
    </>
  );
}

export default App;
