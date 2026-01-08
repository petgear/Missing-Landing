import { Container } from "../../shared/ui/Container/Container";
import styles from './ProblemSolution.module.css'

export function ProblemSolution() {

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.text}>
          <p className={styles.lead}>Сотни тысяч людей хотят переехать в другую страну, но не знают, с чего начать</p>

          <p>И не знают, что именно им нужно делать</p>

          <h2 className={styles.title}>У нас есть решение!</h2>

          <p className={styles.accent}>Компания Missing поможет вам не только подготовить документы, но и обосноваться на новом месте.</p>

          <p>Десятки юристов и несколько перевозочных компаний готовы сопровождать вас на каждом этапе.</p>
          
        </div>
      </Container>
    </section>
  );
} 