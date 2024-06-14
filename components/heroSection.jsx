// components/Hero.js
"use client"
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../css/heroSection.module.css';

const Hero = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(2);

  const handleGuestChange = (operation) => {
    if (operation === 'increment') {
      setGuests(guests + 1);
    } else if (operation === 'decrement' && guests > 1) {
      setGuests(guests - 1);
    }
  };

  return (
    <section className={styles.hero}>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        className={styles.carousel}
      >
        <div>
          <img src="/heroSection/1.jpg" alt="Luxury Hotel 1" className={styles.carouselImage} />
        </div>
        <div>
          <img src="/heroSection/2.jpg" alt="Luxury Hotel 2" className={styles.carouselImage} />
        </div>
        <div>
          <img src="/heroSection/3.jpg" alt="Luxury Hotel 3" className={styles.carouselImage} />
        </div>
        <div>
          <img src="/heroSection/4.jpg" alt="Luxury Hotel 4" className={styles.carouselImage} />
        </div>
        <div>
          <img src="/heroSection/5.jpg" alt="Luxury Hotel 5" className={styles.carouselImage} />
        </div>
        <div>
          <img src="/heroSection/6.jpg" alt="Luxury Hotel 6" className={styles.carouselImage} />
        </div>
      </Carousel>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>Experience Unparalleled Luxury</h1>
          <p>Experience the Height of Luxury and Comfort at Our Exquisite Collection of Hotels, Where Every Detail is Crafted to Perfection</p>
          <div className={styles.searchBar}>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              placeholderText="Check-in date"
              className={styles.datePicker}
            />
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              placeholderText="Check-out date"
              className={styles.datePicker}
            />
            <div className={styles.guestCounter}>
              <button onClick={() => handleGuestChange('decrement')} className={styles.guestButton}>-</button>
              <span>{guests} {guests > 1 ? 'adults' : 'adult'}</span>
              <button onClick={() => handleGuestChange('increment')} className={styles.guestButton}>+</button>
            </div>
            <button className={styles.searchButton}>Search</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
