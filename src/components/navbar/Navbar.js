import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <h1 className="logo">ArtThatFits</h1>
            <div className="navbar__content">
                <ul>
                    <li><a href="/">Ver Mais!</a></li>
                    <li><a href="/">Seja um Contribuidor</a></li>
                    <li><a href="/">Nossas Artes</a></li>
                </ul>
                <button>Entrar</button>
            </div>
        </div>
    )
}

export default Navbar;