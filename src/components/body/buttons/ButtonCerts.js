import React from 'react'
import s from "./ButtonCerts.module.css"
import {NavLink} from "react-router-dom";

const ButtonCerts = () => {
    return (
        <div>
            <NavLink to='/cert'>
                <button className={s.myButton} onClick={some}>
                    GET CERTS
                </button>
            </NavLink>
        </div>
    )
};
let some = () => {
    alert("Certs generated success!!")
};
export default ButtonCerts;
