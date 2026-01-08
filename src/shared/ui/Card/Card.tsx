import styles from './Card.module.css';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outlined' | 'elevated';
}

export function Card({children, className = '', variant = 'default'}: CardProps) {
  const cardClass = `${styles.card} ${styles[variant]} ${className}`

  return (
    <div className={cardClass}>{children}</div>
  );
}