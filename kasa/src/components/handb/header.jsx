import { NavLink } from 'react-router-dom';
import logo from '../../asset/LOGO.png';

function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <NavLink to="/">
          <img src={logo} alt="Logo KASA" className="h-8" />
        </NavLink>
        <nav>
          <ul className="flex">
            <li>
              <NavLink to="/" className="text-white hover:text-gray-300 px-4">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-white hover:text-gray-300 px-4">A Propos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
