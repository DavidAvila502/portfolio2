interface socialIconProps {
   icon: string;
   alt: string;
}

const SocialIcon = ({ icon, alt }: socialIconProps) => {
   return (
      <div
         className="p-[10px] bg-[#1B1D21] border-strokeGray border-[1px] rounded-full cursor-pointer 
      hover:shadow-grenShadow transition-all inline-block"
      >
         <img src={icon} alt={alt} />
      </div>
   );
};

export default SocialIcon;
