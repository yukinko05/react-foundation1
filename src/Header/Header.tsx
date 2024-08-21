import { ReactNode } from 'react';
import "./Header.css";

interface HeaderProps {
  children?: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <div className='headerContainer'>
      <header className='homeHeader'>掲示板</header>
      {children}
    </div>
  )
}