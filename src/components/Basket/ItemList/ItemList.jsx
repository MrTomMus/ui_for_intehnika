import React from "react";
import classes from "../ItemList/ItemList.module.css"
import img2 from "../../../assets/icon/Vector3.svg"
import img3 from "../../../assets/icon/Vector4.svg"
import minus from "../../../assets/icon/Vector5.svg"
import plus from "../../../assets/icon/Vector6.svg"
import time from "../../../assets/icon/Vector7.svg"
import hot from "../../../assets/icon/Vector8.svg"
import question from "../../../assets/icon/Vector9.svg"

let ItemsList = (props) => {

    console.log(props)

    let setCheck = (id) => {
        props.setState(props.state.map(obj => obj.id === id ? {...obj, check: !obj.check} : obj))
    }

    let deleteItem = (id) => {  
        props.setState(props.state.filter(obj => {if(obj.id !== id) return obj}))
    }

    let setMinus = (id) => {
        props.setState(props.state.map(obj => obj.id === id && obj.count > 0 ? {...obj, count: obj.count-1} : obj))
    }

    let setPlus = (id) => {
        console.log('plus')
        props.setState(props.state.map(obj => obj.id === id ? {...obj, count: obj.count+1} : obj))
    }

    let item = props.state.map(obj => (
        <div key={obj.id} className={classes.item}>
                <div className={classes.item__img}>
                    <label>
                        <input checked={obj.check} type='checkbox'/>
                        <span onClick={() => setCheck(obj.id)}></span>  
                    </label>
                </div>
                <div className={classes.img}>
                    <img src={`/img/img${obj.img}.png`} alt="img1" />
                </div>
                <div className={classes.info}>
                    <div className={classes.name}>
                        <h4 className={classes.name__title}>{obj.name}</h4>
                        <span className={classes.company}>{obj.company}</span>
                    </div>
                    <div className={classes.like}>
                        <img className={classes.like__icon} src={img2} alt="like" />
                        <img onClick={() => deleteItem(obj.id) } 
                             className={classes.basket__icon} 
                             src={img3} 
                             alt="basket" />
                    </div>
                    <div className={classes.counter}>
                        <img onClick={() => setMinus(obj.id)}  
                             className={classes.minus} 
                             src={minus} 
                             alt="minus"/>
                        <span className={classes.count}>{obj.count}</span>
                        <img onClick={() => setPlus(obj.id)} 
                             className={classes.plus} 
                             src={plus} 
                             alt="plus"/>
                    </div>
                    <div className={classes.params}>
                        <div className={classes.step}>
                            <h5>{obj.step}</h5>
                            <span>Шаг, мм</span>
                        </div>
                        <div className={classes.diametr}>
                            <h5>{obj.diametr}</h5>
                            <span>Диаметр, мм</span>
                        </div>
                        <div className={classes.tool}>
                            <h5>Чистовой инструмент</h5>
                            <span>Предназначение</span>
                        </div>
                    </div>
                    <div className={classes.quantity}>
                        <div className={classes.quantity__title}>
                            <h5><img src={time} alt="logo" /> {obj.onOrder} шт.</h5>
                            <span>2-3 недели<img src={question} alt="?" /></span>
                        </div>
                        <div className={classes.quantity__titleTwo}>
                            <h5><img src={hot} alt="logo" /> {obj.inStock} шт.</h5>
                            <span>Доставим сразу</span>
                        </div>
                    </div>
                </div>
            </div>
    ))

    return (
        <>
            {item.length === 0 ? <div className={classes.clearBasket}><h3>У Вас в корзине пусто</h3></div> : item}
        </>
    )
}

export default ItemsList;