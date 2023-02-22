import {FC} from 'react';
import {Link} from "react-router-dom";

import {MyNavbarProps} from "./MyNavbarProps";

import styles from './MyNavbar.module.css'

const MyNavbar: FC<MyNavbarProps> = ({links}) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        {links.map(link =>
          <li className={styles.navbarItem} key={link.to}>
            <Link className={styles.navbarLink} to={link.to}>{link.name}</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default MyNavbar;