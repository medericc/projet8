import { Link } from "react-router-dom";
import './non.css';  // Import the CSS file

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <h1 className="font-montserrat font-bold text-orange-600 mb-10 not-found-404">
                404
            </h1>
            <p className="font-montserrat font-medium text-orange-600 mb-10 not-found-message">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link className="font-montserrat font-medium text-black underline mt-4 mb-20 not-found-link" to="/">
                Retourner sur la page d'accueil
            </Link>
        </div>
    );
}

export default NotFound;
