import { Link } from "react-router-dom";

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