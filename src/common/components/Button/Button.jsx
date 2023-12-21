import React from 'react';
import style from './Button.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Button = (props) => {
    return (
        <button className={style.button}>
            <span className={style.btnText}>{props.text}</span>
            <FontAwesomeIcon className={style.icon} icon={props.ico} />
        </button>
    )
}