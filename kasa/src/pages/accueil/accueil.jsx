import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Card from "../../components/carte/carteacc.jsx";
import Banner from "../../components/banniere/Banniere.jsx";

const Home = ({ data }) => {
    console.log(data);
    return (
        <main className="container mx-auto w-full flex flex-col items-center px-4 sm:px-0" style={{ maxWidth: '1240px' }}>
            <Banner page='home' />
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 mb-4 rounded-lg p-4 w-full bg-white sm:bg-gray-100" style={{ maxWidth: '1240px' }}>
                {data && data.map((lodging) => (
                    <article key={lodging.id} style={{ margin: 'auto' }} >
                        <Link to={`/details/${lodging.id}`} className="no-underline">
                            <Card title={lodging.title} description={lodging.description} image={lodging.cover} />
                        </Link>
                    </article>
                ))}
            </section>
        </main>
    );
}

Home.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            cover: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Home;
