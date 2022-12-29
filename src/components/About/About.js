import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <React.Fragment>
      <div className={styles.about}>
        <div className={styles.about_left}>
          <div className={`${styles.about_card}  ${styles.bg}`}></div>
          <div className={styles.about_card}>
            <img
              src="/assets/images/about-me.jpeg"
              alt="about"
              className={styles.about_img}
            ></img>
          </div>
        </div>
        <div className={styles.about_right}>
          <div className={styles.title_container}>
            <h1 className={styles.about_title}>Namaskar </h1>
            <img
              src="/assets/images/folded-hands.png"
              alt="greeting"
              className={styles.foldedhands}
            ></img>
          </div>

          <p className={styles.about_sub}>
            My name is Hrushikesh and I create websites that enhances user
            experience. I believe that websites are a work of art and I am an
            artist contributing my perspective towards it.
          </p>
          <p className={styles.about_desc}>
            Websites fascinated me since my childhood and my curiosity about the
            functioning of websites lead me to the path of web development. When
            I see my work being used by users in the real world it gives me
            immense pleasure. Every day there is a new challenge that helps me
            learn new things, understand more about websites and that keeps me
            going. I have worked in various domains like blogging webpage,
            commercial websites for personal and professional use, BFSI sector
            and worked with the clients to create dynamic websites that
            fullfills their requirement.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
