import React, { useEffect, useState } from "react";
import CardCharacters from "../CardCharacters/CardCharacters";
import PostService from "../../API/getService";
import cls from "./CharactersContent.module.css"
function CharactersContent() {

	const [list, setList] = useState([])

	const getService = async () => {
		const response = await PostService.getCharacters()
		setList(response.results)
		console.log(response.results);
	}
	useEffect(() => {
		getService()
	}, [])
	return (
		<div className="App">
			<div className={cls.CardCharacters}>
				{
					list.map(item =>
						<CardCharacters id={item.id} name={item.name} photo={item.image} />
					)
				}
			</div>

		</div>
	);
}

export default CharactersContent;
