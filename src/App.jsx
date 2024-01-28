import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import Menu from "./components/menu/Menu";

const App = () => {
	return (
		// Con esto nos conectamos a la API del historial del navegador.
		<BrowserRouter> 
			<h1>REACT ROUTER (el principio)</h1>
			<Menu />
			{/* Dentro de Router estarán los elementos que van a cambiar dentro de nuestras páginas */}
			<Router />
		</BrowserRouter>
	);

	

		
};

export default App;
