import React from "react";
import styles from "./Hero.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <form>
        <div className={styles.text}>
          <label htmlFor="">Where</label>
          <input type="text" placeholder="Search Location" />
        </div>
        <div className={styles.from}>
          <label htmlFor="">From</label>
          <input type="date" />
        </div>
        <div className={styles.until}>
          <label htmlFor="">Until</label>
          <input type="date" />
        </div>
        <div className={styles.search}>
          <AiOutlineSearch size={25} />
        </div>
      </form>
    </div>
  );
};

export default Hero;
