import CharactersPage from "../Pages/CharactersPage";
import EpisodePage from '../Pages/EpisodePage'
import PersonPage from '../Pages/PersonPage'
import LocationPage from '../Pages/LocationPage'
export const privateRoutes = [
	{ path: '*', element: <CharactersPage /> },
	{ path: '/episode', element: <EpisodePage /> },
	{ path: '/personPage/:id_personPage', element: <PersonPage /> },
	{ path: '/locationPage', element: <LocationPage /> }

]