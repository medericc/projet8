import { useState, useRef } from 'react';
import Arrow from '../../asset/arrow.svg';
import PropTypes from "prop-types";

export default function Collapse({ title, content }) {
  
  const head = useRef(null);
  const contentRef = useRef(null);
  
  const [isActive, setIsActive] = useState(false);

  
  const toggleCollapse = () => {
    
    const { current: contentElement } = contentRef;
    if (contentElement.style.maxHeight) {
      contentElement.style.maxHeight = null;
      contentElement.style.padding = null;
    } else {
      contentElement.style.maxHeight = `${contentElement.scrollHeight}px`;
      contentElement.style.padding = `20px 20px 20px 15px`;
    }
    
    setIsActive(!isActive);
  };

  return (
    <div className="border border-gray-200 rounded mb-4">
      <div className="flex justify-between items-center bg-gray-100 p-4 cursor-pointer" ref={head} onClick={toggleCollapse}>
        <h3 className="text-lg font-semibold">{title}</h3>
        <img
          src={Arrow}
          alt="Toggle collapse"
          className={`w-6 h-6 transition-transform transform ${isActive ? 'rotate-180' : ''}`}
        />
      </div>
      <div className={`overflow-hidden transition-max-height ${isActive ? 'max-h-96' : 'max-h-0'} px-4 pb-4`} ref={contentRef}>
        <div className="text-gray-700">
          {content || 'Pas de contenu disponible'}
        </div>
      </div>
    </div>
  );
}
Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ]).isRequired,
  };