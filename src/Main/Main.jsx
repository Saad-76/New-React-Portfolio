import React from "react";
import style from "./Main.module.scss";
import commonStyle from "../common/styles/Styles.module.css";
import { Button } from "../common/components/Button/Button";
import profilePhoto from "../assets/images/me.jpg";
import { faDownload } from "@fortawesome/fontawesome-free-solid";

export const Main = () => {
  return (
    <main className={style.main}>
      <section className={`${commonStyle.container} ${style.container}`}>
        <div className={style.colorBlock}></div>
        <img
          className={style.photo}
          src={profilePhoto}
          alt="A picture of Saad"
        />
        <div className={style.textBlock}>
          <h1 className={style.title}>
            I'm Saad Mehmood.
            <span className={style.subtitle}>Full Stack developer</span>
          </h1>
          <p className={style.description}>
            Hey there! I'm a passionate developer who creates SPA with
            React/Redux/TypeScript and covers them with tests.Additionally, a
            Node.js backend server using PostgreSql and MongoDb. I believe in
            Clean Code, Prettier, documentation. Experienced in working in a
            team using Jira, semantic Git commits and daily scrum meetings.
          </p>

          {/* <a href="https://drive.google.com/u/0/uc?id=1HBujhF9cucylYGSsupr3SK4jQrocOxSd&export=download"> */}
            <Button text="Download CV" ico={faDownload} />
          {/* </a> */}
        </div>
      </section>
    </main>
  );
};
