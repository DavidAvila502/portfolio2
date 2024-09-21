// import mailImage from "../assets/mail.svg";
import pugImage from "../assets/pug.png";
import { motion } from "framer-motion";
import { appearsVariants, leftToRightVariants } from "../utils/variants";
import SocialIcon from "../components/shared/SocialIcon";
import githubIcon from "../assets/github.svg";
import whatsappIcon from "../assets/whatsapp.svg";
import gamiIcon from "../assets/gmail.svg";

const Contact = () => {
   return (
      <div id="contact" className="bg-[#24272E] min-h-[100vh] pt-[40px]">
         <p className="text-white text-center font-K2D text-[40px]">Contacto</p>

         <div
            className="mt-[20px] grid grid-cols-2 min-h-[70vh]
               max-md:grid-cols-1"
         >
            {/* Formulario */}
            <div className="flex items-center justify-center">
               <motion.form
                  variants={leftToRightVariants}
                  initial={"hidden"}
                  whileInView={"show"}
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  className="bg-[#1B1D21] h-[700px] w-[70%] rounded-[20px] flex flex-col justify-center items-center gap-[25px]
                  border border-strokeGray
                  max-lg:h-[600px] 
                  max-[1500px]:w-[80%] max-lg:w-[90%]
                  "
               >
                  <input type="hidden" name="form-name" value="contact" />

                  <p className="hidden">
                     <label>
                        Don’t fill this out if you’re human:{" "}
                        <input name="bot-field" />
                     </label>
                  </p>

                  <p className="text-white text-center font-K2D text-[30px]">
                     ¡Escribeme!
                  </p>

                  <input
                     type="text"
                     name="name"
                     placeholder="Nombre:"
                     className="w-[70%] rounded-[20px] text-[20px] p-[20px]
                     border-[2px] border-gray-300 focus:border-baseBlue outline-none
                     max-lg:w-[80%]
                     max-lg:text-[15px]
                     max-lg:p-[15px]
                     max-lg:rounded-[15px]   
                     "
                  />
                  <input
                     type="email"
                     name="email"
                     placeholder="Correo:"
                     className="w-[70%] rounded-[20px] text-[20px] p-[20px] mb-[20px]
                     border-[2px] border-gray-300 focus:border-baseBlue outline-none
                     max-lg:w-[80%]
                     max-lg:text-[15px]
                     max-lg:p-[15px]
                     max-lg:rounded-[15px]
                     "
                  />

                  <textarea
                     placeholder="Mensaje:"
                     name="message"
                     className="w-[70%] rounded-[20px] text-[20px] p-[20px]
                     border-[2px] border-gray-300 focus:border-baseBlue outline-none
                     max-lg:w-[80%]
                     max-lg:text-[15px]
                     max-lg:p-[15px]
                     max-lg:rounded-[15px]
                     "
                  />

                  <input
                     type="submit"
                     value={"Enviar"}
                     className="bg-baseBlue text-[25px] text-white font-K2D rounded-[20px] w-[200px] py-[8px] cursor-pointer
                     max-lg:text-[18px]
                     max-lg:w-[120px]
                     max-lg:rounded-[15px]
                     "
                  />

                  <div className="mt-[10px] flex items-center justify-center gap-[15px]">
                     <SocialIcon alt="github.svg" icon={githubIcon} />
                     <SocialIcon alt="whatsapp.svg" icon={whatsappIcon} />
                     <SocialIcon alt="gmail.svg" icon={gamiIcon} />
                  </div>
               </motion.form>
            </div>

            {/* Imagen */}
            <div className="flex items-center justify-center">
               <motion.img
                  className="h-[700px]
                  max-lg:h-[500px] max-sm:h-[300px]
                "
                  variants={appearsVariants}
                  initial={"hidden"}
                  whileInView={"show"}
                  src={pugImage}
                  alt="mail.svg"
               />
            </div>
         </div>
      </div>
   );
};

export default Contact;
