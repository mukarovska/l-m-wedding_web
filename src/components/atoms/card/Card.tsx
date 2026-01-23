import type { ReactNode } from 'react';
import './Card.scss';

interface CardProps {
  title: string;
  time: string;
  place: string;
  city: string;
  map: string;
  icone: ReactNode;
}

export const Card = ({ title, time, place, city, map, icone }: CardProps) => {
  return (
    <div className="card">
      <div className="card__icone">{icone}</div>
      <div className="card__content">
        <p className="card__title">{title}</p>
        <p className="card__text card__text--time">{time}</p>
        <p className="card__text">{place}</p>
        {city && <p className="card__text">{city}</p>}
      </div>
      <div className="button">
        <a href={map}>Mapa</a>
      </div>
    </div>
  );
};
