import { ReactNode } from "react";
import "./Header.css";

interface HeaderProps {
  children?: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="headerContainer">
      <h1 className="homeHeader">Threads</h1>
      {children}
    </header>
  );
}
