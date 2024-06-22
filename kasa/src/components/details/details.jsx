import { useParams } from "react-router-dom";
import Carrousel2 from "../carrousel2/carroussel2.jsx";
import DropDown from "../DropDown/DropDown.jsx";
import NotFound from "../non/non.jsx";
import Rating from "../etoile/rating.jsx";
import PropTypes from "prop-types";

const Details = ({ data }) => {
    const { lodgingId } = useParams();
    const lodging = data && data.find(lodging => lodging.id === lodgingId); // return an object or undefined
    if (!lodging) return <NotFound />

    return (
        <main className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-8">
                <Carrousel2 images={lodging.pictures} className="w-1240 h-415 lg:order-1" />
                <article className="w-1240 lg:order-2">
                    <div className="flex flex-row justify-between">
                        <div className="details-lodging">
                            <h1 className='text-2xl text-[#FF6060]'>{lodging.title}</h1>
                            <p className='text-xl font-semibold'>{lodging.location}</p>
                            <div className='flex flex-wrap gap-2 mt-2'>
                                {lodging.tags.map(tag => <span key={tag} className="cursor-pointer py-1 px-5 bg-red-500 rounded-md text-xs text-white font-medium">{tag}</span>)}
                            </div>
                        </div>
                        <div className='details-owner flex flex-col items-center mb-10'>
                            <div className='flex items-center mr-4'>
                                <p className="text-sm font-medium text-[#FF6060]">{lodging.host.name}</p>
                                <img className='w-10 h-10 rounded-full ml-2' src={lodging.host.picture} alt={lodging.host.name} />
                            </div>
                            <div className='text-sm mt-5'>
                                <Rating rating={parseInt(lodging.rating)} />
                            </div>
                        </div>
                    </div>
                    <div className='flex dropdown mt-2 mb-20'>
                        <DropDown title="Description" content={lodging.description} />
                        <DropDown title="Equipements" content={lodging.equipments} />
                    </div>
                </article>
            </div>
        </main>
    );
}

Details.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        host: PropTypes.shape({
            name: PropTypes.string.isRequired,
            picture: PropTypes.string.isRequired,
        }).isRequired,
        rating: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        equipments: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.string)
        ]).isRequired,
        pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
};

export default Details;
