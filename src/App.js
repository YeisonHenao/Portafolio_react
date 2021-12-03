//componentes
import Navbar from './components/Navbar';
import Hero from './components/Hero.jsx';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-dark">
      <header>
        <Navbar />
      </header>
      <section>
        <Hero />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}

export default App;
