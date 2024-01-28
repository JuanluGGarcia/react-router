// Pongo children porque desde User le estoy pasando user a Title, que es hijo de Title. Si quiero pintarlo pongo children
const Title = ({ children }) => {
    // console.log(children)
    return <h2>{children}</h2>
};

export default Title;