import './ClothesSection.scss';

export const ClothesSection = () => {
  return (
    <div className="clothesSection section">
      <div className="clothesSection__wrap section__wrap">
        <div className="flowers flowers--clothesSection flowers--clothesSection--top"></div>
        <div className="flowers flowers--clothesSection flowers--clothesSection--bottom"></div>
        <h2 className="clothesSection__heading h2">Co na sebe?</h2>
        <div className="clothesSection__conteiner">
          <div className="clothesSection__content clothesSection__content--top">
            <p className="clothesSection__text">
              Dress code není povinný. Nejdůležitější je pro nás, abyste se cítili pohodlně a sami
              sebou.
            </p>
          </div>
          <div className="clothesSection__content clothesSection__content--bottom">
            <p className="clothesSection__text">
              Pokud ale budete mít chuť, moc nás potěší, když se vám podaří sladit alespoň drobný
              detail outfitu do barev naší svatby. Barevnou paletu najdete níže.
            </p>
          </div>
          <div className="collors">
            <div className="collors__swatch collors__swatch--greenDark"></div>
            <div className="collors__swatch collors__swatch--green"></div>
            <div className="collors__swatch collors__swatch--brown"></div>
            <div className="collors__swatch collors__swatch--beige"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
