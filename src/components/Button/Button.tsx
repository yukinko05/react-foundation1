import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

export default function Button({ children, onClick, disabled = false }: ButtonProps) {
  return (
    <button className={styles.postButton} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
