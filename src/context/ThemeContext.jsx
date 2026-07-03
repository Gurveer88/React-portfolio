import { createContext, useContext, useEffect, useState } from 'react';
import { flushSync } from 'react-dom'; // Add this import

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark'; 
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Updated toggle function with View Transitions
  const toggleTheme = () => {
    // Fallback for older browsers that don't support the API
    if (!document.startViewTransition) {
      setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
      return;
    }

    // Trigger the smooth transition
    document.startViewTransition(() => {
      flushSync(() => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
      });
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);