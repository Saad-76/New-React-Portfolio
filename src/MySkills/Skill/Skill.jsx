import React from "react"
import style from './Skill.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Skill = (props) => {
    return <article className={style.skill}>
        <span className={style.icon}>
            <FontAwesomeIcon icon={props.icon} />
        </span>
        <h3 className={style.title}>{props.title}</h3>
        <span className={style.description}>{props.description}</span>
    </article>
}