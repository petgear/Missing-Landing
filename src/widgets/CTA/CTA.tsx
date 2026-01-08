import { Button } from '../../shared/ui/Button/Button';
import styles from './CTA.module.css'

type CTAProps = {
  title: string;
  text: string;
  buttonText: string;
  variant?: 'hero' | 'final';
};

export function CTA({title, text, buttonText, variant = 'hero'}: CTAProps) {
  const containerClass = `${styles.container}
  ${variant === 'final' ? styles.final : styles.hero}`;

  return (

    <div className={containerClass}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <Button className={styles.button}>{buttonText}</Button>

    </div>
  );
}