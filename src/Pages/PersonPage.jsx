import React from "react";
import cls from './PersonPage.module.css'
import HeaderItem from "../components/Header/Header";
import Form from "../components/Form/Form";
import HeaderBlack from "../components/HeaderBlack/HeaderBlack";
import Character from "../components/Character/Character";

function PersonPage() {
  return (
        <div className={cls.PersonPage}>
            <HeaderItem/>
            <HeaderBlack/>
            <Character/>
        </div>
  );
}

export default PersonPage;