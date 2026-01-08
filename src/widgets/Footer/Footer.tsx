import { Container } from '../../shared/ui/Container/Container';
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.section}>
      <Container>
        <ul className={styles.links}>
          <li><a href ='/privacy'>Политика конфиденциальности</a></li>
          <li><a href ='/terms'>Пользовательское соглашение</a></li>
          <li><a href ='/contact'>Связаться с нами</a></li>
          <li><a href ='/careers'>Вакансии</a></li>
        </ul>
        <p className={styles.copyright}>Missing — сервис сопровождения релокации © 2025. Все права защищены </p>
      </Container>
    </footer>
  );
}