import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Impact from './components/Impact';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'animate.css';

function App() {
  useEffect(() => {
    document.title = 'Sharan Foundation | Gender Justice & Equality';
  }, []);

  return (
    <div className="font-[system-ui]">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Impact />
      <Testimonials />
      <Team />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;