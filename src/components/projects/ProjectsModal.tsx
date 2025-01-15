import backArrow from "../../assets/back_arrow.svg";
import TechnologList from "../technologies/TechnologiesList";
import { TechnologiesConstants } from "../../config/constants/technologies_constants";
import { Iproject } from "../../config/constants/projects_constants";
import { Swiper, SwiperSlide } from "swiper/react";
import lockIcon from "../../assets/lock_icon.svg";
import worldIcon from "../../assets/world_icon.svg";
import { motion, AnimatePresence } from "framer-motion";
import githubIcon from "../../assets/github.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import LinkButton from "../shared/LinkButton";
import { modalVariants } from "../../utils/variants";

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

   return (
      <AnimatePresence>
         {/* // Background modal */}
         {isModalActive && project != undefined && (
            <motion.div
               variants={modalVariants}
               initial={"initial"}
               animate={"show"}
               exit={"hide"}
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
                        <p
                           className="text-white font-K2D text-[50px] text-center
                              max-sm:text-[35px]"
                        >
                           {project.title}
                        </p>

                        {/* Description */}

                        <p className="mt-[20px] font-K2D  text-baseGreen text-[35px]">
                           Descripción:
                        </p>

                        <p
                           className="mt-[20px] font-Roboto text-[#A1A1A1] text-[30px]
                              max-sm:text-[20px]"
                        >
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

                        <p
                           className="mt-[20px] font-Roboto text-[#A1A1A1] text-[30px]
                              max-sm:text-[20px]"
                        >
                           {project.stateManagment ?? "--"}
                        </p>

                        {/* Architecturee */}

                        <p className="mt-[20px] font-K2D  text-baseGreen text-[35px]">
                           Arquitectura:
                        </p>
                        <p
                           className="mt-[20px] font-Roboto text-[#A1A1A1] text-[30px]
                                max-sm:text-[20px]"
                        >
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
                                    className="mt-[20px] font-Roboto text-[#A1A1A1] text-[30px]
                                       max-sm:text-[20px]"
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
                           <div className="pb-[30px]">
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

                        <div
                           className={`flex flex-row gap-[30px] pb-[20px]
                           max-[400px]:flex-col`}
                        >
                           {/* Site button */}
                           {project.siteUrl != undefined ? (
                              <LinkButton
                                 text="Ir al sitio"
                                 active={true}
                                 icon={worldIcon}
                                 url={project.siteUrl}
                                 buttonStyles="max-[400px]:py-[16px]"
                              />
                           ) : (
                              ""
                           )}

                           {/* Repository button */}
                           {project.repositoryUrl != undefined ? (
                              <LinkButton
                                 url={project.repositoryUrl}
                                 active={true}
                                 backgroundColor="bg-[#2db65b]"
                                 text="Repositorio"
                                 icon={githubIcon}
                                 buttonStyles="max-[400px]:py-[16px]"
                              />
                           ) : (
                              <LinkButton
                                 active={false}
                                 text="Repositorio"
                                 infoText="El código de este proyecto es privado"
                                 icon={lockIcon}
                                 buttonStyles="max-[400px]:py-[16px]"
                              />
                           )}
                        </div>
                     </div>
                  )}
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default ProjectsModal;
