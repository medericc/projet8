import PropTypes from "prop-types";
import  { useState } from 'react';
import LeftArrow from '../carrousel2/gauche';
import RightArrow from '../carrousel2/droite';

export default function Carrousel({ pictures }) {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImg = () => {
    setCurrentImage((prev) => (prev - 1 + pictures.length) % pictures.length);
  };

  const nextImg = () => {
    setCurrentImage((prev) => (prev + 1) % pictures.length);
  };

  return (
    <div className="relative flex items-center justify-center w-full h-64 md:h-96 bg-gray-200" style={{ maxWidth: '1240px'}}>
      <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-md">
        {currentImage + 1}/{pictures.length}
      </div>
      {pictures.length > 1 && (
        <LeftArrow onClick={prevImg} />
      )}
      <img
        src={pictures[currentImage]}
        alt={`Vue de l'appartement ${currentImage + 1}`}
        className="object-cover w-full h-full"
      />
      {pictures.length > 1 && (
        <RightArrow onClick={nextImg} />
      )}
    </div>
  );
}


Carrousel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired
  };