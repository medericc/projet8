import { Link } from 'react-router-dom';
import logoFooter from '../../asset/logo_footer.png';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div>
          <Link to="/">
            <img className="h-8" src={logoFooter} alt="Kasa Logo" />
          </Link>
        </div>
        <div>
          <h3 className="text-sm">&copy; 2020 Kasa. All rights reserved</h3>
        </div>
      </div>
    </footer>
  );
}
