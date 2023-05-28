import React from "react";
import classes from "../ItemList/ItemList.module.css"
import minus from "../../../assets/icon/Vector5.svg"
import plus from "../../../assets/icon/Vector6.svg"
import time from "../../../assets/icon/Vector7.svg"
import hot from "../../../assets/icon/Vector8.svg"
import question from "../../../assets/icon/Vector9.svg"

let ItemsList = (props) => {

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

    let setLike = (id) => {
        props.setState(props.state.map(obj => obj.id === id ? {...obj, like: !obj.like} : obj))
    }

    let item = props.state.map(obj => (
        <div key={obj.id} className={classes.item}>
                <div className={classes.item__img}>
                    <label className={classes.checkbox}>
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
                        <button onClick={() => setLike(obj.id)} 
                                className={classes.like__icon}>
                            <svg  width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className={`${classes.like__iconPath} ${obj.like && classes.like__iconPathActive}`} d="M7.38592 2.64141C6.66885 2.26044 5.841 2.13888 5.04356 2.298C4.24618 2.45712 3.52996 2.88672 3.01607 3.51214C2.50229 4.13743 2.22222 4.92001 2.22222 5.72667C2.22222 8.22625 4.10442 10.6876 6.29651 12.656C7.35838 13.6095 8.42536 14.3871 9.22926 14.9272C9.52904 15.1286 9.79072 15.2959 10 15.426C10.2093 15.2959 10.471 15.1286 10.7707 14.9272C11.5746 14.3871 12.6416 13.6095 13.7035 12.656C15.8956 10.6876 17.7778 8.22625 17.7778 5.72667C17.7778 4.92001 17.4977 4.13743 16.9839 3.51214C16.47 2.88672 15.7538 2.45712 14.9564 2.298C14.159 2.13888 13.3312 2.26044 12.6141 2.64141C11.8971 3.02231 11.336 3.63849 11.0248 4.38383L10 6.8377L8.97523 4.38383C8.66396 3.63849 8.10285 3.02231 7.38592 2.64141ZM10 18L9.45887 17.6977L9.45587 17.696L9.44906 17.6921L9.42594 17.679C9.40638 17.6679 9.37861 17.652 9.34317 17.6314C9.27232 17.5902 9.17074 17.5303 9.04282 17.4526C8.78712 17.2973 8.42543 17.0706 7.99296 16.7801C7.13019 16.2005 5.97496 15.3596 4.8146 14.3176C2.56225 12.2951 0 9.25782 0 5.72667C0 4.40108 0.460364 3.11729 1.30148 2.09362C2.14248 1.07009 3.31191 0.370031 4.61013 0.110978C5.90827 -0.148063 7.2565 0.0495283 8.42576 0.670741C9.02279 0.987937 9.55454 1.40571 10 1.90142C10.4455 1.40571 10.9772 0.987937 11.5742 0.670741C12.7435 0.0495283 14.0917 -0.148063 15.3899 0.110978C16.6881 0.370031 17.8575 1.07009 18.6985 2.09362C19.5396 3.11729 20 4.40108 20 5.72667C20 9.25782 17.4378 12.2951 15.1854 14.3176C14.025 15.3596 12.8698 16.2005 12.007 16.7801C11.5746 17.0706 11.2129 17.2973 10.9572 17.4526C10.8293 17.5303 10.7277 17.5902 10.6568 17.6314C10.6214 17.652 10.5936 17.6679 10.5741 17.679L10.5509 17.6921L10.5441 17.696L10.5419 17.6972L10 18Z" fill="black" fill-opacity="0.2"/>
                            </svg>
                        </button>
                        <button  onClick={() => deleteItem(obj.id)} className={classes.basket__icon}>
                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 16C8 13.3333 8 10.6667 8 8C7.33333 8 6.66667 8 6 8C6 10.6667 6 13.3333 6 16C6.66667 16 7.33333 16 8 16ZM13 4V3C13 2.20435 12.6839 1.44129 12.1213 0.87868C11.5587 0.316071 10.7957 0 10 0H8C7.20435 0 6.44129 0.316071 5.87868 0.87868C5.31607 1.44129 5 2.20435 5 3V4H0L2.99215e-05 6H2V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H13C13.7957 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V6C16.6667 6 17.3333 6 18 6C18 5.33333 18 4.66667 18 4C16.3333 4 14.6667 4 13 4ZM7 3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H10C10.2652 2 10.5196 2.10536 10.7071 2.29289C10.8946 2.48043 11 2.73478 11 3V4H7V3ZM14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V6H14V17ZM11 16C11.2652 16 12 16 12 16C12 16 12 15.2652 12 15C12 12.6667 12 10.3333 12 8C11.3333 8 10.6667 8 10 8C10 10.3333 10 12.6667 10 15C10 15.2652 10 16 10 16C10 16 10.7348 16 11 16Z" fill="black" fill-opacity="0.2"/>
                            </svg>
                        </button>
                        
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