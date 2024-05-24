import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-lg text-gray-700">Oups! La page que vous demandez n&apos;existe pas.</p>
            <Link className="text-blue-500 hover:underline mt-4" to="/">Retourner sur la page d&apos;accueil</Link>
        </div>
    );
}

export default NotFound;
