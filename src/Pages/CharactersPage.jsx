import React from "react";
import cls from './CharactersPage.module.css'
import CharactersContent from "../components/CharactersContent/CharactersContent";
import HeaderItem from "../components/Header/Header";
import Form from "../components/Form/Form";
import HeaderBlack from "../components/HeaderBlack/HeaderBlack";

function CharactersPage() {
  return (
        <div className={cls.CharactersPage}>
            <HeaderItem/>
            <HeaderBlack/>
            <Form/>
            <CharactersContent/>
        </div>
  );
}

export default CharactersPage;