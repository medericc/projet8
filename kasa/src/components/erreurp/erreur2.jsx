
import { useRouteError } from 'react-router-dom';
import Header from '../handb/header.jsx';
import ErrorMessage from '../erreur/erreur.jsx';
import Footer from '../handb/footer.jsx';

export default function ErrorPage() {
  const error = useRouteError(); 
  console.log(error);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <ErrorMessage error={error} />
      </div>
      <Footer />
    </div>
  );
}
