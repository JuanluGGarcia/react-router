import Title from "../components/title/Title";

const User = ({ user, description }) => {
    return (
        <>  
            {/* Los hijos llegan a Title en mayusculas */}
            <Title>{user.toUpperCase()}</Title> 
            <p>{description}</p>
        </> 
    );
};

export default User;