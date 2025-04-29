import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return(
    <div className="h-screen scroll-smooth">
      <Navbar/>
      <Hero/>
      <About/>
      <Products/>
      <Contact/>
      <Footer/>
    </div>
  );
}