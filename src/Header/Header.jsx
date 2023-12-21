import React from "react"
import style from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBookOpen, faBriefcase, faPaperPlane } from '@fortawesome/fontawesome-free-solid'
import { NavLink } from "react-router-dom"

export const Header = () => {
    return (<ul className={style.header}>
        <NavLink to='/' ><li className={style.navItem}><FontAwesomeIcon icon={faHome} className={style.ico} /><h2 className={style.title}>Home</h2></li></NavLink>
        <NavLink to='/skills'><li className={style.navItem}><FontAwesomeIcon icon={faBookOpen} className={style.ico} /><h2 className={style.title}>About me</h2></li></NavLink>
        <NavLink to='/projects'><li className={style.navItem}><FontAwesomeIcon icon={faBriefcase} className={style.ico} /><h2 className={style.title}>Projects</h2></li></NavLink>
        <NavLink to='/contacts'><li className={style.navItem}><FontAwesomeIcon icon={faPaperPlane} className={style.ico} /><h2 className={style.title}>Contacts</h2></li></NavLink>
    </ul >)
}