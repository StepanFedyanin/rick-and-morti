import React from "react";
import cls from './HeaderBlack.module.css'
import imgLogo from '../../resources/image/logo.svg'
import imgLogo2 from '../../resources/image/logo2.svg'

function HeaderBlack() {
    return (
        <div className={cls.HeaderBlack}>
            <div className={cls.HeaderBlackLogo}>
                <img src={imgLogo} alt="" />
            </div>
            <div className={cls.HeaderBlackTitle}>
                <h2>Rick and morty! <br></br> Portal!</h2>
            </div>
            <div className={cls.HeaderBlackLogo2}>
                <img src={imgLogo2} alt="" />
            </div>
        </div>
    );
}

export default HeaderBlack;