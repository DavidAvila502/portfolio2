import { motion } from "framer-motion";
import {
   eyeButtonVariant,
   projectCardStaggerVariant,
} from "../../utils/variants";
import { Iproject } from "../../config/constants/projects_constants";
import eyeIcon from "../../assets/eye.svg";

const ProjectCard = ({
   title,
   description,
   icon,
   screenShots,
   color1,
   color2,
}: Iproject) => {
   return (
      <motion.div
         variants={projectCardStaggerVariant}
         initial={"initial"}
         whileHover={"start"}
         className="h-[100%] w-[480px] rounded-[20px] hover:cursor-pointer p-[20px]
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
            src={screenShots[0]}
            alt="screenshot.png"
            className="max-h-[200px] mx-auto mt-[50px] rounded-[20px]"
         />

         <div className="mt-[60px] flex flex-col items-end justify-end">
            <motion.div
               variants={eyeButtonVariant}
               className="p-[10px] bg-gray-400 rounded-full hover:bg-black
               "
            >
               <img src={eyeIcon} alt="show" className="h-[30px] w-[30px]" />
            </motion.div>
         </div>
      </motion.div>
   );
};

export default ProjectCard;
