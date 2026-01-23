import './HeroSection.scss';
import namesImage from './images/names.png';

export const HeroSection = () => {
  return (
    <div className="hero section">
      <div className="section__wrap">
        <div className="flowers flowers--hero--top" aria-hidden></div>
        <div className="flowers flowers--hero--bottom" aria-hidden></div>
        <div className="hero__namesWrapper">
          <img className="names__img" src={namesImage} alt="Lucie a Martin" />
        </div>
        <div className="hero__info">
          <div className="textBlock">
            <p>22. srpna 2026</p>
            <p>ve 12 hodin</p>
          </div>

          <div className="divider"> </div>
          <div className="textBlock">
            <p>Kaple sv. Vojtěcha</p>
            <p>Kostelec nad Černými lesy</p>
          </div>
        </div>
      </div>
    </div>
  );
};
