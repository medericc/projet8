import PropTypes from "prop-types";
import { Link, isRouteErrorResponse } from 'react-router-dom';
import Main from '../../main';

export default function ErrorMessage({ error }) {
 
  if (isRouteErrorResponse(error)) {
    return (
      <Main>
        <div className="flex flex-col items-center justify-center h-full">
        
          <h1 className="text-6xl font-bold">{error.status}</h1>
          <p className="text-lg text-gray-700 mt-4">
            Oups! La page que vous demandez n&apos;existe pas.
          </p>
          <Link className="text-blue-500 hover:underline mt-4" to={'/'}>
            Retourner sur la page d&apos;accueil
          </Link>
        </div>
      </Main>
    );
  }
}

ErrorMessage.propTypes = {
  error: PropTypes.object.isRequired, 
};
