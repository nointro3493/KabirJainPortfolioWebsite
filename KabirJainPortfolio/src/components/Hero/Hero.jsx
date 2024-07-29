import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kabir</h1>
        <p className={styles.description}>
        I am an incoming <strong>Computer Science and Financial Management</strong> double major at the University of Waterloo.  My future career prospects align with quantitative finance, software development and investment banking. Feel free to reach out!
        </p>

        <ul
          className={`${styles.menuItems}`}
        >
          <li>
          <a href="mailto:myemail@email.com" className={styles.menuBtn}>
          Contact Me
        </a>
          </li>
          <li>
          <a href={getImageUrl("hero/Kabir_JainResume.pdf")} target = "_blank" className={styles.menuBtn}>
          Resume
        </a>
          </li>
        </ul>
        

    

       
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};