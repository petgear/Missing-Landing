import { Button } from "../../shared/ui/Button/Button";
import { Container } from "../../shared/ui/Container/Container";
import styles from './Hero.module.css'

export function Hero() {
  return (
  <section className={styles.hero}>
    <Container>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1>Переезд в другую страну кажется слишком сложным?</h1>

          <p>
            Мы помогаем легально и без стресса переехать и обосноваться 
            в другой стране - шаг за шагом.
          </p>

          <Button className={styles.button}>Подобрать путь переезда ➜</Button>

          <div className={styles.solution}>
            Подберем 2-3 реальных визовых варианта под вашу цель
          </div>
        </div>

        <div className={styles.illustration}>
          <img src='./moving.jpg' alt='Moving illustration'/>
        </div>

      </div>
    </Container>
  </section>
  );
}