import { technologyType } from "../../config/constants/technologies_constants";

interface TechnologyFilterProps {
   currentTechnologyType: technologyType;
   setCurrentTechnologyType: (param: technologyType) => void;
}

const TechnologyFilter = ({
   currentTechnologyType,
   setCurrentTechnologyType,
}: TechnologyFilterProps) => {
   return (
      <div className="flex items-center justify-center mt-[20px]">
         <div
            className="w-[40%] h-[70px] border-white border-[1px] rounded-full flex flex-row p-[1px]
            max-xl:w-[60%] max-md:w-[80%] max-[520px]:w-[95%]
            max-md:h-[50px]
            "
         >
            <div
               onMouseEnter={() =>
                  setCurrentTechnologyType(technologyType.main)
               }
               className={`flex flex-1 items-center justify-center h-[100%]
               rounded-l-full transition-all duration-300 cursor-pointer ${
                  currentTechnologyType == technologyType.main
                     ? "bg-baseBlue"
                     : ""
               }`}
            >
               <p
                  className="font-Roboto text-white text-[25px]
                  max-md:text-[20px] max-[380px]:text-[17px]
                  "
               >
                  Principal
               </p>
            </div>

            <div
               onMouseEnter={() =>
                  setCurrentTechnologyType(technologyType.secondary)
               }
               className={`flex flex-1 items-center justify-center h-[100%]
               transition-all duration-300 cursor-pointer ${
                  currentTechnologyType == technologyType.secondary
                     ? "bg-baseBlue"
                     : ""
               } `}
            >
               <p
                  className="font-Roboto text-white text-[25px]
                  max-md:text-[20px] max-[380px]:text-[17px]
                  "
               >
                  He usado
               </p>
            </div>

            <div
               onMouseEnter={() =>
                  setCurrentTechnologyType(technologyType.learn)
               }
               className={`flex flex-1 items-center justify-center h-[100%]
               rounded-r-full transition-all duration-300 cursor-pointer ${
                  currentTechnologyType == technologyType.learn
                     ? "bg-baseBlue"
                     : ""
               }`}
            >
               <p
                  className="font-Roboto text-white text-[25px]
                  max-md:text-[20px] max-[380px]:text-[17px]
                  "
               >
                  Me interesa
               </p>
            </div>
         </div>
      </div>
   );
};

export default TechnologyFilter;
