import { ReactNode } from "react";
import styles from "./header.module.css";

interface HeaderProps {
  children?: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.homeHeader}>Threads</h1>
      {children}
    </header>
  );
}
