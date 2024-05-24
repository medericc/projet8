import logo from '../../asset/logo.svg';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-white py-4">
            <nav className="container mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center">
                    <img className="h-8" src={logo} alt="logo" />
                </Link>

                <div className="flex">
                <NavLink to="/" className="text-black px-4 inline-block border-b border-transparent hover:border-black transition duration-300">Accueil</NavLink>
<NavLink to="/about" className="text-black px-4 inline-block border-b border-transparent hover:border-black transition duration-300">A Propos</NavLink>

                </div>
            </nav>
        </header>
    );
}

export default Header;
