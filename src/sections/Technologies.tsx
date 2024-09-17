import { useState } from "react";
import TechnologyFilter from "../components/technologies/TechnologyFilter";
import {
   TechnologiesConstants,
   technologyType,
} from "../config/constants/technologies_constants";
import TechnologList from "../components/technologies/TechnologiesList";
import { motion } from "framer-motion";
import { technologyListStagger } from "../utils/variants";
import DownArrow from "../components/shared/DownArrow";

const Technologies = () => {
   const [currentTechnologyType, setCurrentTechnologyType] =
      useState<technologyType>(technologyType.main);

   return (
      <div id="technologies" className="min-h-[100vh] bg-[#24272E] pt-[20px]">
         {/* Title */}
         <p className="font-K2D mt-[20px] text-center text-[40px] text-white">
            Tecnologías
         </p>

         {/*/ Filter */}

         <TechnologyFilter
            currentTechnologyType={currentTechnologyType}
            setCurrentTechnologyType={setCurrentTechnologyType}
         />

         {/* Technologies */}

         <motion.div
            variants={technologyListStagger}
            initial={"hidden"}
            whileInView={"show"}
            key={currentTechnologyType}
            className="flex flex-row gap-[100px] flex-wrap justify-center items-center 
             w-[60%] mx-auto pt-[100px] overflow-y-auto overflow-x-hidden h-[70vh] p-[50px] max-sm:w-[90%]"
         >
            <TechnologList
               technologies={TechnologiesConstants}
               currentTechnologyType={currentTechnologyType}
            />
         </motion.div>

         <div className="flex items-center justify-center">
            <DownArrow navTo="#projects" />
         </div>
      </div>
   );
};

export default Technologies;
