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
      useState<technologyType>(technologyType.secondary);

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
            className="flex mt-[60px] flex-row gap-[100px] flex-wrap justify-center items-center 
            w-[60%] mx-auto min-h-[70vh]
            max-sm:w-[100%]
            max-sm:gap-[30px]
             "
         >
            <TechnologList
               technologies={TechnologiesConstants}
               filterByType={true}
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
