import DownArrow from "../components/shared/DownArrow";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
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
                  delay: 3000, // Cambia la página cada 3 segundos (3000 ms)
                  disableOnInteraction: false, // Sigue el autoplay incluso después de que el usuario interactúe
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
