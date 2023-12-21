import React from "react";
import style from "./MySkills.module.scss";
import commonStyle from "../common/styles/Styles.module.css";
import { Skill } from "./Skill/Skill";
import { Title } from "../common/components/Title/Title";
import {
  faReact,
  faJs,
  faUikit,
  faSass,
  faShirtsinbulk,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import {
  faRocket,
  faTextWidth,
  faCloud,
} from "@fortawesome/fontawesome-free-solid";

export const MySkills = () => {
  return (
    <div className={style.item}>
      <section className={`${commonStyle.container} ${style.skillsContainer}`}>
        <Title title={"my "} subtitle={"skills"} bgTitle={"about me"} />
        <div className={style.skills}>
          <Skill
            title={"React"}
            icon={faReact}
            description={"Hooks, Class components, React-router-dom v6"}
          />
          <Skill
            title={"Redux"}
            icon={faRocket}
            description={"Reducers, Thunks, Store Structure, Redux Toolkit"}
          />
          <Skill
            title={"Node Js"}
            icon={faShirtsinbulk}
            description={"Express Js, Mongo Db, Postgre SQL, Fs"}
          />
          <Skill
            title={"TypeScript"}
            icon={faTextWidth}
            description={"Primitive types, Objects, Generics, Union types"}
          />

          <Skill
            title={"ES6+"}
            icon={faJs}
            description={
              "Promises, Eventloop, this, Closures, Hoisting, Recursion, Prototypes, Scope"
            }
          />
          <Skill
            title={"GIT"}
            icon={faGitAlt}
            description={
              "Working in teams: semantic commits, all basic operations & resolving merge conflicts"
            }
          />
          <Skill
            title={"CSS3, Sass"}
            icon={faSass}
            description={
              "Responsive & adaptive design. Flexbox, grid, positioning"
            }
          />
          <Skill
            title={"Material UI"}
            icon={faUikit}
            description={"Components and customization"}
          />
          <Skill
            title={"REST API"}
            icon={faCloud}
            description={"CRUD, Axios, Postman"}
          />
        </div>
      </section>
    </div>
  );
};
