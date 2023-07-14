const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Sickly E-Girl</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/add">My Exercises</a>
                <a href="/create">Add A New Exercise</a>
            </div>
        </nav>
    );
}
 
export default Navbar;