import { motion } from "framer-motion";
import {
   eyeButtonVariant,
   projectCardStaggerVariant,
} from "../../utils/variants";
import { Iproject } from "../../config/constants/projects_constants";
import eyeIcon from "../../assets/eye.svg";

interface ProjectCardProps {
   project: Iproject;
   activateModal?: () => void;
   setModalContent?: (param: Iproject) => void;
}

const ProjectCard = ({
   project,
   activateModal,
   setModalContent,
}: ProjectCardProps) => {
   const { title, description, icon, color1, color2, mainScreenshot } = project;

   return (
      <motion.div
         variants={projectCardStaggerVariant}
         initial={"initial"}
         whileHover={"start"}
         className="h-full w-full rounded-[20px] hover:cursor-pointer p-[20px]
         transition-[brightnes] duration-[400ms] hover:brightness-[1.03]
      
         "
         style={{
            background: `linear-gradient(to bottom, ${color1}, ${color2})`,
         }}
      >
         {/* Icon */}
         <div className="flex flex-row items-center">
            <div className=" bg-blue-500 rounded-[20px] p-[5px]">
               <img
                  src={icon}
                  alt="villamar-rewards.svg"
                  className="h-[80px] w-[80px]"
               />
            </div>

            {/* Name */}

            <p className="text-white text-[30px] font-K2D ml-[5px]">{title}</p>
         </div>

         {/* Description */}
         <p className="text-white font-Roboto text-[20px] mt-[20px]">
            {description}
         </p>

         {/* Screenshoot */}

         <img
            src={mainScreenshot}
            alt="screenshot.png"
            className="max-h-[200px] mx-auto mt-[50px] rounded-[20px]"
         />

         <div
            className={`mt-[60px] flex flex-col items-end justify-end max-sm:hidden`}
         >
            {/* Desktop info button */}
            <motion.div
               onClick={() => {
                  if (
                     activateModal != undefined &&
                     setModalContent != undefined
                  ) {
                     setModalContent(project);
                     activateModal();
                  }
               }}
               variants={eyeButtonVariant}
               className="p-[10px] bg-gray-400 rounded-full hover:bg-black
               "
            >
               <img src={eyeIcon} alt="show" className="h-[30px] w-[30px]" />
            </motion.div>
         </div>

         {/* Mobile info button */}

         <div
            onClick={() => {
               if (activateModal != undefined && setModalContent != undefined) {
                  setModalContent(project);
                  activateModal();
               }
            }}
            className="sm:hidden mt-[30px] bg-gray-800 py-[11px] rounded-[20px]
               "
         >
            <p className="text-center text-white font-K2D text-[20px]">
               Más información
            </p>
         </div>
      </motion.div>
   );
};

export default ProjectCard;
