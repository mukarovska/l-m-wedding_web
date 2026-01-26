import './Person.scss';

interface PersonProps {
  foto: string;
  name: string;
  name2?: string;
  role?: string;
}

export const Person = ({ foto, name, name2, role }: PersonProps) => {
  return (
    <div className="person">
      <div className="person__foto">
        <img src={foto} alt={name} />
      </div>
      <div className="person__text">
        <div className="person__nameWrap">
          <p className="person__name">{name}</p>
          {name2 && <p className="person__name">{name2}</p>}
        </div>
        <p className="person__role">{role}</p>
      </div>
    </div>
  );
};
