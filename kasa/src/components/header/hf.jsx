
import { Outlet } from 'react-router-dom';
import Header from '../handb/header';
import Footer from '../handb/footer';

export default function HeaderFooterLayout() {
  return (
    <>
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <Header />
        </div>
      </header>
      <div className="container mx-auto px-4">
        <Outlet />
      </div>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <Footer />
        </div>
      </footer>
    </>
  );
}
