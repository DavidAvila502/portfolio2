import Navbar from "./components/shared/Navbar";
import About from "./sections/About";
import Banner from "./sections/Banner";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Technologies from "./sections/Technologies";

const App = () => {
   return (
      <>
         <Navbar />
         <Banner />
         <About />
         <Skills />
         <Technologies />
         <Projects />
         <Contact />
      </>
   );
};

export default App;
