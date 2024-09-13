import { navbaConstats } from "../../config/constants/navbar_constants";

const Navbar = () => {
   return (
      <nav className="p-5 border-strokeGray border-b-[0.1px]">
         <ul className="flex flex-row gap-5 ml-[5%]">
            {navbaConstats.map((element, index) => (
               <li key={index}>
                  {" "}
                  <a
                     href="#"
                     className="text-white font-Roboto hover:text-gray-400 hover:scale-[0.95] transition-all inline-block"
                  >
                     {" "}
                     {element}
                  </a>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default Navbar;
