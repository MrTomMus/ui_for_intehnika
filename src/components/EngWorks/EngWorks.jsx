import React from "react"; 
import classes from "../EngWorks/EngWorks.module.css"
import { Link } from "react-router-dom";

let EngWorks = () => {
    return (
        <div className={classes.container}>
            <h2 className={classes.text}>Ведутся технические работы, перейдите в раздел <Link to='/basket'>Корзина</Link></h2>
        </div>
    )
}

export default EngWorks