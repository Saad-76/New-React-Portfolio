import React from "react";
import style from "./Projects.module.scss";
import commonStyle from "../common/styles/Styles.module.css";
import { Project } from "./Project/Project";
import { Title } from "../common/components/Title/Title";
import Kunji from "../assets/images/Kunji.png";
import Os from "../assets/images/OS.avif";
import Ship from "../assets/images/Ship.png";
import Int from "../assets/images/Int.jpg";
import Ecommerce from "../assets/images/Ecommerce.jpg";
import Signage from "../assets/images/Signage.jpg";

export const Projects = () => {
  const cards = {
    backgroundImage: `url(${Kunji})`,
  };
  const todolist = {
    backgroundImage: `url(${Os})`,
  };
  const inctagram = {
    backgroundImage: `url(${Ship})`,
  };
  const virtualPiano = {
    backgroundImage: `url(${Int})`,
  };
  const EcommerceImg = {
    backgroundImage: `url(${Ecommerce})`,
  };
  const SignageImg = {
    backgroundImage: `url(${Signage})`,
  };

  return (
    <div className={style.item}>
      <section
        className={`${commonStyle.container} ${style.projectsContainer}`}
      >
        <Title title={"my "} subtitle={"projects"} bgTitle={"portfolio"} />
        <div className={style.projects}>
          <a href="https://github.com/Saad-76" target="_blank" rel="noreferrer">
            <Project
              title="Kunji"
              description="Society Management System. Git, Jira, daily scrum meetings
                             React/Redux/Redux-Sage, Material UI"
              style={cards}
            />
          </a>
          <a href="https://github.com/Saad-76" target="_blank" rel="noreferrer">
            <Project
              title="Windows/Linux Os based Application"
              description="Node js,FS,Socket.Io, Pushy.me,Vanilla Js/Jquery/Css3, HOCs, RESTFUL API."
              style={todolist}
            />
          </a>
          <a href="https://github.com/Saad-76" target="_blank" rel="noreferrer">
            <Project
              title="Kenya Express"
              description="Shipment Management System. Git, Trello, daily scrum meetings
              React/Context-Api/React Charts/Bootstrap"
              style={inctagram}
            />
          </a>
          <a href="https://github.com/Saad-76" target="_blank" rel="noreferrer">
            <Project
              title="Interview Management System"
              description="Git, Jira,React/Redux/Redux-Thunk, Material UI"
              style={virtualPiano}
            />
          </a>

          <a href="https://github.com/Saad-76" target="_blank" rel="noreferrer">
            <Project
              title="E-Commerce Management System"
              description="Node JS,Mongo DB,AWS S3 bucket,React/Redux/Redux-Thunk"
              style={EcommerceImg}
            />
          </a>

          <a href="https://github.com/Saad-76" target="_blank" rel="noreferrer">
            <Project
              title="Digital Signage Solutions System"
              description=" Bitbucket,Trello,Fabric Js,React/Redux/Redux-Thunk, Material UI"
              style={SignageImg}
            />
          </a>
        </div>
      </section>
    </div>
  );
};
