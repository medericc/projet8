import logo from '../../asset/logo.svg';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-white py-4">
            <nav className="w-1240 h-68 mx-auto flex items-center justify-between mb-10 mt-10">
                <Link to="/" className="flex items-center">
                    <img className="h-68" src={logo} alt="logo" />
                </Link>

                <div className="flex">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            isActive 
                                ? "w-136 h-34 flex items-center justify-center text-black border-b-2 border-black" 
                                : "w-136 h-34 flex items-center justify-center text-black border-b-2 border-transparent hover:border-black transition duration-300"
                        }
                    >
                        Accueil
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => 
                            isActive 
                                ? "w-136 h-34 flex items-center justify-center text-black border-b-2 border-black" 
                                : "w-136 h-34 flex items-center justify-center text-black border-b-2 border-transparent hover:border-black transition duration-300"
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
