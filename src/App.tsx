import { Countdown } from './components/countdown/Countdown';
import { HeroSection } from './components/heroSection/HeroSection';
import { Invitation } from './components/invitation/Invitation';
import { Program } from './components/program/Program';
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
        <Program />
      </div>
    </>
  );
}

export default App;
