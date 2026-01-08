import styles from './Button.module.css'

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Button({children, onClick, className}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${className || ''}`}
    >
        {children}
      </button>
  );
}