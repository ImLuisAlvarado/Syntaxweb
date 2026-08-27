import ScanlinesOverlay from './components/ScanlinesOverlay';
import Hud from './components/Hud';
import Header from './components/Header';
import Hero from './components/Hero';
import LoveNotes from './components/LoveNotes';
import Promises from './components/Promises';
import Movies from './components/News';
import Vinyls from './components/Vinyls';
import Dedications from './components/Events';
import Tales from './components/Tales';
import Letter from './components/Letter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative selection:bg-syntax-purple selection:text-white">
      <ScanlinesOverlay />
      <Hud />
      <Header />
      <Hero />
      <LoveNotes />
      <Promises />
      <Movies />
      <Vinyls />
      <Dedications />
      <Tales />
      <Letter />
      <Footer />
    </div>
  );
}

export default App;
