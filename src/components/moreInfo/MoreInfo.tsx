import './MoreInfo.scss';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

const items = [
  {
    id: 1,
    title: 'Doprava a parkování',
    content: (
      <>
        <p>
          Bezplatné parkoviště pro svatební hosty je vymezeno v areálu pivovaru vedle tenisového
          kurtu. Není hlídané, proto prosím nenechávejte cennosti v autě.{' '}
          <strong>
            Bude otevřeno s volným vjezdem/výjezdem v době od 8:00 do 22:00 (v noci bude parkoviště
            uzamčeno).
          </strong>{' '}
        </p>
        <p>
          Nachází se zhruba 400 m od místa obřadu,{' '}
          <strong>
            proto prosím parkujte svá auta primárně na{' '}
            <a href="https://mapy.com/en/letecka?source=coor&id=14.864865979298003%2C49.998557831237726&x=14.8650108&y=49.9982070&z=19">
              tomto parkovišti u pivovaru.
            </a>
          </strong>
        </p>
        <p>
          Prosíme, neparkujte v době od 11:00 do 22:00 svá vozidla na druhém parkovišti přímo před
          pivovarem. Tento prostor je vyhrazen pro ostatní hosty pivovarské restaurace.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: 'Ubytování',
    content: (
      <>
        <h4>Rodina</h4>
        <p>
          Pro rodinu, která přijíždí z větší dálky, máme ze soboty na neděli zajištěné ubytování
          přímo v areálu pivovaru, kde bude probíhat svatební oslava. Dejte nám prosím vědět, kdo
          bude mít o ubytování zájem, ať vám můžeme místo rezervovat.
        </p>
        <h4>Kamarádi</h4>
        <p>
          Kamarádům rádi pomůžeme zajistit ubytování v zámeckém areálu v Depandanci Marie Savojské a
          Depandanci Formanka (Penzion Smiřických). Prosíme, napište nám co nejdříve, zda budete mít
          o ubytování zájem, ať vám ho můžeme rezervovat. Ubytování je ze soboty na neděli a cena je
          480 Kč či 680 Kč/noc/os. dle typu ubytování.{' '}
        </p>
        <p>
          Pro ubytované v zámeckém areálu bude také možnost využít parkování přímo u ubytování (je
          zde však omezená kapacita parkovacího stání).
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: 'Jak se k nám dostat',
    content: (
      <>
        <p>
          Nejlepší způsob dopravy na místo svatby je autem. Dále se dá do Kostelce dostat autobusem
          ze zastávky Prahy - Háje.
        </p>
        <p>
          Pokud se k nám nemůžete dopravit vlastní cestou, ozvěte se nám. Společně se pokusíme najít
          řešení a propojit vás s hosty, kteří na svatbu pojedou, aby se k nám dostal opravdu každý.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: 'Odvoz',
    content: (
      <p>
        Pro hosty z okolí Kostelce nad Černými lesy budeme mít zařízený odvoz ve večerních hodinách.
        Dejte nám prosím vědět, kdo odvoz bude potřebovat.
      </p>
    ),
  },
  {
    id: 5,
    title: 'Svatební dary',
    content: (
      <p>
        Největší radost nám udělá, když tento den strávíte společně s námi.Pokud budete chtít
        přispět i jinak než svou přítomností, budeme moc rádi za finanční dar na náš velký sen -
        postavit si vlastní dům.
      </p>
    ),
  },
  {
    id: 6,
    title: 'Hostina pro rodinnu a párty pro všechny',
    content: (
      <>
        <p>
          Po svatebním obřadu bude následovat <strong>společný oběd s rodinou</strong>, který
          proběhne v areálu pivovaru. Je to pro nás čas, kdy chceme být s našimi nejbližšími a užít
          si více času v klidnějším rodinném kruhu.
        </p>
        <p>
          Od <strong>16:00 se k nám a k rodině připojí také naši kamarádi</strong> a svatební den
          tak plynule přejde ve <strong>svatební párty</strong>. Můžete se těšit na různé hry,
          svatební tradice, odpolední i večerní raut – zkrátka na pohodovou oslavu plnou smíchu a
          dobré nálady.
        </p>
        <p>
          Pokud by si kamarádi chtěli zajít na oběd, mohou využít veřejný prostor restaurace v
          pivovaru, kde výborně vaří, případně některou z dalších restaurací v okolí.
        </p>
        <p>
          Svatební hostina a párty proběhne v{' '}
          <a href="https://www.cernokosteleckypivovar.cz/">areálu Černokosteleckého pivovaru</a>.
        </p>
      </>
    ),
  },
  {
    id: 7,
    title: 'Nápoje a menu',
    content: (
      <>
        <p>
          Po celý den bude k dispozici bar, kde si můžete vybrat z{' '}
          <strong>nealkoholických a alkoholických nápojů (pivo a víno).</strong>
        </p>
        <p>
          Pokud byste měli chuť na něco jiného, například na{' '}
          <strong>míchané alkoholické nápoje či panáky</strong>, budou k dispozici také{' '}
          <strong>na baru za poplatek</strong>. Doporučujeme si však vzít s sebou{' '}
          <strong>dostatek hotovosti</strong>, jelikož na místě{' '}
          <strong>není možné platit kartou</strong>.
        </p>
        <p>
          Pokud máte <strong>jakékoli intolerance</strong> (např. laktóza, lepek…) nebo dodržujete
          speciální stravu (vegan, vegetarián…), dejte nám prosím <strong>včas vědět předem</strong>
          , abychom vám mohli zajistit vhodnou alternativu.
        </p>
      </>
    ),
  },
  {
    id: 8,
    title: 'Fotografování',
    content: (
      <>
        <p>
          Během svatebního dne bude s námi profesionální fotografka, která zachytí všechny důležité
          okamžiky – od příprav až po večerní oslavu.
        </p>
        <p>
          Samozřejmě nás potěší, když i vy budete během svatby fotit a své snímky s námi později
          nasdílíte.
        </p>
        <p>
          <strong>Prosíme vás ale o jednu maličkost:</strong> během svatebního obřadu budeme rádi
          když <strong>odložíte své telefony/kamery/fotoaparáty</strong> a užijete si tento
          výjimečný okamžik naplno. Fotografka během obřadu zachytí vše podstatné, všechny
          fotografie s vámi později samozřejmě nasdílíme.
        </p>
      </>
    ),
  },
];

export const MoreInfo = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="moreInfo section">
      <div className="moreInfo__wrap section__wrap">
        <div className="flowers flowers--moreInfo flowers--moreInfo--top"></div>
        <h2 className="moreInfo__heading h2">Obecné</h2>
        <div className="moreInfo__container">
          {items.map(item => {
            const isOpen = openId === item.id;

            return (
              <div className="accordion" key={item.id}>
                <button
                  className="accordion__button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  {item.title}
                  <span className={`accordion__icon ${isOpen ? 'open' : ''}`}>
                    <ChevronDownIcon />
                  </span>
                </button>

                <div className={`accordion__panel-wrapper ${isOpen ? 'open' : ''}`}>
                  <div className="accordion__panel">{item.content}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
