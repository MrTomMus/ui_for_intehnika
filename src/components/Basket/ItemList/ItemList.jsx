import React from "react";
import classes from "../ItemList/ItemList.module.css"
import img1 from "../../../assets/img/img1.jpg"
import img2 from "../../../assets/icon/Vector3.svg"
import img3 from "../../../assets/icon/Vector4.svg"
import minus from "../../../assets/icon/Vector5.svg"
import plus from "../../../assets/icon/Vector6.svg"

let ItemsList = () => {
    return (
        <>
            <div className={classes.item}>
                <div className={classes.item__img}>
                    <label>
                        <input type='checkbox'/>
                        <span></span>  
                    </label>
                </div>
                <div className={classes.img}>
                    <img src={img1} alt="img1" />
                </div>
                <div className={classes.info}>
                    <div className={classes.name}>
                        <h4 className={classes.name__title}>Пластина наружная FL430</h4>
                        <span className={classes.company}>ООО «Дарим добро»</span>
                    </div>
                    <div className={classes.like}>
                        <img className={classes.like__icon} src={img2} alt="like" />
                        <img className={classes.basket__icon} src={img3} alt="basket" />
                    </div>
                    <div className={classes.counter}>
                        <img className={classes.minus} src={minus} alt="minus"/>
                        <span className={classes.count}>1</span>
                        <img className={classes.plus} src={plus} alt="plus"/>
                    </div>
                    <div className={classes.params}>
                        <div className={classes.step}>
                            <h5>12,3</h5>
                            <span>Шаг, мм</span>
                        </div>
                        <div className={classes.diametr}>
                            <h5>40</h5>
                            <span>Диаметр, мм</span>
                        </div>
                        <div className={classes.tool}>
                            <h5>Чистовой инструмент</h5>
                            <span>Предназначение</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemsList;