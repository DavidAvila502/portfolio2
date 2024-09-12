import Navbar from "./components/shared/Navbar";
import About from "./sections/About";
import Banner from "./sections/Banner";
import Skills from "./sections/Skills";

const App = () => {
   return (
      <>
         <Navbar />
         <Banner />
         <About />
         <Skills />
      </>
   );
};

export default App;
