import backArrow from "../../assets/back_arrow.svg";
import TechnologList from "../technologies/TechnologiesList";
import { TechnologiesConstants } from "../../config/constants/technologies_constants";
import { Iproject } from "../../config/constants/projects_constants";
import { Swiper, SwiperSlide } from "swiper/react";
import lockIcon from "../../assets/lock_icon.svg";
import worldIcon from "../../assets/world_icon.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

interface ProjectsModalProps {
   isModalActive: boolean;
   setIsModdalActive: (param: boolean) => void;
   project?: Iproject;
}

const disableBodyScroll = () => {
   document.body.style.overflow = "hidden";
};
const enableBodyScroll = () => {
   document.body.style.overflow = "scroll";
};

const ProjectsModal = ({
   isModalActive,
   setIsModdalActive,
   project,
}: ProjectsModalProps) => {
   isModalActive == false ? enableBodyScroll() : disableBodyScroll();

   if (isModalActive == false) {
      return <></>;
   }
   return (
      // Background modal
      <div
         className="fixed z-[10] bg-backgroundColor bg-opacity-80 top-0 bottom-0 right-0 left-0
            flex items-center justify-center"
      >
         {/* Modal content */}
         <div className="w-[100%] h-[100%] bg-backgroundColor rounded-[20px] overflow-y-auto">
            {/* Close button container */}
            <div className="flex justify-end mt-[20px]">
               <div
                  onClick={() => setIsModdalActive(false)}
                  className="flex items-center justify-center h-[40px] w-[40px] bg-baseBlue
                  rounded-full mr-[20px] cursor-pointer"
               >
                  <img src={backArrow} alt="back_arrow.svg" />
               </div>
            </div>

            {/* content */}

            {project === undefined ? (
               <></>
            ) : (
               <div className="mt-[20px] h-[90%] max-w-[1500px] mx-auto px-[20px]">
                  {/* Title */}
                  <p className="text-white font-K2D text-[50px] text-center">
                     {project.title}
                  </p>

                  {/* Description */}

                  <p className="mt-[20px] font-K2D  text-baseGreen text-[35px]">
                     Descripción:
                  </p>

                  <p className="mt-[20px] font-Roboto text-[#A1A1A1] text-[30px]">
                     {project.description ?? "--"}
                  </p>

                  {/* Technologies */}

                  <p className="mt-[20px] font-K2D  text-baseGreen text-[35px]">
                     Tecnologías:
                  </p>

                  <div className="mt-[20px] flex flex-row flex-wrap gap-[40px]">
                     {project.technologyList != undefined &&
                     project.technologyList.length > 0 ? (
                        <TechnologList
                           technologies={TechnologiesConstants}
                           filterByName={true}
                           technologyNames={project.technologyList}
                        />
                     ) : (
                        <p className="mt-[20px] font-Roboto text-[#A1A1A1] text-[30px]">
                           --
                        </p>
                     )}
                  </div>

                  {/* Gestor de estado */}

                  <p className="mt-[20px] font-K2D  text-baseGreen text-[35px]">
                     Gestor de estados:
                  </p>

                  <p className="mt-[20px] font-Roboto text-[#A1A1A1] text-[30px]">
                     {project.stateManagment ?? "--"}
                  </p>

                  {/* Architecturee */}

                  <p className="mt-[20px] font-K2D  text-baseGreen text-[35px]">
                     Arquitectura:
                  </p>
                  <p className="mt-[20px] font-Roboto text-[#A1A1A1] text-[30px]">
                     {project.architecture ?? "--"}
                  </p>

                  {/* Features */}

                  <p className="mt-[20px] font-K2D  text-baseGreen text-[35px]">
                     Características:
                  </p>
                  <ul>
                     {project.features != undefined &&
                     project.features.length > 0 ? (
                        project.features?.map((feature, index) => (
                           <li
                              key={index}
                              className="mt-[20px] font-Roboto text-[#A1A1A1] text-[30px]"
                           >
                              {feature}
                           </li>
                        ))
                     ) : (
                        <p className="mt-[20px] font-Roboto text-[#A1A1A1] text-[30px]">
                           {"--"}
                        </p>
                     )}
                  </ul>

                  {/* Screenshots */}

                  <p className="mt-[20px] font-K2D mb-[20px] text-baseGreen text-[35px]">
                     Screenshots:
                  </p>

                  {project.screenShots != undefined &&
                  project.screenShots.length > 0 ? (
                     <div className="pb-[100px]">
                        <Swiper
                           spaceBetween={10}
                           pagination={{
                              clickable: true,
                           }}
                           breakpoints={{
                              640: {
                                 spaceBetween: 40,
                              },
                           }}
                           slidesPerView={"auto"}
                           modules={[Pagination, Autoplay]}
                        >
                           {project.screenShots.map((item, index) => (
                              <SwiperSlide
                                 key={index}
                                 className="w-[400px] max-sm:w-[300px]"
                              >
                                 <img
                                    src={item}
                                    className="rounded-[20px] w-[400px] max-sm:w-[300px]"
                                    alt={`screenshot-${index}`}
                                 />
                              </SwiperSlide>
                           ))}
                        </Swiper>
                     </div>
                  ) : (
                     <p className="mt-[20px] font-Roboto text-[#A1A1A1] text-[30px]">
                        {"--"}
                     </p>
                  )}

                  {/* Buttons */}

                  <div className="flex flex-row gap-[30px] pb-[40px]">
                     <div
                        className="rounded-[20px] bg-baseBlue px-[20px] py-[10px]
                           flex flex-row items-center gap-2 cursor-pointer"
                     >
                        <img src={worldIcon} alt="world.svg" />
                        <p className="text-white font-K2D text-[20px]">
                           Ir al sitio
                        </p>
                     </div>

                     <div
                        className="relative flex flex-row  rounded-[20px] bg-gray-400 px-[20px] py-[10px]
                           items-center gap-2 cursor-pointer
                           group"
                     >
                        <img src={lockIcon} alt="lock.svg" />
                        <p className="text-white font-K2D text-[20px]">
                           Repositorio
                        </p>

                        {/* Cuadro de información (oculto por defecto) */}
                        <div
                           className="absolute left-0 top-[-80px] p-4 w-[200px] rounded-[20px]
                              bg-yellow-600  opacity-0
                              group-hover:opacity-100 transition-opacity duration-300
                              flex items-center justify-center"
                        >
                           <p className="font-K2D text-white text-[18px]">
                              El código es privado
                           </p>

                           <div
                              className="absolute bottom-[-10px] left-1/2 transform 
                              -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8
                              border-transparent border-t-yellow-600"
                           ></div>
                        </div>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default ProjectsModal;
