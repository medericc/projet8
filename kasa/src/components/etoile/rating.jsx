import emptyStar from '../../asset/emptyStar.svg';
import fullStar from '../../asset/fullStar.svg';
import PropTypes from "prop-types";

const Rating = ({ rating }) => {
    const emptyStarsNb = 5 - rating;
    return (
        <div className="flex">
            {[...Array(rating)].map((star, index) => (
                <img key={index} src={fullStar} alt="star" className="w-5 h-5" />
            ))}
            {[...Array(emptyStarsNb)].map((star, index) => (
                <img key={index} src={emptyStar} alt="star" className="w-5 h-5" />
            ))}
        </div>
    );
}
Rating.propTypes = {
    rating: PropTypes.number.isRequired, 
  };
export default Rating;
