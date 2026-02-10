import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Loading from './components/Loading';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS (scroll-based micro-animations)
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-out-cubic',
    });

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Prevent scrolling when loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  // Show loading screen
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-primary text-white min-h-screen">
      {/* Blur + gradient halo behind everything for a strong visual identity */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-accent/20 via-transparent to-transparent opacity-60 blur-3xl" />
        <div className="absolute -top-40 -right-40 w-[420px] h-[420px] bg-gradient-to-br from-accent/40 to-accent-light/20 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-gradient-to-tr from-accent/30 via-primary to-transparent rounded-full opacity-40 blur-3xl" />
      </div>

      <Navbar />

      <main className="relative z-0 w-full bg-hero-pattern bg-cover bg-no-repeat bg-center pt-[96px]">
        <div className="w-full">
          <Hero />
          <About />
          <Work />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;