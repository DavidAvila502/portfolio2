import { motion } from "framer-motion";
import { verticalFloating } from "../../utils/variants";
import downArrowIcon from "../../assets/downArrow.svg";

interface DownArrowProps {
   navTo: string;
}

const DownArrow = ({ navTo }: DownArrowProps) => {
   return (
      <a href={navTo}>
         <motion.div
            variants={verticalFloating}
            initial={"initial"}
            whileInView={"show"}
            className="p-8 cursor-pointer"
         >
            <img src={downArrowIcon} alt="downArrow.svg" />
         </motion.div>
      </a>
   );
};

export default DownArrow;
