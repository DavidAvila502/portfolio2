interface LinkButtonProps {
   text: string;
   backgroundColor?: string;
   active: boolean;
   url?: string;
   textStyle?: string;
   icon?: string;
   iconStyles?: string;
   infoText?: string;
   buttonStyles?: string;
}

const LinkButton = ({
   text,
   backgroundColor,
   textStyle,
   icon,
   iconStyles,
   active,
   url,
   infoText,
   buttonStyles,
}: LinkButtonProps) => {
   return (
      <a
         target={`${url ? "_blank" : ""}`}
         href={active == true && url != undefined ? url : undefined}
         className={`${
            active === true ? backgroundColor ?? "bg-baseBlue" : "bg-gray-400"
         }
         ${textStyle ?? "font-K2D text-[20px] text-white"}
         ${infoText != undefined ? "group" : ""}
         ${buttonStyles ?? ""}

         relative cursor-pointer rounded-[20px] px-[20px] py-[10px]
         flex flex-row items-center justify-center gap-2`}
      >
         {icon != undefined ? (
            <img src={icon} alt={icon} className={`${iconStyles ?? ""}`} />
         ) : (
            ""
         )}

         {text}

         {/* info text */}
         <div
            className="absolute hidden left-[1/2] top-[-80px] p-2 w-[300px] rounded-[20px]
                              bg-yellow-600  opacity-0
                              group-hover:opacity-100 transition-opacity duration-300
                              group-hover:flex items-center justify-center z-[10]"
         >
            <p className="font-K2D text-white text-center text-[18px]">
               {infoText}
            </p>

            <div
               className="absolute bottom-[-10px] left-1/2 transform 
                              -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8
                              border-transparent border-t-yellow-600"
            ></div>
         </div>
      </a>
   );
};

export default LinkButton;
