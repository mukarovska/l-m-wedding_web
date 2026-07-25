import './Accomodation.scss';

export const Accomodation = () => {
  return (
    <div className="accomodation section">
      <div className="accomodation__wrap section__wrap">
        <div className="flowers flowers--accomodation flowers--accomodation--top"></div>
        <div className="flowers flowers--accomodation flowers--accomodation--bottom"></div>
        <h2 className="accomodation__heading h2">Ubytování</h2>
        <div className="accomodation__conteiner">
          <div className="accomodation__content">
            <p className="accomodation__text accomodation__text--center">
              Pokud jste se s námi předem domluvili na ubytování, všechny potřebné informace najdete
              právě tady. Níže si můžete otevřít rozpis pokojů a zjistit, kde budete během
              svatebního víkendu ubytovaní.
            </p>
            <div className="accomodation__buttonHolder">
              <div className="button">
                <a href="https://docs.google.com/spreadsheets/d/1ytGnKdcRTUnFHklywYr92v9iZVfOSmtcTq6_8KwXLT0/edit?gid=0#gid=0">
                  Rozpis ubytování
                </a>
              </div>
            </div>
          </div>
          <div className="clothesSection__content clothesSection__content--top">
            <div className="accomodation__text">
              <p>
                <b>Ubytování v pivovaru</b>
              </p>
              <div className="accomodation__listItem">
                <p>
                  <b>-</b>
                </p>
                <p>
                  Ubytovat se můžete od <b>14:00</b>.
                </p>
              </div>
              <div className="accomodation__listItem">
                <p>
                  <b>-</b>
                </p>
                <p>Klíče od pokojů si vyzvednete na baru v hlavní veřejné hospodě Pivovaru.</p>
              </div>
              <div className="accomodation__listItem">
                <p>
                  <b>-</b>
                </p>
                <p>Při odjezdu prosím klíče vraťte opět na bar.</p>
              </div>
            </div>
          </div>
          <div className="accomodation__content accomodation__content--bottom">
            <div className="accomodation__text">
              <p>
                <b>Ubytování u zámku</b>
              </p>
              <p className="accomodation__smallInfo">
                (Penzion Formanka a Penzion Marie Terezie kněžny Savojské)
              </p>
              <div className="accomodation__listItem">
                <p>
                  <b>-</b>
                </p>
                <p>Ubytování bude možné po obřadu a společném focení.</p>
              </div>
              <div className="accomodation__listItem">
                <p>
                  <b>-</b>
                </p>
                <p>
                  Klíče od pokojů vám po focení předají <b>Kačka a Vláďa Markovi</b>.
                </p>
              </div>
              <div className="accomodation__listItem">
                <p>
                  <b>-</b>
                </p>
                <p>Po skončení pobytu jim prosím klíče vraťte.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
