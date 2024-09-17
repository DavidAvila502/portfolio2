import { motion } from "framer-motion";
import { scaleVariants } from "../../utils/variants";
import { Iproject } from "../../config/constants/projects_constants";

const ProjectCard = ({ title, description }: Iproject) => {
   return (
      <motion.div
         initial={"hidden"}
         whileInView={"show"}
         variants={scaleVariants}
         whileHover={{ translateY: -4 }}
         className="h-[550px] w-[500px] bg-baseBlueWithOpacity rounded-[20px]
            cursor-pointer transition-[brightnes] duration-[400ms] hover:brightness-125  hover:-translate-y-2"
      >
         {/* Image */}
         <div className="h-[275px] w-[500px] bg-[#1B1D21] rounded-tl-[20px] rounded-tr-[20px]"></div>

         <div className="p-[20px]">
            {/* Title */}
            <p className="font-K2D text-white text-[40px]">{title}</p>
            {/* Description */}
            <p className="font-Roboto text-[#E0E0E0] text-[25px] mt-[10px]">
               {description}
            </p>
         </div>
      </motion.div>
   );
};

export default ProjectCard;
