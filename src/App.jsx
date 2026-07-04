import { ThemeProvider } from './context/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Resume from './components/sections/Resume';
import CustomCursor from './components/ui/CustomCursor';

function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      {/* 1. The "Desk" - Off-white on light mode, deep black/gray on dark mode. 
             Adds padding only on desktop (md:p-8) so mobile stays full width. */}
      <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 md:px-6 md:pt-6 lg:px-8 lg:pt-8 transition-colors duration-300">
        
        {/* 2. The "Paper" - Centered (mx-auto), max-width (max-w-7xl), pure white/dark gray background, rounded on desktop */}
        <main className="relative min-h-screen max-w-7xl mx-auto bg-white dark:bg-black md:rounded-t-3xl shadow-2xl overflow-hidden selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black border-t border-l border-r border-transparent dark:border-white/5 transition-colors duration-300">
          
          <CustomCursor />
          <Navbar />
          
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
          </Routes>

        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;