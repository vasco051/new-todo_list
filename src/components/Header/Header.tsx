import React, {FC} from 'react';
import MyNavbar from "../UI/navbar/MyNavbar";
import {NAVBAR_LINKS} from "../../consts/navbarLinks";
import styles from './Header.module.css'
import clsx from "clsx";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={clsx(styles.headerContent, 'container')}>
        <h3>Todo list</h3>
        <MyNavbar links={NAVBAR_LINKS}/>
      </div>
    </header>
  );
};

export default Header;