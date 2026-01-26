import { ClothesSection } from './components/clothesSection/ClothesSection';
import { Countdown } from './components/countdown/Countdown';
import { Footer } from './components/footer/Footer';
import { Fotos } from './components/fotos/Fotos';
import { HeroSection } from './components/heroSection/HeroSection';
import { Invitation } from './components/invitation/Invitation';
import { MoreInfo } from './components/moreInfo/MoreInfo';
import { People } from './components/people/People';
// import { Program } from './components/program/Program';
import { WhereSection } from './components/whereSection/WhereSection';

function App() {
  return (
    <>
      {/* <div className="owerlay"></div> */}
      <div className="app">
        <HeroSection />
        <Countdown />
        <Invitation />
        <WhereSection />
        {/* <Program /> */}
        <ClothesSection />
        <People />
        <MoreInfo />
        <Fotos />
        <Footer />
      </div>
    </>
  );
}

export default App;
