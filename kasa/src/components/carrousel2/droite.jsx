import PropTypes from "prop-types";
import ArrowRight from '../../asset/arrowRight.png';

export default function RightArrow({ onClick }) {
    return (
      <img
        className="absolute right-4 z-10 cursor-pointer h-8 w-8 md:h-12 md:w-12"
        onClick={onClick}
        src={ArrowRight}
        alt="Flèche droite"
      />
    );
  }
  
  // Validation des props
  RightArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
  };
