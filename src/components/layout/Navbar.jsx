import { Home, User, Code2, Briefcase, Mail, Moon, Sun, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useScroll } from '../../hooks/useScroll';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Only track scroll if we are on the home page
  const activeSection = useScroll(['home', 'skills', 'projects', 'contact']);

  const navItems = [
    { icon: <Home size={20} />, label: 'Home', path: '/', hash: '#home', id: 'home' },
    { icon: <User size={20} />, label: 'About', path: '/about', hash: '', id: 'about' },
    { icon: <Code2 size={20} />, label: 'Skills', path: '/', hash: '#skills', id: 'skills' },
    { icon: <Briefcase size={20} />, label: 'Projects', path: '/', hash: '#projects', id: 'projects' },
    { icon: <FileText size={20} />, label: 'Resume', path: '/resume', hash: '', id: 'resume' },
    { icon: <Mail size={20} />, label: 'Contact', path: '/', hash: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    
    // Handle external links (Resume)
    if (item.id === 'resume') {
      window.open(item.path, '_blank', 'noopener,noreferrer');
      return;
    }

    // Handle About Page navigation
    if (item.path === '/about') {
      navigate('/about');
      window.scrollTo(0, 0);
      return;
    }

    // Handle Home Page hash navigation
    if (location.pathname !== '/') {
      // If we are on /about and click a home link, go to home first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(item.hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // If already on home, just smooth scroll
      const element = document.querySelector(item.hash);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 w-max max-w-[95vw]">
      <nav className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-3 sm:py-4 rounded-full bg-white/70 dark:bg-black/50 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-lg transition-all">
        
        {navItems.map((item, index) => {
          // Determine if this specific item is active
          const isAboutPage = location.pathname === '/about' && item.id === 'about';
          const isHomeSection = location.pathname === '/' && activeSection === item.id;
          const isActive = isAboutPage || isHomeSection;
          
          return (
            <a
              key={index}
              href={item.path + item.hash}
              onClick={(e) => handleNavClick(e, item)}
              className={`group relative p-3 rounded-full transition-all duration-300 cursor-none ${
                isActive 
                  ? 'bg-slate-200 dark:bg-white/20 text-black dark:text-white' 
                  : 'text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10'
              }`}
            >
              {item.icon}
              
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black dark:bg-white text-white dark:text-black text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                {item.label}
              </span>
            </a>
          );
        })}

        <div className="w-px h-8 bg-slate-300 dark:bg-white/20 mx-1 sm:mx-2" />
        
        <button
          onClick={toggleTheme}
          className="group relative flex items-center justify-center p-3 rounded-full text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300 cursor-none overflow-hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={theme}
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.div>
          </AnimatePresence>
          
          <div className="opacity-0 pointer-events-none">
            <Sun size={20} />
          </div>

          <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black dark:bg-white text-white dark:text-black text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            {theme === 'dark' ? 'Light' : 'Dark'}
          </span>
        </button>

      </nav>
    </div>
  );
}