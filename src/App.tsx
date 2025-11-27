import { CountDown } from './components/countDown/CountDown';
import { HeroSection } from './components/heroSection/HeroSection';
import { InProgress } from './components/inProgress/InProgress';

function App() {
  return (
    <div className="app">
      <HeroSection />
      <CountDown />
      <InProgress />
    </div>
  );
}

export default App;
