interface SocialIconProps {
   icon: string;
   alt: string;
   url?: string;
}

const SocialIcon = ({ icon, alt, url }: SocialIconProps) => {
   return url != undefined ? (
      <a
         target={`_blank`}
         href={url}
         className="p-[10px] bg-[#1B1D21] border-strokeGray border-[1px] rounded-full cursor-pointer 
         hover:shadow-grenShadow transition-all inline-block"
      >
         <img src={icon} alt={alt} />
      </a>
   ) : (
      <a
         className="p-[10px] bg-[#1B1D21] border-strokeGray border-[1px] rounded-full cursor-pointer 
      hover:shadow-grenShadow transition-all inline-block"
      >
         <img src={icon} alt={alt} />
      </a>
   );
};

export default SocialIcon;
