import villamarRewardsMainScreensht from "../../assets/villamar_rewards_full_screenshot.jpeg";
import villamarRewardsIcon from "../../assets/villamar-rewards-logo.svg";
import villamarScreenshot1 from "../../assets/villamar_rewards_1.jpeg";
import villamarScreenshot2 from "../../assets/villamar_rewards_2.jpeg";
import villamarScreenshot3 from "../../assets/villamar_rewards_3.jpeg";
import villamarScreenshot4 from "../../assets/villamar_rewards_4.jpeg";
import PalmPlayerIcon from "../../assets/palm_player_dark_logo.png";
import palmPlayerMainScreenshoot from "../../assets/palm_player_full_screenshot.png";
import palmPlayerScreenshot1 from "../../assets/palm_player_1.jpeg";
import palmPlayerScreenshot2 from "../../assets/palm_player_2.jpeg";
import palmPlayerScreenshot3 from "../../assets/palm_player_3.jpeg";
import palmPlayerScreenshot4 from "../../assets/palm_player_4.jpeg";
import palmPlayerScreenshot5 from "../../assets/palm_player_5.jpeg";

export interface Iproject {
   icon: string;
   title: string;
   description: string;
   mainScreenshot?: string;
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
      mainScreenshot: villamarRewardsMainScreensht,
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
      siteUrl: "https://sistemafidelizacion-production.up.railway.app/",
      color1: "#194FE8",
      color2: "#5219E8",
   },
   {
      icon: PalmPlayerIcon,
      title: "Palm Player",
      description:
         "Reproductor de música para dispositivos android / ios , desarrollado en flutter.",
      mainScreenshot: palmPlayerMainScreenshoot,
      screenShots: [
         palmPlayerScreenshot1,
         palmPlayerScreenshot2,
         palmPlayerScreenshot3,
         palmPlayerScreenshot4,
         palmPlayerScreenshot5,
      ],
      repositoryUrl: "https://github.com/DavidAvila502/palm_player",
      technologyList: ["flutter"],
      stateManagment: "Bloc",
      architecture: "Clean architecture + Bloc pattern",
      features: [
         "Reproducción de audio en segundo plano",
         "Listado de canciones",
         "Búsqueda de canciones",
         "Controles principales de reproducción",
         "Uso de los metadatos en archivos de audio",
         "Listado de álbumes",
         "Reproducción del álbum",
      ],
      color1: "#0e6046",
      color2: "#36a1b2",
   },
];
