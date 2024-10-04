import backArrow from "../../assets/back_arrow.svg";
import TechnologList from "../technologies/TechnologiesList";
import { TechnologiesConstants } from "../../config/constants/technologies_constants";
interface ProjectsModalProps {
   isModalActive: boolean;
   setIsModdalActive: (param: boolean) => void;
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
}: ProjectsModalProps) => {
   isModalActive == false ? enableBodyScroll() : disableBodyScroll();

   return isModalActive == false ? (
      <></>
   ) : (
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

            <div className="mt-[20px] h-[90%] max-w-[1500px] mx-auto px-[20px]">
               {/* Title */}
               <p className="text-white font-K2D text-[50px] text-center">
                  Villamar Rewards
               </p>

               {/* Description */}

               <p className="mt-[20px] font-K2D  text-white text-[35px]">
                  Descripción:
               </p>

               <p className="mt-[20px] font-Roboto text-[#A1A1A1] text-[30px]">
                  Proyecto full-stack , sistema de fidelizacion de huespedes
                  para el hotel Villamar Princesa.
               </p>

               {/* Technologies */}

               <p className="mt-[20px] font-K2D  text-white text-[35px]">
                  Tecnologías:
               </p>

               <div className="mt-[20px] flex flex-row flex-wrap gap-[40px]">
                  <TechnologList
                     technologies={TechnologiesConstants}
                     filterByName={true}
                     technologyNames={[
                        "React",
                        "Strapi",
                        "Typescript",
                        "Javascript",
                     ]}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProjectsModal;
