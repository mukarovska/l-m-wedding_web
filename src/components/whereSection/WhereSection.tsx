import './whereSection.scss';
import { LocationIcon } from '../atoms/icones/LocationIcon';
import { HeardsIcon } from '../atoms/icones/HeardsIcon';
import { FoodIcon } from '../atoms/icones/FoodIcone';
import { PartyIcon } from '../atoms/icones/PartyIcon';
import { Card } from '../atoms/card/Card';

export const WhereSection = () => {
  return (
    <div className="whereSection section">
      <div className="whereSection__wrap section__wrap">
        <h2 className="whereSection__heading">Kdy a Kde?</h2>
        <div className="whereSection__cards">
          <Card
            title="Příjezd hostů"
            time="11:30"
            place="Kaple sv. Vojtěcha"
            city="Kostelec nad Černými lesy"
            map="https://mapy.com/en/turisticka?source=base&id=1835674&ds=2&x=14.8623543&y=49.9956701&z=18"
            icone={<LocationIcon />}
          />
          <Card
            title="Obřad"
            time="12:00"
            place="Kaple sv. Vojtěcha"
            city="Kostelec nad Černými lesy"
            map="https://mapy.com/en/turisticka?source=base&id=1835674&ds=2&x=14.8623543&y=49.9956701&z=18"
            icone={<HeardsIcon />}
          />
          <Card
            title="Hostina s rodinou"
            time="13:00"
            place="Černokostelecký pivovar"
            city="Kostelec nad Černými lesy"
            map="https://mapy.com/en/zakladni?source=firm&id=1983521&ds=1&x=14.8649558&y=49.9979397&z=17"
            icone={<FoodIcon />}
          />
          <Card
            title="Párty pro všechny"
            time="16:00"
            place="Černokostelecký pivovar"
            city="Kostelec nad Černými lesy"
            map="https://mapy.com/en/zakladni?source=firm&id=1983521&ds=1&x=14.8649558&y=49.9979397&z=17"
            icone={<PartyIcon />}
          />
        </div>
      </div>
    </div>
  );
};
