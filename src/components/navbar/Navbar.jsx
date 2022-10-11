import React, { useState } from "react";
import styles from "./Navbar.module.css";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={styles.navbar}>
      <h1>Rent a Car</h1>
      <nav>
        <ul
          className={
            showMenu ? [styles.menu, styles.active].join(" ") : [styles.menu]
          }
        >
          <li className={styles.menuItem}> Learn More</li>
          <li className={styles.menuItem}> Log in</li>
          <li className={styles.menuItem}>Sign up</li>
          <li className={styles.menuItem}>
            <AiOutlineSearch size={22} style={{ marginTop: "2px" }} />
          </li>
          <li className={styles.menuItem}>
            <AiOutlineUser size={22} style={{ marginTop: "2px" }} />
          </li>
        </ul>
      </nav>
      <div className={styles.mobileBtn} onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
      </div>
    </header>
  );
};

export default Navbar;
