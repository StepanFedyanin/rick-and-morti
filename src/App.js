import './App.css';
import PersonPage from './Pages/PersonPage';
import AppRouter from './Utilits/AppRouter';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import CharactersPage from './Pages/CharactersPage';
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</div>
	);
}

export default App;
