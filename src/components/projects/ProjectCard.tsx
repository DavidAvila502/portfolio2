import { motion } from "framer-motion";
import { scaleVariants } from "../../utils/variants";

const ProjectCard = () => {
   return (
      <motion.div
         //  initial={"hidden"}
         //  whileInView={"show"}
         //  variants={scaleVariants}
         initial={{ scale: 0 }}
         whileInView={{ scale: 1 }}
         transition={{ type: "spring", stiffness: 260, damping: 20 }}
         //  whileHover={{ translateY: -15, transition: { duration: 0.2 } }}
         className="h-[550px] w-[500px] bg-baseBlueWithOpacity rounded-[20px]
            cursor-pointer transition-all duration-[400ms] hover:brightness-125  hover:-translate-y-2"
      >
         <div className="h-[275px] w-[500px] bg-[#1B1D21] rounded-tl-[20px] rounded-tr-[20px]"></div>
         <div className="p-[20px]">
            <p className="font-K2D text-white text-[40px]">Villamar Rewards</p>
            <p className="font-Roboto text-[#E0E0E0] text-[25px] mt-[10px]">
               Proyecto full-stack , sistema de fidelizacion de huespedes para
               el hotel Villamar Princesa.
            </p>
         </div>
      </motion.div>
   );
};

export default ProjectCard;
