// pages/hotel.js
import React from 'react';
import Footer from '../components/Footer';
import styles from '../css/HotelPage.module.css';

const HotelPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src="/path/to/your/hotel-image.jpg" alt="Hotel" className={styles.headerImage} />
        <h1 className={styles.hotelName}>Hotel Name</h1>
      </header>
      <main className={styles.mainContent}>
        <section className={styles.details}>
          <h2>About the Hotel</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
        </section>
        <section className={styles.amenities}>
          <h2>Amenities</h2>
          <ul>
            <li>Free WiFi</li>
            <li>Swimming Pool</li>
            <li>Fitness Center</li>
            <li>Restaurant</li>
          </ul>
        </section>
        <section className={styles.reviews}>
          <h2>Reviews</h2>
          <p>★★★★☆</p>
          <p>"Amazing stay, would definitely come again!"</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HotelPage;
