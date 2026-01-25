import './Footer.scss';
import LMImg from './images/LM.jpg';

export const Footer = () => {
  return (
    <div className="footer section">
      <div className="footer__wrapper section__wrap">
        <div className="footer__imgWrap">
          <img src={LMImg} alt="Lucie, Martin a Ondra" />
        </div>
        <div className="footer__content">
          <p className="footer__content--title">Ulož si datum a přijď si s námi tento den užít!</p>
          <p className="footer__content--text">Těšíme se na tebe!</p>
          <p className="footer__content--small">Pokud máš dotazy k svatbě, napiš nám.</p>
        </div>
      </div>
    </div>
  );
};
