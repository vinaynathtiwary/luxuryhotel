// components/FeaturedHotels.js
import React from 'react';
import styles from '../css/secondCard.module.css';

const secondCard = () => {
  const hotels = [
    {
      name: 'Caribe Royale',
      location: 'Vinaròs, Valencia Region',
      price: '25,000',
      reviews: '21 reviews',
      rating: '4/5',
      image: '/hotelsCard/1.jpg'
    },
    {
      name: 'Deco Boutique',
      location: 'Vinaròs, Valencia Region',
      price: '25,000',
      reviews: '21 reviews',
      rating: '4/5',
      image: '/hotelsCard/2.jpg'
    },
    {
      name: 'Andronis Boutique',
      location: 'Vinaròs, Valencia Region',
      price: '25,000',
      reviews: '21 reviews',
      rating: '4/5',
      image: '/hotelsCard/3.jpg'
    },
    {
      name: 'The Elmar Boutique',
      location: 'Vinaròs, Valencia Region',
      price: '25,000',
      reviews: '21 reviews',
      rating: '4/5',
      image: '/hotelsCard/4.jpg'
    },
  ];

  return (
    <section className={styles.featuredHotels}>
      {/* <h2>Explore chain of <span className={styles.highlight}>55+</span> Luxury hotels</h2> */}
      <div className={styles.cards}>
        {hotels.map((hotel, index) => (
          <div className={styles.card} key={index}>
            <img src={hotel.image} alt={hotel.name} className={styles.image} />
            <div className={styles.cardContent}>
              {hotel.rating && hotel.reviews && (
                <div className={styles.reviews}>
                  {hotel.rating} ({hotel.reviews})
                </div>
              )}
              <h3>{hotel.name}</h3>
              <p className={styles.location}>{hotel.location}</p>
              <p className={styles.price}>${hotel.price} <span className={styles.perNight}>per night</span></p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.exploreButton}>Explore more Hotels &rarr;</button>
      </div>
    </section>
  );
};

export default secondCard;
