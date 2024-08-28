import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  disabled?: boolean;
}

export default function Button({
  children,
  type = "button",
  onClick,
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={styles.postButton}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
