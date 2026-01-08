import styles from './ThemeToggle.styles.module.css'

type ThemeToggleProps = {
  theme: 'dark' | 'light';
  onToggle: () => void;
}

export function ThemeToggle({theme, onToggle}: ThemeToggleProps) {
  return (
    <button 
    onClick={onToggle}
    type="button"
    aria-label="Switch Theme"
    className={styles.themeButton}
    >
      {theme === 'dark' ? '☀️' : '🌙'}</button>
  )
}