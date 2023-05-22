import React from "react";
import classes from "../Basket/Basket.module.css"
import vector from "../../assets/icon/Vector2.svg"

let Basket = () => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.title}>
                    <h2 className={classes.text}>Моя Корзина <span className={classes.text__count}>Заглушка</span></h2>
                </div>
                <div className={classes.choice}>
                <label>
                    <input type='checkbox'/>
                    <span></span>  
                </label>
                    <span className={classes.choiceAll}>Выбрать все</span>
                    <img className={classes.img} src={vector} alt="vector" />
                    <span className={classes.deleteChoice}>Удалить выбранное</span>
                </div>
            </div>
        </div>
    )
}

export default Basket;
