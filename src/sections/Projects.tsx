import DownArrow from "../components/shared/DownArrow";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import ProjectCard from "../components/projects/ProjectCard";
import { projectConstants } from "../config/constants/projects_constants";

const Projects = () => {
   return (
      <div id="projects" className=" pt-[20px] min-h-[100vh]">
         {/* Title */}
         <p className="font-K2D mt-[20px] text-center text-[40px] text-white">
            Proyectos
         </p>

         {/* Card project container */}

         <div className="h-[70vh] mx-auto mt-[20px]">
            <Swiper
               slidesPerView={3}
               spaceBetween={40}
               pagination={{
                  clickable: true,
               }}
               modules={[Pagination]}
               className="h-[100%] w-[80%] py-[5px]"
            >
               {projectConstants.map((item, index) => (
                  <SwiperSlide key={index}>
                     <ProjectCard
                        title={item.title}
                        icon={item.icon}
                        screenShots={item.screenShots}
                        description={item.description}
                        color1={item.color1}
                        color2={item.color2}
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>

         <div className="flex items-center justify-center">
            <DownArrow navTo="#contact" />
         </div>
      </div>
   );
};

export default Projects;
