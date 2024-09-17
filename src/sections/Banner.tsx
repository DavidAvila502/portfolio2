import sendIcon from "../assets/send_icon.svg";
import SocialIcon from "../components/shared/SocialIcon";
import githubIcon from "../assets/github.svg";
import whatsappIcon from "../assets/whatsapp.svg";
import gmailIcon from "../assets/gmail.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import backgroundImage from "../assets/background2.jpg";
import {
   textTypingStagger,
   typing,
   verticalUpAppears,
} from "../utils/variants";
import DownArrow from "../components/shared/DownArrow";
import all_is_fine_image from "../assets/all_is_fine.png";

const Banner = () => {
   const [isContactButtonHovered, setIsContactButtonHovered] =
      useState<boolean>(false);

   return (
      <div className="min-h-[100vh] relative">
         <div
            className={`absolute inset-0 bg-cover bg-center opacity-[0.2]`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
         ></div>

         <motion.div
            id="Banner"
            initial={"hide"}
            whileInView={"show"}
            variants={verticalUpAppears}
            className="relative min-h-[100vh] my-0 mx-auto max-w-[1280px] flex flex-col items-center justify-center gap-[15px]"
         >
            {/* Image */}
            <div
               className="rounded-full w-[150px] h-[150px] bg-green-300 bg-cover bg-center
               border-[2px] border-white
               "
               style={{ backgroundImage: `url(${all_is_fine_image})` }}
            ></div>

            {/* NOMBRE */}
            <p className="text-white font-K2D text-[64px]">
               ¡Hola!, soy David{" "}
               <span className="text-baseGreen font-Roboto hover:">Avila</span>
            </p>

            {/* Descripción */}

            <motion.p
               initial={"hidden"}
               whileInView={"show"}
               variants={textTypingStagger}
               className="text-softGray font-Roboto text-[30px] text-center"
            >
               {Array.from(
                  "Desarrollador especializado en aplicaciones web y mobile"
               ).map((i, index) => (
                  <motion.span key={index} variants={typing}>
                     {i}
                  </motion.span>
               ))}

               <br />

               {Array.from("con React y Flutter").map((i, index) => (
                  <motion.span key={index} variants={typing}>
                     {i}
                  </motion.span>
               ))}
            </motion.p>

            {/* Buttons */}
            <div className=" flex flex-row gap-[80px] mt-[20px]">
               <a
                  href="#projects"
                  className="py-[8px] px-[30px] bg-baseBlue
                  rounded-[10px] cursor-pointer
                  hover:shadow-whiteShadow transition-all inline-block"
               >
                  <p className="text-white text-[22px]">Proyectos</p>
               </a>

               <motion.a
                  href="#contact"
                  onMouseEnter={() => setIsContactButtonHovered(true)}
                  className="py-[8px] px-[30px] rounded-[10px] cursor-pointer 
                        flex flex-row gap-[12px] items-center justify-center"
               >
                  <p className="text-white text-[22px]">Contacto</p>
                  <motion.img
                     key={isContactButtonHovered ? "hovered" : "not-hovered"} //
                     src={sendIcon}
                     alt="contact icon"
                     animate={
                        isContactButtonHovered ? { rotate: 360 * 2 } : false
                     }
                     transition={{ duration: 1 }}
                     onAnimationComplete={() =>
                        setIsContactButtonHovered(false)
                     }
                  />
               </motion.a>
            </div>

            {/* Social buttons */}
            <div className="flex flex-row gap-[20px] mt-[40px]">
               <SocialIcon icon={githubIcon} alt="github.svg" />
               <SocialIcon icon={whatsappIcon} alt="whatsapp.svg" />
               <SocialIcon icon={gmailIcon} alt="gmail.svg" />
            </div>

            <DownArrow navTo="#about" />
         </motion.div>
      </div>
   );
};

export default Banner;
