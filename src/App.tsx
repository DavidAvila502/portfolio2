import Navbar from "./components/shared/Navbar";
import About from "./sections/About";
import Banner from "./sections/Banner";
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
      </>
   );
};

export default App;
