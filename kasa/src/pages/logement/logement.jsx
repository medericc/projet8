import { redirect, useLoaderData } from 'react-router-dom';
import data from '../../app.json';
import Main from '../../main.jsx';
import Carousel from '../../components/carroussel/carroussel.jsx';
import Information from '../../components/informations/informations.jsx';


export async function loader({ params }) {
  const { title } = params;
  const house = data.find(
    (h) => h.title.toLowerCase().split(' ').join('-') === title
  );
  if (!house) return redirect(`/error`);
  return { house };
}


export default function Housing() {
  const { house } = useLoaderData(); 
  return (
    <Main className="w-full" style={{ maxWidth: '1240px'}}>
      <Carousel pictures={house.pictures} />
      <Information
        titleHouse={house.title}
        location={house.location}
        tags={house.tags}
        nameHost={house.host.name}
        pictureHost={house.host.picture}
        ratings={house.rating}
        description={house.description}
        equipments={house.equipments}
      />
    </Main>
  );
}
