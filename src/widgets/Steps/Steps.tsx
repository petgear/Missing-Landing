import { Container } from "../../shared/ui/Container/Container";
import styles from './Steps.module.css';
import { FileText, Globe, Shield, CheckCheck, Plane} from 'lucide-react';

export function Steps() {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.header}>Как мы сопровождаем ваш переезд</h2>
          <ol className={styles.list}>

            <li>
              <span>01</span>
              <FileText size={38} className={styles.icon}/>
              <h3>Анализ вашей ситуации</h3>
              <p>
                Изучаем ваш опыт, цели и возможности для выбора лучших вариантов
              </p>
            </li>

            <li>
              <span>02</span>
              <Globe size={38} className={styles.icon}/>
              <h3>Подбор визового пути</h3>
              <p>
                Предлагаем 2–3 реальных маршрута с учётом сроков и бюджета
              </p>
            </li>

            <li>
              <span>03</span>
              <Shield size={38} className={styles.icon}/>
              <h3>Подготовка документов</h3>
              <p>
                Помогаем собрать и оформить все документы правильно
              </p>
            </li>

            <li>
              <span>04</span>
              <CheckCheck size={38} className={styles.icon} />
              <h3>Подача и сопровождение</h3>
              <p>
                Подаём заявку и поддерживаем связь до получения визы
              </p>
            </li>

            <li>
              <span>05</span>
              <Plane size={40} className={styles.icon} />
              <h3>Переезд и адаптация</h3>
              <p>
                Консультируем по первым шагам в новой стране
              </p>
            </li>

          </ol>
      </Container>
    </section>
  );
}