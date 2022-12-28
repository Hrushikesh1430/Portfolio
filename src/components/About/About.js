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
          <h1 className={styles.about_title}>
            Something here that describes me and the reader sayes yaaaaaa
          </h1>
          <p className={styles.about_sub}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className={styles.about_desc}>
            t has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
