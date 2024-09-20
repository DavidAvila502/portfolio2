import { useState } from "react";
import codeIconWhite from "../assets/codeIconWithe.svg";
import codeIconBlue from "../assets/codeIconBlue.svg";
import blueHearth from "../assets/blueHeart.svg";
import whiteHeart from "../assets/whiteHeart.svg";
import { phrases } from "../config/constants/about_constants";
import { motion } from "framer-motion";
import { textTypingStagger, typing } from "../utils/variants";
import DownArrow from "../components/shared/DownArrow";

const About = () => {
   const [selecedSection, setSelectedSection] = useState<0 | 1>(0);

   return (
      <div id="about" className="min-h-[100vh] pt-[40px]">
         {/* Title */}
         <p className="text-white text-[40px] font-K2D text-center mt-[20px]">
            Sobre mí
         </p>

         {/* Seetion Buttons */}

         <div className="flex flex-row items-center justify-center gap-[40px] mt-[15px]">
            <div
               className="cursor-pointer"
               onMouseEnter={() => setSelectedSection(0)}
            >
               <img
                  src={selecedSection == 0 ? codeIconBlue : codeIconWhite}
                  alt="codeIon.svg"
                  className={`transition-all duration-300 ${
                     selecedSection == 0 ? "filter" : ""
                  }`}
                  style={{
                     filter:
                        selecedSection == 0
                           ? "drop-shadow( 0px 5px 15px rgba(35, 255, 107, 0.9)"
                           : "none",
                  }}
               />
            </div>

            <div
               className="cursor-pointer"
               onMouseEnter={() => setSelectedSection(1)}
            >
               <img
                  src={selecedSection == 1 ? blueHearth : whiteHeart}
                  alt="codeIon.svg"
                  className={`transition-all duration-300 ${
                     selecedSection == 1 ? "filter" : ""
                  }`}
                  style={{
                     filter:
                        selecedSection == 1
                           ? "drop-shadow( 0px 5px 15px rgba(35, 255, 107, 0.9)"
                           : "none",
                  }}
               />
            </div>
         </div>

         {/* Phrases */}
         <div className="flex items-center justify-center min-h-[60vh]">
            <motion.p
               key={selecedSection}
               initial={"hidden"}
               whileInView={"show"}
               variants={textTypingStagger}
               className="text-white text-[45px] text-center font-Roboto max-w-[70%]
               max-[880px]:max-w-[90%] max-[880px]:text-[35px] max-sm:text-[28px]
               max-[430px]:text-[22px]
               "
            >
               {phrases[selecedSection].split("").map((i, index) => (
                  <motion.span
                     key={index}
                     variants={typing}
                     className={`font-K2D ${
                        index == 0 ||
                        index == phrases[selecedSection].length - 1
                           ? "text-baseBlue text-[80px] max-[880px]:text-[45px]"
                           : ""
                     }`}
                  >
                     {i}
                  </motion.span>
               ))}
            </motion.p>
         </div>

         <div className="flex items-center justify-center">
            <DownArrow navTo="#skills" />
         </div>
      </div>
   );
};

export default About;
