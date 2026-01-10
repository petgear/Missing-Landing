import { Button } from '../../shared/ui/Button/Button';
import { Card } from '../../shared/ui/Card/Card'
import { Container } from '../../shared/ui/Container/Container'
import styles from './Prices.module.css'

interface Worth {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

const worths: Worth[] = [
  {
    id: 'economy',
    name: 'Эконом',
    price: '₽19900', 
    description: 'Базовый анализ и рекомендации',
    features: [
      '- Анализ ситуации',
      '- Подбор визового пути',
      '- Чек-листы и рекомендации',
    ],
    highlighted: false,
  },

  {
    id: 'standard',
    name:'Стандарт',
    price: '₽49900',
    description: 'Полное сопровождение процесса',
    features: [
      '- Всё из тарифа «Эконом»',
      '- Помощь с документами',
      '- Консультации на этапе подачи',
    ],
    highlighted: true,
  },

  {
    id: 'premium',
    name: 'Премиум',
    price: '₽99900',
    description: 'VIP сопровождение с экспертом',
    features: [
      '- Полное сопровождение',
      '- Приоритетная поддержка',
      '- Помощь с адаптацией',
    ],
    highlighted: false,
  },
];


export function Prices() { 
  return (
    <section className={styles.section}>
      <Container>

        <h2 className={styles.title}>Тарифы и сопровождение</h2>

        <div className={styles.prices}>
          {worths.map((worth: Worth) => (
              <Card
              key={worth.id} 
              className={`${styles.card} ${worth.highlighted ? styles.highlighted : ''}`}
              >
                <h3 className={styles.title}>{worth.name}</h3>
                <p className={styles.description}>{worth.description}</p>
                <span className={styles.price}>{worth.price}</span>

                <ul className={styles.features}>
                  {worth.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <Button className={styles.button}>Выбрать тариф</Button>
              </Card>
            ))}
        </div>
      </Container>
    </section>
  );
}
