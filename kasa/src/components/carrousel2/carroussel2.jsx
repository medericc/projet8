import { useState } from "react";
import PropTypes from "prop-types";
import arrowRight from "../../asset/arrow-right.svg";
import arrowLeft from "../../asset/arrow-left.svg";

const Carrousel2 = ({ images }) => {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) {
    return <p>No images available</p>;
  }

  const handleNext = () => {
    setIndex((index + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const isThereOnlyOneImage = () => {
    return images.length === 1;
  };

  const arrowShouldDisplay = isThereOnlyOneImage();

  return (
    <div className="relative w-full h-415 " style={{ maxWidth: '1240px'}}>
      <img className="w-full h-415 object-cover" style={{ maxWidth: '1240px'}} src={images[index]} alt="carrousel" />
      {!arrowShouldDisplay && (
        <>
          <img
            className="absolute top-1/2 left-0 transform -translate-y-1/2 w-8 h-8 ml-2 cursor-pointer"
            src={arrowLeft}
            onClick={handlePrev}
            alt="arrow-left"
          />
          <img
            className="absolute top-1/2 right-0 transform -translate-y-1/2 w-8 h-8 mr-2 cursor-pointer"
            src={arrowRight}
            onClick={handleNext}
            alt="arrow-right"
          />
        </>
      )}
      <p className="absolute bottom-2 right-2 text-white text-sm">
        {index + 1}/{images.length}
      </p>
    </div>
  );
};


Carrousel2.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carrousel2;
