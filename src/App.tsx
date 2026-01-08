import LandingPage from './pages/LandingPage'
import { useLayoutEffect, useState } from 'react';
import './styles/theme.css';
import './styles/App.css';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = savedTheme;
    }
  }, []);

  const handleChangeTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
  }

  return (
    <LandingPage theme={theme} onToggleTheme={handleChangeTheme}/>
  );
}