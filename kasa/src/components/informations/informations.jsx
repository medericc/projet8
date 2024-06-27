import PropTypes from "prop-types";
import RatingStars from '../etoile/rating';
import Collapse from '../collapse/collapse';
import Host from '../../asset/Host.png';

function Information({
  titleHouse,
  location,
  tags,
  nameHost,
  pictureHost,
  ratings,
  description,
  equipments,
}) {
  const [firstName, lastName] = nameHost.split(' ');

  const equipmentsList = equipments.map((e) => <li key={e}>{e}</li>);

  return (
    <>
      <div className="flex justify-between items-center bg-gray-100  rounded w-full" style={{ maxWidth: '1240px' }}>
        <div>
          <h1 className="text-[#FF6060] font-montserrat text-[36px] font-medium leading-[51.34px] text-left">{titleHouse}</h1>
          <p className="text-black font-montserrat text-[18px] font-medium leading-[25.67px] text-left">{location}</p>
        </div>
        <div className="flex">
          <ul className="flex">
            {tags.map((tag) => (
              <li key={tag} className="bg-gray-200 text-gray-600 px-2 py-1 mr-2 rounded-full">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse  justify-around items-center bg-gray-100 p-4 mb-4 rounded w-full" style={{ maxWidth: '1240px' }}>
        <div className="flex items-center ">
          <div className="ml-4 lg:mr-4">
            <p className="text-lg font-semibold">{firstName}</p>
            <p className="text-gray-600">{lastName}</p>
          </div>
          <img
            src={pictureHost || Host}
            alt="portrait de l'hôte"
            className="w-16 h-16 rounded-full"
          />
        </div>
        <div className="mt-4 lg:mt-0">
          <RatingStars ratings={Number(ratings)} />
        </div>
      </div>
      <div className="flex flex-col space-y-4" style={{ maxWidth: '1240px' }}>
        <div className="border border-gray-200 rounded">
          <Collapse
            title="Description"
            content={description || 'Aucune description pour le moment'}
          />
        </div>
        <div className="border border-gray-200 rounded">
          <Collapse
            title="Equipements"
            content={
              equipments.length > 0
                ? <ul>{equipmentsList}</ul>
                : 'Aucun équipement renseigné pour le moment'
            }
          />
        </div>
      </div>
    </>
  );
}

Information.propTypes = {
  titleHouse: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  nameHost: PropTypes.string.isRequired,
  pictureHost: PropTypes.string,
  ratings: PropTypes.number.isRequired,
  description: PropTypes.string,
  equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Information;
