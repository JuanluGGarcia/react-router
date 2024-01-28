import { Route, Routes } from "react-router-dom";
// import Title from "../components/title/Title";
import User from "../pages/User";

const Router = () => {
    return (
        <Routes>
            {/* <Route path="/juan" element={<h2>Juan</h2>} /> */}
            {/* para ir a la pagina de adri, a nuestro navegador tendria que añadirle /adri */}
            
            {/* <Route path="/adri" element={<h2>Adri</h2>} /> */}

            {/* Aquí también podríamos pintar COMPONENTES */}
            {/* <Route path="/" element={<Title title={'Marcos'}/>}/> */}

            <Route path="/" element={<User user='Marcos' description='Página de Marcos' />} />
            <Route path="/adri" element={<User user='Adri' description='Página de Adri' />} />
            <Route path="/juan" element={<User user='Juan' description='Página de Juan' />} />
        </Routes>

    )
};

export default Router;