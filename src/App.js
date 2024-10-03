import Hero from './components/hero';
import './App.css';
import Prensentation from './components/presentation';
import Work from './components/work';
import Tech from './components/tech';
import Footer from './components/footer';
import Project from './components/project';
import Cv from './components/cv';

function App() {
  return (
    <div className="App">
      <Hero />
      <Prensentation />
      <Cv />
      <Work />
      <Tech />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
