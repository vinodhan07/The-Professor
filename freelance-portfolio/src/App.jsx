import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import TechStack from './sections/TechStack';
import About from './sections/About';
import Services from './sections/Services';
import Works from './sections/Works';
import Pricing from './sections/Pricing';
import FAQ from './sections/FAQ';
import GetInTouch from './sections/GetInTouch';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <TechStack />
        <About />
        <Services />
        <Works />
        <Pricing />
        <FAQ />
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}

export default App;
