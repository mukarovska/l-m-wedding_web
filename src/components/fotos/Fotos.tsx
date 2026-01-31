import { Carousel } from '../atoms/carousel/Carousel';
import { Timeline } from '../atoms/Timeline/Timeline';
import type { Event } from '../program/Program';
import './Fotos.scss';
import photo1 from './images/1.jpg';
import photo2 from './images/2.jpg';
import photo3 from './images/3.jpeg';
import photo4 from './images/4.jpeg';
import photo5 from './images/5.jpeg';
import photo6 from './images/6.jpeg';
import photo8 from './images/8.jpeg';
import photo9 from './images/9.jpeg';
import photo10 from './images/10.jpeg';
import photo11 from './images/11.jpeg';
import photo12 from './images/12.jpeg';
import photo13 from './images/13.jpeg';
import photo14 from './images/14.jpeg';
import photo15 from './images/15.jpeg';
import photo16 from './images/16.jpeg';
import photo17 from './images/17.jpeg';
import photo19 from './images/19.jpeg';
import photo20 from './images/20.jpeg';
import photo21 from './images/21.jpeg';
import photo22 from './images/22.jpeg';
import photo23 from './images/23.jpeg';
import photo24 from './images/24.jpeg';
import photo25 from './images/25.jpeg';
import photo26 from './images/26.jpeg';
import photo27 from './images/27.jpeg';
import photo28 from './images/28.jpeg';
import photo30 from './images/30.jpeg';
import photo31 from './images/31.jpeg';
import photo32 from './images/32.jpeg';
import photo33 from './images/33.jpeg';
import photo34 from './images/34.jpeg';

const images = [
  photo1,
  photo2,
  photo27,
  photo3,
  photo4,
  photo5,
  photo6,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
  photo19,
  photo20,
  photo21,
  photo22,
  photo23,
  photo24,
  photo25,
  photo26,
  photo28,
  photo30,
  photo31,
  photo32,
  photo33,
  photo34,
];

const events: Event[] = [
  { title: 'Poznali jsme se', description: 'Popis 1', time: 'Srpen 2020' },
  { title: 'Začali jsme spolu chodit', description: 'Popis 2', time: 'Prosinec 2020' },
  { title: 'Zasnoubili jsme se', description: 'Popis 3', time: 'Květen 2025' },
  { title: 'Narodil se nám syn Ondrášek', description: 'Popis 3', time: 'Červenec 2025' },
  { title: 'Bereme se!!!', description: 'Popis 3', time: 'Srpen 2026' },
];

export const Fotos = () => {
  return (
    <div className="fotos section">
      <div className="fotos__wrap">
        <h2 className="fotos__heading h2">O nás</h2>
        <div className="fotos__content">
          <Timeline events={events} />
          <Carousel images={images} />
        </div>
      </div>
    </div>
  );
};
