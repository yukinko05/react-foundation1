import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

interface HeaderProps {
  children?: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className={styles.headerContainer}>
      <Link to="/" className={styles.homeHeader}>
        Threads
      </Link>
      {children}
    </header>
  );
}
