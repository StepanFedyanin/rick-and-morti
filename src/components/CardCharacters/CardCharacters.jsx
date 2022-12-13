import React from "react";
import cls from './CardCharacters.module.css'
import { Link, NavLink, BrowserRouter } from 'react-router-dom'
function CardCharacters({ id, name, photo }) {
	return (
		<NavLink className={cls.cardBackground} to={"/personPage/" + id}>
			<div>
				<div className={cls.cardImage}><img src={photo} alt="image" /></div>
				<div className={cls.cardName}>{name}</div>
			</div>
		</NavLink>
	);
}

export default CardCharacters;
