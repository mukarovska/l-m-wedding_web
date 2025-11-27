import { Countdown } from './components/countdown/Countdown';
import { HeroSection } from './components/heroSection/HeroSection';
import { InProgress } from './components/inProgress/InProgress';

function App() {
  return (
    <div className="app">
      <HeroSection />
      <Countdown />
      <InProgress />
    </div>
  );
}

export default App;
