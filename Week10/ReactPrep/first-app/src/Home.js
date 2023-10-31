const Home = () => {
    return (
        <nav className="home">
            <h1> Welcome Home Human</h1>
            <h2 style={{
                color : "blue",
                backgroundColor : 'yellow',
                borderRadius : '8px'
            }}> An Inline specification </h2>
            <table className='striped'>
                <tr><th> Title</th><th> Author</th></tr>
                <tr><td> The Fellowship of the ring </td><td> J. R Tolkien </td></tr>
            </table>
        </nav>
    );
}
export default Home;