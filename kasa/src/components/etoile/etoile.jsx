import PropTypes from "prop-types";
import Star from '../../asset/star.png';
import StarRed from '../../asset/starRed.png';

function RatingStars({ ratings }) {
  const totalStars = 5;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    stars.push(
      <img
        key={i}
        src={i <= ratings ? StarRed : Star}
        alt={`${
          i <= ratings ? 'étoile rouge' : 'étoile'
        } ${i} sur ${totalStars}`}
        className="w-5 h-5 md:w-6 md:h-6"
      />
    );
  }

  return <div className="flex">{stars}</div>;
}
RatingStars.propTypes = {
    ratings: PropTypes.number.isRequired, 
  };
export default RatingStars;
