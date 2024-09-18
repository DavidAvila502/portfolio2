// import mailImage from "../assets/mail.svg";
import pugImage from "../assets/pug.png";
import { motion } from "framer-motion";
import { appearsVariants, leftToRightVariants } from "../utils/variants";
const Contact = () => {
   return (
      <div id="contact" className="bg-[#24272E] min-h-[100vh] pt-[40px]">
         <p className="text-white text-center font-K2D text-[40px]">Contacto</p>

         <div className="mt-[20px] grid grid-cols-2 min-h-[70vh]">
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
                  className="bg-[#1B1D21] h-[700px] w-[650px] rounded-[20px] flex flex-col justify-center items-center gap-[25px]
               border border-strokeGray
               "
               >
                  <input type="hidden" name="form-name" value="contact" />

                  <p hidden>
                     <label>
                        No llenar este campo: <input name="bot-field" />
                     </label>
                  </p>

                  <p className="text-white text-center font-K2D text-[30px]">
                     ¡Escribeme!
                  </p>

                  <input
                     type="text"
                     placeholder="Nombre:"
                     className="w-[70%] rounded-[20px] text-[20px] p-[20px]
                     border-[2px] border-gray-300 focus:border-baseBlue outline-none 
                     "
                  />
                  <input
                     type="email"
                     placeholder="Correo:"
                     className="w-[70%] rounded-[20px] text-[20px] p-[20px] mb-[20px]
                     border-[2px] border-gray-300 focus:border-baseBlue outline-none"
                  />

                  <textarea
                     placeholder="Mensaje:"
                     className="w-[70%] rounded-[20px] text-[20px] p-[20px]
                     border-[2px] border-gray-300 focus:border-baseBlue outline-none "
                  />

                  <input
                     type="submit"
                     value={"Enviar"}
                     className="bg-baseBlue text-[25px] text-white font-K2D rounded-[20px] w-[200px] py-[8px] cursor-pointer"
                  />
               </motion.form>
            </div>

            {/* Imagen */}
            <div className="flex items-center justify-center">
               <motion.img
                  className="h-[700px]"
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
