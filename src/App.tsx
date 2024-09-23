import Navbar from "./components/shared/Navbar";
import About from "./sections/About";
import Banner from "./sections/Banner";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Technologies from "./sections/Technologies";
import backgroundImage from "./assets/background2.jpg";

const App = () => {
   return (
      <div className="relative">
         <Navbar />
         <div
            className="fixed h-[100vh] inset-0 bg-cover bg-center opacity-[0.2] z-[-1]"
            style={{ backgroundImage: `url(${backgroundImage})` }}
         ></div>

         <Banner />
         <About />
         <Skills />
         <Technologies />
         <Projects />
         <Contact />
      </div>
   );
};

export default App;
