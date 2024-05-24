import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

export default function Card({ card }) {
 const slug = card.title.toLowerCase().split(' ').join('-');

  return (
    <Link to={`/house/${slug}`} className="block w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img
          src={card.cover}
          alt={card.title}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{card.title}</h2>
        </div>
      </div>
    </Link>
  );
}
Card.propTypes = {
    card: PropTypes.shape({
      title: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
    }).isRequired,
  };