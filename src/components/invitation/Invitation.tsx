import './Invitation.scss';

export const Invitation = () => {
  return (
    <div className="invitation section">
      <div className="invitation__wrap section__wrap">
        <div className="invitation__content invitation__content--top">
          <p className="invitation__text">Srdečně vás zveme na naši svatbu!</p>
          <p className="invitation__text">
            Budeme moc rádi, když prožijete náš svatební den s námi.
          </p>
        </div>
        <div className="invitation__content invitation__content--bottom">
          <p className="invitation__text">
            Celá svatba se koná v Kostelci nad Černými lesy. Níže najdete všechny potřebné informace
            ke svatebnímu dni.
          </p>
          <p className="invitation__text">Prosíme vás o písemné potvrzení vaší účasti.</p>
        </div>
      </div>
      <div className="flowers flowers--invitation flowers--invitation--top"></div>
      <div className="flowers flowers--invitation flowers--invitation--bottom"></div>
    </div>
  );
};
