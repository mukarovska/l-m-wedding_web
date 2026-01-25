import { Carousel } from '../atoms/carousel/Carousel';
import './Fotos.scss';
import photo1 from './images/kaja.jpg';
import photo2 from './images/ondra.jpg';
import photo3 from './images/1.jpg';
import photo4 from './images/2.jpg';
import photo5 from './images/ondra.jpg';
import photo6 from './images/kaja.jpg';

const images = [photo1, photo2, photo3, photo4, photo5, photo6];

export const Fotos = () => {
  return (
    <div className="fotos section">
      <div className="fotos__wrap">
        <h2 className="fotos__heading h2">O nás</h2>
        <Carousel images={images} />
      </div>
    </div>
  );
};
