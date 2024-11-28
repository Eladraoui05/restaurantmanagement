import logo from '../assets/logo.jpeg';
import './Navbar.css'
function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <ul className="nav-links">
                    <NavItem name="Accueil" />
                    <NavItem name="Groupes" />
                    <NavItem name="Conditions" />
                    <div className="logo">
                    <img src={logo} alt="Logo" className="logo-img" />
                </div>
                    <NavItem name="Médiathèque" />
                </ul>
                
                
                
                
                <div className="account-btn">
                    <button className="btn-account">Créer un compte</button>
                    {/* <button className="btn-account">Se connecter</button> */}
                </div>
            </div>
        </nav>
    );
}

// Composant pour chaque élément du menu
function NavItem({ name }) {
    return (
        <li className="nav-item">{name}</li>
    );
}

export default Navbar;
