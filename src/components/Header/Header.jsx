import React from "react";
import classes from '../Header/Header.module.css'
import { Link } from "react-router-dom";
import vector from '../../assets/icon/Vector.svg'


let Header = () => {

    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <nav className={classes.navigation}>
                    <Link className={classes.text__home} to={'/'}>Главная</Link>
                    <img className={classes.vector} src={vector} alt="vector" />
                    <Link className={classes.text__basket} to={'/basket'}>Корзина</Link>
                </nav>
            </div>
        </div>
    )
}

export default Header;