import villamarRewardsIcon from "../../assets/villamar-rewards-logo.svg";
import villamarScreenshot1 from "../../assets/villamar_rewards_1.jpeg";
import villamarScreenshot2 from "../../assets/villamar_rewards_2.jpeg";
import villamarScreenshot3 from "../../assets/villamar_rewards_3.jpeg";
import villamarScreenshot4 from "../../assets/villamar_rewards_4.jpeg";
import PalmPlayerIcon from "../../assets/palm_player_dark_logo.png";
import palmPlayerScreenshot1 from "../../assets/palm_player_1.png";

export interface Iproject {
   icon: string;
   title: string;
   description: string;
   screenShots: Array<string>;
   technologyList?: Array<string>;
   stateManagment?: string;
   features?: Array<string>;
   siteUrl?: string;
   repositoryUrl?: string;
   architecture?: string;
   color1: string;
   color2: string;
}

export const projectConstants: Array<Iproject> = [
   {
      icon: villamarRewardsIcon,
      title: "Villamar Rewards",
      description:
         "Proyecto full-stack , sistema de fidelizacion de huespedes para el hotel Villamar Princesa.",
      screenShots: [
         villamarScreenshot1,
         villamarScreenshot2,
         villamarScreenshot3,
         villamarScreenshot4,
      ],
      technologyList: ["React", "Strapi", "Typescript", "Javascript"],
      stateManagment: "React context + redux toolkit",
      architecture: "Personalizada",
      features: [
         "Login",
         "Consumo de API-Rest",
         "Registro de usuario",
         "Modificación de los datos del usuario",
         "Restablecer contraseña",
         "Acceso a promociones",
         "Generacíon de tarjeta digital",
         "Gestion de contenido en la plataforma mediante strapi",
      ],
      color1: "#194FE8",
      color2: "#5219E8",
   },
   {
      icon: PalmPlayerIcon,
      title: "Palm Player",
      description:
         "Reproductor de música para dispositivos android / ios , desarrollado en flutter.",
      screenShots: [palmPlayerScreenshot1],
      color1: "#0e6046",
      color2: "#36a1b2",
   },
];
