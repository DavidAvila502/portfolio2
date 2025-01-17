import Navbar from "./components/shared/Navbar";
import About from "./sections/About";
import Banner from "./sections/Banner";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Technologies from "./sections/Technologies";
import backgroundImage from "./assets/background2.jpg";
import { useState } from "react";
import ProjectsModal from "./components/projects/ProjectsModal";
import { Iproject } from "./config/constants/projects_constants";

const App = () => {
   const [isModalActive, setIsModalActive] = useState<boolean>(false);
   const [projectModalContent, setProjectModalContent] = useState<Iproject>();
   return (
      <div>
         <ProjectsModal
            isModalActive={isModalActive}
            setIsModdalActive={setIsModalActive}
            project={projectModalContent}
         />
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
            <Projects
               activateModal={() => setIsModalActive(true)}
               setModalContent={setProjectModalContent}
            />
            <Contact />
         </div>
      </div>
   );
};

export default App;
