// components/NavBar.js
"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../css/navBar.module.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <span className={styles.brand}>The Luxury Hotel <br />Concierge</span>
      </div>
      <div className={styles.middle}>
        <Link href="/hotels/page" className={styles.link}>
          Hotel
        </Link>
        <Link href="/services" className={styles.link}>
          Services
        </Link>
      </div>
      <div className={styles.right}>
        <button className={styles.button}>Login</button>
        <button className={styles.button}>Signup</button>
        <button className={styles.menuButton} onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>
      {menuOpen && (
        <div className={styles.dropdownMenu}>
          <Link href="/hotels/page" className={styles.dropdownLink}>
            Hotel
          </Link>
          <Link href="/services" className={styles.dropdownLink}>
            Services
          </Link>
          <button className={styles.dropdownButton}>Login</button>
          <button className={styles.dropdownButton}>Signup</button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
