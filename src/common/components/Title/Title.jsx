import React from 'react';
import style from './Title.module.scss'


export const Title = (props) => {
    return <h2 className={style.title}>{props.title}
        <span className={style.subtitle}>{props.subtitle}</span>
        <span className={style.bgTitle}>{props.bgTitle}</span>
    </h2>
}