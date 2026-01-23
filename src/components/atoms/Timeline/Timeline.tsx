import type { Event } from '../../program/Program';
import './Timeline.scss';

interface Events {
  events: Event[];
}

export const Timeline = ({ events }: Events) => {
  return (
    <ul className="timeline">
      {events.map((event, index) => {
        return (
          <li
            className={`timeline__item ${index % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
          >
            <div className="timeline__content">
              <p>{event.time}</p>
              <p>{event.title}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
