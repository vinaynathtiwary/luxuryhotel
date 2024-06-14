// components/Footer.js
import React from 'react';
import styles from '../css/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>
          <h2>The Luxury Hotel Concierge</h2>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#hotel">Hotel</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className={styles.social}>
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#instagram">Instagram</a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 The Luxury Hotel Concierge. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
