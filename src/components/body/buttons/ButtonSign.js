import React from 'react'
import s from "./ButtonSign.module.css"
import {NavLink} from "react-router-dom";

const ButtonSign = () => {
    return (
        <NavLink to='/file'>
            <button className={s.myButton}>
                SIGN DOCUMENT
            </button>
        </NavLink>
    )
};

export default ButtonSign;
