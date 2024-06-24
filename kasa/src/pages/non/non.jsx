import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="font-montserrat text-288px font-bold text-orange-600 leading-410.69px mb-10">404</h1>
            <p className="font-montserrat text-36px font-medium text-orange-600 leading-51.34px mb-10">Oups! La page que vous demandez n'existe pas.</p>
            <Link className="font-montserrat text-18px font-medium text-black underline leading-25.67px mt-4 mb-20" to="/">Retourner sur la page d'accueil</Link>
        </div>
    );
}

export default NotFound;
