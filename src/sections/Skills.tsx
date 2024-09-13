import DownArrow from "../components/shared/DownArrow";
import { skillsConstats } from "../config/constants/sskills_constants";
import { motion } from "framer-motion";
import { StaggerChild, StaggerVerticalUpAppears } from "../utils/variants";

const Skills = () => {
   return (
      <div id="skills" className="min-h-[100vh] pt-[40px]">
         {/* Title */}
         <p className="text-white text-[40px] font-K2D text-center mt-[20px]">
            Habilidades
         </p>

         <motion.div
            variants={StaggerChild}
            initial={"hide"}
            whileInView={"show"}
            className="mt-[20px] flex flex-row flex-wrap items-center justify-center gap-[50px] min-h-[60vh]"
         >
            {skillsConstats.map((currentSkill, index) => (
               <motion.div
                  variants={StaggerVerticalUpAppears}
                  key={index}
                  className="rounded-[20px] bg-baseGrayWithOpacity border-strokeGray border-[1px]
                  flex flex-col items-start justify-center w-[500px] h-[300px] pl-[40px] py-[50px]
                  gap-[20px] hover:shadow-blueShadow transition-all duration-[400ms] cursor-pointer  hover:scale-[1.01]
                  
                  "
               >
                  <div className="bg-baseBlue p-[15px] rounded-[10px]">
                     <img src={currentSkill.icon} alt="skill.svg" height={40} />
                  </div>

                  <p className="font-K2D text-white text-[25px]">
                     {currentSkill.title}
                  </p>

                  <p className="text-[#A1A1A1] text-[22px] font-K2D">
                     {currentSkill.description}
                  </p>
               </motion.div>
            ))}
         </motion.div>

         <div className="flex items-center justify-center">
            <DownArrow navTo="#technologies" />
         </div>
      </div>
   );
};

export default Skills;
