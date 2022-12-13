import React from "react";
import cls from './Form.module.css'

function Form() {
    return (
        <div className={cls.Form}>
            <div className={cls.FormContent}>
                <div className={cls.FormTitle}>
                    <h3>Find a character by name:</h3>
                </div>
                <div className={cls.FormBottom}>
                    <div className={cls.FormEmail}>
                    <input type="email" name="email" id="email" placeholder="Enter name" />
                </div>
                <div className={cls.FormButton}>
                    <button>FIND</button>
                </div>
                </div>
                
            </div>
        </div>
    );
}

export default Form;