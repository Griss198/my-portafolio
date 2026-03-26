import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Languages} from "./components/Languages";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutMe />
      <Skills />
      <Languages />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
/**aqui nosotros elegimos las nuevas secciones que vamos a agregar */