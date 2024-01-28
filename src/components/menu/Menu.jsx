import { Link } from "react-router-dom";


/* Para la practica de los planetas, Adri nos dice que todo lo que se repita que lo metamos en un array de objetos. Por ejemplo el menu pues podria ser: 

    <ul>
        {menu.map(menu => (
            <li key={menu.id}>
            <Link to={menu.path}>
                {menu.text}
            </Link>
        ))}
    </ul>
*/

const Menu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Marcos</Link>
                </li>
                <li>
                    <Link to="/adri">Adri</Link>
                </li>
                <li>
                    <Link to="/juan">Juan</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;