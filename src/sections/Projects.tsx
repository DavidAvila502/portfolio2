import ProjectCard from "../components/projects/ProjectCard";
import DownArrow from "../components/shared/DownArrow";
import { projectConstants } from "../config/constants/projects_constants";
const Projects = () => {
   return (
      <div id="projects" className=" pt-[20px] min-h-[100vh]">
         {/* Title */}
         <p className="font-K2D mt-[20px] text-center text-[40px] text-white">
            Proyectos
         </p>

         {/* Card project container */}

         <div
            className="flex items-center flex-row flex-wrap px-[30px] gap-[50px]
          mt-[20px] overflow-y-auto overflow-x-hidden min-h-[70vh]"
         >
            {projectConstants.map((item, index) => (
               <ProjectCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  screenShots={[]}
               />
            ))}
         </div>

         <div className="flex items-center justify-center">
            <DownArrow navTo="#" />
         </div>
      </div>
   );
};

export default Projects;
