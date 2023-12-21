import React from 'react'
import style from './Project.module.scss'


export const Project = (props) => {
    return <article className={style.project}>
        <div className={style.onHover}>
            <div className={style.imgContainer} >
                <div style={props.style} className={style.img}></div>
            </div>
            <div className={style.sliderText}>
                <h4 className={style.sliderTitle}>{props.title}</h4>
                <span className={style.sliderDescription}>{props.description}</span>
            </div>
        </div>
    </article>
}