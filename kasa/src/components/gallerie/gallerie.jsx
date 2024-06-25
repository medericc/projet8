import Card from '../../Card';
import PropTypes from "prop-types";


const Gallery = ({ data }) => {
  return (
    <div className="flex flex-wrap -mx-4">
      {data.map((card) => (
        <div key={card.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8">
          <Card card={card} />
        </div>
      ))}
    </div>
  );
}

Gallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired, 
 })).isRequired, 
};

export default Gallery;
