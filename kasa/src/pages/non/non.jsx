import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <h1 className="font-montserrat font-bold text-orange-600 mb-10" style={{ fontSize: '20vw', lineHeight: '1' }}>
                404
            </h1>
            <p className="font-montserrat font-medium text-orange-600 mb-10" style={{ fontSize: '4vw', lineHeight: '1.4' }}>
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link className="font-montserrat font-medium text-black underline mt-4 mb-20" style={{ fontSize: '2vw', lineHeight: '1.4' }} to="/">
                Retourner sur la page d'accueil
            </Link>
        </div>
    );
}

export default NotFound;
