import { Person } from '../atoms/person/Person';
import './People.scss';
import fotoOndra from './images/ondra.jpeg';
import fotoKaja from './images/kaja.jpg';
import fotoDrak from './images/drak-foto.jpg';
import fotoRodice from './images/rodice-foto.jpg';

export const People = () => {
  return (
    <div className="people section">
      <div className="people__wrap section__wrap">
        <div className="flowers flowers--people flowers--people--top"></div>
        <h2 className="people__heading h2">Významné osoby</h2>
        <div className="people__conteiner">
          <Person foto={fotoOndra} name="Ondrášek" />
          <Person foto={fotoKaja} name="Kája" role="svědkyně nevěsty" />
          <Person foto={fotoDrak} name="Drak" role="svědek ženicha" />
          <Person foto={fotoRodice} name="Věrka + Jarda" name2="Zdeňka + Pavel" role="rodiče" />
        </div>
      </div>
    </div>
  );
};
