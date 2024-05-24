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
      <div className="flex justify-between items-center bg-gray-100 p-4 mb-4 rounded">
        <div>
          <h1 className="text-2xl font-semibold">{titleHouse}</h1>
          <p className="text-gray-600">{location}</p>
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
      <div className="flex justify-between items-center bg-gray-100 p-4 mb-4 rounded">
        <div className="flex items-center">
          <div className="mr-4">
            <p className="text-lg font-semibold">{firstName}</p>
            <p className="text-gray-600">{lastName}</p>
          </div>
          <img
            src={pictureHost || Host}
            alt="portrait de l'hôte"
            className="w-16 h-16 rounded-full"
          />
        </div>
        <RatingStars ratings={Number(ratings)} />
      </div>
      <div className="flex flex-col space-y-4">
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
  titleHouse: PropTypes.string.isRequired, // Validation que 'titleHouse' est une chaîne de caractères et est requis
  location: PropTypes.string.isRequired, // Validation que 'location' est une chaîne de caractères et est requis
  tags: PropTypes.arrayOf(PropTypes.string).isRequired, // Validation que 'tags' est un tableau de chaînes de caractères et est requis
  nameHost: PropTypes.string.isRequired, // Validation que 'nameHost' est une chaîne de caractères et est requis
  pictureHost: PropTypes.string, // Validation que 'pictureHost' est une chaîne de caractères
  ratings: PropTypes.number.isRequired, // Validation que 'ratings' est un nombre et est requis
  description: PropTypes.string, // Validation que 'description' est une chaîne de caractères
  equipments: PropTypes.arrayOf(PropTypes.string).isRequired, // Validation que 'equipments' est un tableau de chaînes de caractères et est requis
};

export default Information;
