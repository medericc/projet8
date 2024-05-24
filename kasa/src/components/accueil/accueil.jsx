
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Card from "../carte/carteacc.jsx";
import Banner from "../banniere/Banniere.jsx";

const Home = ({ data }) => {
    
    console.log(data);
    return (
        
        <main className="container mx-auto px-4">
            <Banner page='home'/>
            
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-200">
                {data && data.map((lodging) => (
                   
                    <article key={lodging.id} >
                        <Link to={`/details/${lodging.id}`} className="no-underline bg-red-200">
                            <Card title={lodging.title} description={lodging.description} image={lodging.cover}/>
                        </Link>
                    </article>
                ))}
            </section>
        </main>
    );
}

// Validation des props
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
