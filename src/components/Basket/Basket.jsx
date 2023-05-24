import classes from "../Basket/Basket.module.css"
import vector from "../../assets/icon/Vector2.svg"
import { useEffect, useState } from "react";
import catalog from "../../json/catalog.json"
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import ItemsList from "./ItemList/ItemList";


let Basket = (props) => {

    let [state, setState] = useState();
    let [isChecked, setChecked] = useState(false)

    useEffect(() => {
        if(state === undefined)
            console.log('test')
            setTimeout(() => setState(catalog), 1000)
      
    },[])

    const antIcon = (
        <LoadingOutlined
          style={{
            fontSize: 100,
            color: '#FF6A2A',
          }}
          spin
        />
      );

    let checkedAll = () => {
        setChecked(!isChecked)
        if(isChecked === true){
            setState(state.map(obj => obj.check === true ? {...obj, check: false} : obj))
        }else{
            setState(state.map(obj => obj.check === false ? {...obj, check: true} : obj))
        }
    }


    return (state === undefined ? <div className={classes.loading}><Spin indicator={antIcon} /></div> : 
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.title}>
                    <h2 className={classes.text}>Моя Корзина <span className={classes.text__count}>{state.length}</span></h2>
                </div>
                <div className={classes.choice}>
                <label>
                    <input checked={isChecked} type='checkbox'/>
                    <span onClick={() => checkedAll()}></span>  
                </label>
                    <span className={classes.choiceAll}>Выбрать все</span>
                    <img onClick={() => {
                        setChecked(false)
                        setState(state.map(obj => obj.check === true ? {...obj, check: false} : obj))}} 
                        className={`${classes.img} ${(state.some(obj => obj.check === true)) && classes.imgActive}`} 
                        src={vector} 
                        alt="vector" />
                    <span onClick={() => setState(state.filter(obj => {if(!obj.check) return obj}))} 
                          className={`${classes.deleteChoice} ${(state.some(obj => obj.check === true)) && classes.deleteChoiceActive}`}>Удалить выбранное</span>
                </div>
                <div className={classes.list}>
                    <ItemsList state={state} setState={setState}/>
                </div>
            </div>
        </div>
)
}

export default Basket;
