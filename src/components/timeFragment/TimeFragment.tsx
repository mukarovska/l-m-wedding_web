import './TimeFragment.scss';

interface TimeFragmentProps {
  title: string;
  value: number;
}

export const TimeFragment = ({ title, value }: TimeFragmentProps) => {
  return (
    <div className="timeFragment">
      <p className="timeFragment__value timeFragment__value--num">{value}</p>
      <p className="timeFragment__value timeFragment__value--text">{title}</p>
    </div>
  );
};
