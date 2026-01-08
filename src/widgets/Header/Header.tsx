import { Button } from '../../shared/ui/Button/Button';
import { Container } from '../../shared/ui/Container/Container';
import { ThemeToggle } from '../../shared/ui/ThemeToggle/ThemeToggle';
import styles from './Header.module.css'

type HeaderProps = {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

export function Header({theme, onToggle}: HeaderProps) {
  return (
    <header className={styles.section}>
      <Container>
        <div className={styles.inner}>

          <div className={styles.logo}>
            Missing
          </div>

          <nav className={styles.nav}>
            <a href='#how-it-works'>Как это работает</a>
            <a href='destinations'>Направления</a>
            <a href='#pricing'>Тарифы</a>
            <Button className={styles.button}>Связаться</Button>
            <ThemeToggle theme={theme} onToggle={onToggle}/>
          </nav>
        </div>
      </Container>
    </header>
  );
}