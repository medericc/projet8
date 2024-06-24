import logo from '../../asset/logo.svg';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-white py-4">
            <nav className="mx-auto flex items-center justify-between mb-10 mt-10" style={{ maxWidth: '1240px', width: '100%', height: '68px' }}>
                <Link to="/" className="flex items-center">
                    <img className="h-68" src={logo} alt="logo" />
                </Link>

                <div className="flex space-x-8">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            isActive 
                                ? "h-34 flex items-center justify-center text-black border-b-2 border-black" 
                                : "h-34 flex items-center justify-center text-black border-b-2 border-transparent hover:border-black transition duration-300"
                        }
                    >
                        Accueil
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => 
                            isActive 
                                ? "h-34 flex items-center justify-center text-black border-b-2 border-black" 
                                : "h-34 flex items-center justify-center text-black border-b-2 border-transparent hover:border-black transition duration-300"
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
