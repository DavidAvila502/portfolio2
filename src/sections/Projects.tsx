import DownArrow from "../components/shared/DownArrow";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import ProjectCard from "../components/projects/ProjectCard";
import {
   Iproject,
   projectConstants,
} from "../config/constants/projects_constants";

interface ProjectsProps {
   activateModal?: () => void;
   setModalContent?: (param: Iproject) => void;
}

const Projects = ({ activateModal, setModalContent }: ProjectsProps) => {
   return (
      <div
         id="projects"
         className=" pt-[20px] min-h-[100vh] bg-backgroundColor"
      >
         {/* Title */}
         <p className="font-K2D mt-[20px] text-center text-[40px] text-white">
            Proyectos
         </p>

         {/* Card project container */}

         <div className="min-h-[70vh] max-w-[1900px] mt-[20px] mx-auto my-0 flex items-center justify-center">
            <Swiper
               slidesPerView={"auto"}
               spaceBetween={10}
               pagination={{
                  clickable: true,
               }}
               breakpoints={{
                  640: {
                     spaceBetween: 40,
                  },
               }}
               autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
               }}
               // loop={true}
               modules={[Pagination, Autoplay]}
               className="h-[600px] w-[80%] py-[5px]
               max-[600px]:w-[95%]
               "
            >
               {projectConstants.map((item, index) => (
                  <SwiperSlide
                     key={index}
                     className="w-[480px]
                     max-[510px]:w-[380px] max-[460px]:w-[100%]
                     "
                  >
                     <ProjectCard
                        project={item}
                        activateModal={activateModal}
                        setModalContent={setModalContent}
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
