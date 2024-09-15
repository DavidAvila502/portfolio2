import { useState } from "react";

import { getTechnologyByType } from "../../utils/technologies_utils";

interface TechnologyListProps {
   technologies: Array<ITechnology>;
   currentTechnologyType: technologyType;
}
import { motion } from "framer-motion";
import {
   technologyIconVariant,
   technologyTitleVariant,
   verticalUpAppears,
} from "../../utils/variants";
import {
   ITechnology,
   technologyType,
} from "../../config/constants/technologies_constants";

const TechnologList = ({
   technologies,
   currentTechnologyType,
}: TechnologyListProps) => {
   const [isTechnologyHovered, setIsTechnologyHovered] =
      useState<boolean>(false);

   const [currentTechnologySelected, setCurrentTechnologySelected] =
      useState(0);
   return getTechnologyByType(technologies, currentTechnologyType).map(
      (item, index) => (
         <div
            key={index}
            onMouseEnter={() => {
               setIsTechnologyHovered(true);
               setCurrentTechnologySelected(index);
            }}
            onMouseLeave={() => setIsTechnologyHovered(false)}
            className="relative flex items-center justify-center flex-col cursor-pointer"
         >
            {/* ICON */}
            <motion.div variants={technologyIconVariant}>
               <img
                  className="h-[120px]"
                  src={item.icon}
                  alt={`technology${index + 1}.svg`}
               />
            </motion.div>

            {/* TECHNOLOGY NAME */}
            <motion.div
               variants={technologyTitleVariant}
               className="text-white text-[40px] mt-[20px]"
            >
               <p
                  className={`transition-all duration-300 ${
                     currentTechnologySelected == index && isTechnologyHovered
                        ? "filter"
                        : ""
                  }`}
                  style={{
                     filter:
                        currentTechnologySelected == index &&
                        isTechnologyHovered
                           ? "drop-shadow( 0px 5px 15px rgba(35, 255, 107, 0.9)"
                           : "none",
                  }}
               >
                  {item.title}
               </p>
            </motion.div>

            {/* DESCRIPTION */}

            {isTechnologyHovered && currentTechnologySelected == index ? (
               <motion.div
                  variants={verticalUpAppears}
                  initial={"hide"}
                  whileInView={"show"}
                  className="absolute top-[-80px] bg-baseBlue p-[10px] w-[300px] rounded-[20px]"
               >
                  <p className="text-white text-[20px] font-K2D text-center">
                     {" "}
                     {item.description}
                  </p>

                  <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-baseBlue"></div>
               </motion.div>
            ) : (
               <></>
            )}
         </div>
      )
   );
};

export default TechnologList;
