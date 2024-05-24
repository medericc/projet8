import PropTypes from 'prop-types';
import bannerHome from '../../asset/banner1.png';
import bannerAbout from '../../asset/banner2.png';

const Banniere = ({ page }) => {
    return (
      <div className="relative rounded-lg overflow-hidden opacity-30 bg-blend-darken" style={{ width: '1240px', height: '223px' }}>
        <img
          className="object-cover w-full h-full"
          src={page === "home" ? bannerHome : bannerAbout} 
          alt="côte rocheuse"
        />
        {page === "home" && (
          <h1 className="absolute top-20 bottom-20 left-12 right-12 text-white text-2xl md:text-4xl font-bold ">
            Chez vous, partout et ailleurs
          </h1>
        )}
      </div>
    );
  }
// Validation des props
Banniere.propTypes = {
  page: PropTypes.oneOf(['home', 'about']).isRequired,
};

export default Banniere;
