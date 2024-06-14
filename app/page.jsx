import Image from "next/image";
import NavBar from "@/components/navBar";
import Hero from "@/components/heroSection";
import styles from '../css/featured.module.css';
import HotelCards from "@/components/hotelsCard";
import Footer from "@/components/footer";
import secondCard from "@/components/secondCardSection";

export default function Home() {
  return (
    <main >
      <NavBar></NavBar>
      <Hero></Hero>
      {/* featured section start*/}
      <section className={styles.featuredHotels}>
        <h2 className={styles.headline}>
          Explore chain of <span className={styles.highlight}>55+</span> Luxury hotels
        </h2>
        <div className={styles.subHeadline}>
          <h3 className={styles.featuredTitle}>
            Featured Hotels
            <span className={styles.icon}>
              <img src="/path/to/your/icon.png" alt="icon" />
            </span>
          </h3>
          <p className={styles.description}>
            Explore Our Curated Selection of Hotels, Each Offering Distinctive Elegance and Comfort
          </p>
        </div>
      </section>
      {/* featured section end*/}

      <HotelCards></HotelCards>

      
      <Footer></Footer>

    </main>
  );
}
