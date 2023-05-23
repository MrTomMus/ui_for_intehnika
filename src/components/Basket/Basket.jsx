import classes from "../Basket/Basket.module.css"
import vector from "../../assets/icon/Vector2.svg"
import { useEffect } from "react";
import catalog from "../../json/catalog.json"
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import ItemsList from "./ItemList/ItemList";


let Basket = (props) => {

    const antIcon = (
        <LoadingOutlined
          style={{
            fontSize: 100,
            color: '#FF6A2A',
          }}
          spin
        />
      );

    useEffect(() => {
        setTimeout(() => props.setState(catalog), 3000)
    })

    return ( !props.state[0] ? <div className={classes.loading}><Spin indicator={antIcon} /></div> : 
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
                <div className={classes.list}>
                    <ItemsList/>
                </div>
            </div>
        </div>
)
}

export default Basket;
