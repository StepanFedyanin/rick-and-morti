import React from "react";
import cls from './Character.module.css'
import person from '../../resources/image/person.svg'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import PostService from "../../API/getService";
import { useState } from "react";

function Character() {
	const params = useParams();
	const [personContent, setPersonContent] = useState({});
	const [personLoading, setPersonLoading] = useState(false);

	const getService = async () => {
		await PostService.gePerson(params.id_personPage)
			.then(response => setPersonContent(response))
			.then(() => setPersonLoading(true))
	}
	console.log(params.id_personPage);
	useEffect(() => {
		getService();
	}, [params.id_personPage])
	return (
		<div className="">
			{
				personLoading ?
					<div className={cls.Character}>
						<div className={cls.CharacterImg}>
							<img src={personContent.image} alt="" />
						</div>
						<div className={cls.CharacterInfo}>
							<div className={cls.CharacterName}>
								<h3>Summer Smith</h3>
							</div>
							<div className={cls.CharacterAddInfo}>
								<div className={cls.CharacterGender}>
									<p className={cls.AddInfo}><span>Gender: </span>{personContent.gender}</p>
								</div>
								<div className={cls.CharacterLocation}>
									<p className={cls.AddInfo}><span>Location: </span>{personContent.location.name}</p>
								</div>
								<div className={cls.CharacterStatus}>
									<p className={cls.AddInfo}><span>Status: </span>{personContent.status}</p>
								</div>
							</div>
						</div>
					</div>
					:
					null
			}

		</div>

	);
}

export default Character;