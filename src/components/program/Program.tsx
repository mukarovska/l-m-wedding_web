import { Timeline } from '../atoms/Timeline/Timeline';
import './Program.scss';

export interface Event {
  title: string;
  time: string;
  description: string;
}

const events: Event[] = [
  { title: 'Příjezd hostů', description: 'Popis 1', time: '11:30' },
  { title: 'Obřad', description: 'Popis 2', time: '12:00' },
  { title: 'Oběd s rodinou', description: 'Popis 3', time: '13:00' },
  { title: 'Párty pro všechny', description: 'Popis 3', time: '16:00' },
];

export const Program = () => {
  return (
    <div className="program section">
      <h2 className="program__heading">Program</h2>
      <Timeline events={events} />
    </div>
  );
};
