import PropTypes from "prop-types";
import ArrowLeft from '../../asset/arrowLeft.png';

export default function LeftArrow({ onClick }) {
  return (
    <img
      className="absolute left-4 z-10 cursor-pointer h-8 w-8 md:h-12 md:w-12"
      onClick={onClick}
      src={ArrowLeft}
      alt="Flèche gauche"
    />
  );
}

 LeftArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
  };