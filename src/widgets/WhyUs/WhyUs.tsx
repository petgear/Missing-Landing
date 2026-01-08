import { Card } from '../../shared/ui/Card/Card';
import { Container } from '../../shared/ui/Container/Container';
import styles from './WhyUs.module.css'
import { Shield, FileText, Check, type LucideIcon } from 'lucide-react'

interface Advantages {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Testimonials {
  quote: string;
  author: string;
}

const advantages: Advantages[] = [
  {
    icon: Shield,
    title: 'Реальный опыт',
    description: 'Мы сами прошли через переезды и знаем все подводные камни',
  },

  {
    icon: FileText,
    title: 'Понятный процесс',
    description: 'Вы всегда знаете, на каком этапе находитесь и что будет дальше.',
  },

  {
    icon: Check,
    title: 'Честность',
    description: 'Говорим правду о сроках, рисках и шансах на успех',
  },
];

const testimonials: Testimonials[] = [
  {
    quote: '«Я долго не понимал, с чего начать. В Missing разложили всё по шагам и помогли с документами.»',
    author: '— Андрей М.',
  },

  {
    quote: '«Было много страхов и сомнений. С сопровождением процесс оказался гораздо проще.»',
    author: '— Мария К.',
  },

  {
    quote: '«Сэкономил месяцы времени. Сразу понятно, что делать и в каком порядке.»',
    author: '— Дмитрий В.'
  },
];

export function WhyUs() {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}> Почему нам доверяют</h2>

        <div className={styles.whyUs}>
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            return (
            <Card 
            key={index} 
            className={styles.whyUsCard}
            >
              <div className={styles.iconOuter}>
                <Icon size={38} className={styles.iconInner}/>
              </div>
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
            </Card>
        )})}
        </div>

        <div className={styles.testimonials}>
          <div className={styles.testimonialsList}>
            {testimonials.map((testimonial, index) => (
              <Card key={index} className={styles.testimonialsCard}>
                <p className={styles.testimonialQuote}>{testimonial.quote}</p>
                <p className={styles.testimonialAuthor}>{testimonial.author}</p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}