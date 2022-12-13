import axios from "axios";
export default class PostService {
	static async getCharacters() {
		const response = await axios.get('https://rickandmortyapi.com/api/character')
		return response.data;
	}
	static async gePerson(id) {
		const response = await axios.get('https://rickandmortyapi.com/api/character/' + id)
		return response.data;
	}
}