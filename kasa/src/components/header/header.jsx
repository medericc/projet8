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
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            isActive 
                                ? "text-black px-4 inline-block border-b-2 border-black" 
                                : "text-black px-4 inline-block border-b-2 border-transparent hover:border-black transition duration-300"
                        }
                    >
                        Accueil
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => 
                            isActive 
                                ? "text-black px-4 inline-block border-b-2 border-black" 
                                : "text-black px-4 inline-block border-b-2 border-transparent hover:border-black transition duration-300"
                        }
                    >
                        A Propos
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;
