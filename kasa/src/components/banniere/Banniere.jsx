import PropTypes from 'prop-types';
import bannerHome from '../../asset/banner1.png';
import bannerAbout from '../../asset/banner2.png';

const Banniere = ({ page }) => {
  return (
    <div className={`relative rounded-lg overflow-hidden ${page === "about" ? "opacity-60" : "opacity-30 bg-blend-darken"}`} style={{ maxWidth: '1240px', width: '100%', height: '223px' }}>
      <img
        className="object-cover w-full h-full"
        src={page === "home" ? bannerHome : bannerAbout} 
        alt="côte rocheuse"
      />
      {page === "home" ? (
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-2xl md:text-4xl font-bold">
            Chez vous, partout et ailleurs
          </h1>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gray-500 bg-opacity-60 flex justify-center items-center">
          {/* Add any specific content for the About banner here if needed */}
        </div>
      )}
    </div>
  );
}

// Validation des props
Banniere.propTypes = {
  page: PropTypes.oneOf(['home', 'about']).isRequired,
};

export default Banniere;
