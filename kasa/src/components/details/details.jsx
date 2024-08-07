import { useParams } from "react-router-dom";
import Carrousel from "../carrousel/carroussel.jsx";
import DropDown from "../DropDown/DropDown.jsx";
import NotFound from "../../pages/non/non.jsx";
import Rating from "../etoile/rating.jsx";
import PropTypes from "prop-types";

const Details = ({ data }) => {
    const { lodgingId } = useParams();
    const lodging = data && data.find(lodging => lodging.id === lodgingId); 
    if (!lodging) return <NotFound />

    const [firstName, lastName] = lodging.host.name.split(' ');

    return (
        <main className=" mx-auto px-4">
            <div className="flex flex-col items-center gap-8 dm:gap-2 w-full" >
                <Carrousel images={lodging.pictures} className="w-1240 h-415 lg:order-1" />
                <article className="w-full lg:order-2" style={{ maxWidth: '1240px'}}>
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="details-lodging order-1 lg:order-none">
                            <h1 className='text-2xl text-[#FF6060]'>{lodging.title}</h1>
                            <p className='dm:mt-2 text-xl font-semibold'>{lodging.location}</p>
                            <div className='flex flex-wrap gap-2 mt-4'>
                                {lodging.tags.map(tag => <span key={tag} className="cursor-pointer py-1 px-5 bg-red-500 rounded-md text-xs text-white font-medium">{tag}</span>)}
                            </div>
                        </div>
                        <div className='details-owner flex flex-row-reverse  md:flex-col dm:justify-between items-center md:mb-10 order-2 lg:order-none ' >
                            <div className='flex items-center mr-4 dm:mt-5'>
                                <div className="text-[#FF6060] font-montserrat text-[18px]  dm:text-[12px] font-medium leading-[25.67px] text-right">
                                    <p>{firstName}</p>
                                    <p>{lastName}</p>
                                </div>
                                <img className='w-10 h-10  rounded-full ml-2' src={lodging.host.picture} alt={lodging.host.name} />
                            </div>
                            <div className='text-sm mt-5'>
                                <Rating rating={parseInt(lodging.rating)} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row dropdown mt-1 mb-8 md:mb-20'>
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
