import './InProgress.scss';

export const InProgress = () => {
  return (
    <div className="inProgress section">
      <div className="inProgress__wrap section__wrap">
        <p className="inProgress__text">Tato stránka je ještě v procesu tvoření.</p>
        <p className="inProgress__text">Další informace budeme postupně přidávat.</p>
      </div>
      <div className="flowers flowers--inProgress"></div>
    </div>
  );
};
