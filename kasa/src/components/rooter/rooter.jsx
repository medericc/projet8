
import PropTypes from 'prop-types';
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import Home from "../../pages/accueil/accueil.jsx";
import About from "../../pages/apropo/apropo.jsx";
import NotFound from "../../pages/non/non.jsx";
import Details from "../details/details.jsx";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
} from 'react-router-dom';
import Loader from "../loader/loader.jsx";

const Router = ({ fetchData }) => {
    const { isLoading, data } = fetchData; 

    const AppLayout = () => (
        <>
            <Header />
            {isLoading ? (<Loader />) : (<Outlet />)}
            <Footer />
        </>
    );

    const router = createBrowserRouter([
        {
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Home data={data} />, 
                },
                {
                    path: "/about",
                    element: <About />,
                },
                {
                    path: "/details/:lodgingId",
                    element: <Details data={data} />, 
                },
                {
                    path: "*",
                    element: <NotFound />,
                },
            ]
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
}

Router.propTypes = {
    fetchData: PropTypes.shape({
        isLoading: PropTypes.bool.isRequired,
        data: PropTypes.array.isRequired,
    }).isRequired,
};

export default Router;
