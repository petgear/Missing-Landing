import { Button } from '../../shared/ui/Button/Button'
import { Container } from '../../shared/ui/Container/Container'
import { Card } from '../../shared/ui/Card/Card';
import styles from './Popular.module.css'

interface destination {
  id: string;
  name: string;
  description: string;
  image: string;
}

const destinations: destination[] = [
  {
    id: 'japan',
    name: 'Япония',
    description: 'Современная экономика, высокий уровень жизни и визовые программы для специалистов и студентов.',
    image: './Japan.jpg',
  },
  {
    id: 'german',
    name: 'Германия',
    description: 'Стабильная Европа, рабочие визы и понятные правила для долгосрочного проживания.',
    image: './Germany.jpg',
  },
  {
    id: 'czech',
    name: 'Чехия',
    description:'Комфортная жизнь, доступные программы и удобный старт для переезда в ЕС.',
    image: './Czech.jpg',
  }
];


export function Popular() {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>Популярные направления</h2>

        <div className={styles.list}>
          {destinations.map((destination) => (
            <Card key={destination.id} className={styles.card}>
              <div className={styles.pictureWrapper}>
                <img src={destination.image} alt={destination.name} className={styles.destinationImage}/>
              </div>
              <div className={styles.content}>
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
            </div>
          </Card>
        ))}
        </div>

        <div className={styles.actions}>
          <Button className={styles.button}>Подобрать направление ➜</Button>
        </div>
        
      </Container>
    </section>
  );
}