import villamarRewardsIcon from "../../assets/villamar-rewards-logo.svg";
import villamarScreenshot1 from "../../assets/villamar-reward-screensho1.png";
import PalmPlayerIcon from "../../assets/palm_player_dark_logo.png";
import palmPlayerScreenshot1 from "../../assets/palm_player_screensho1.png";

export interface Iproject {
   icon: string;
   title: string;
   description: string;
   screenShots: Array<string>;
   color1: string;
   color2: string;
}

export const projectConstants: Array<Iproject> = [
   {
      icon: villamarRewardsIcon,
      title: "Villamar Rewards",
      description:
         "Proyecto full-stack , sistema de fidelizacion de huespedes para el hotel Villamar Princesa.",
      screenShots: [villamarScreenshot1],
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

   // ******************

   // {
   //    icon: villamarRewardsIcon,
   //    title: "Villamar Rewards",
   //    description:
   //       "Proyecto full-stack , sistema de fidelizacion de huespedes para el hotel Villamar Princesa.",
   //    screenShots: [villamarScreenshot1],
   //    color1: "#194FE8",
   //    color2: "#5219E8",
   // },
   // {
   //    icon: PalmPlayerIcon,
   //    title: "Palm Player",
   //    description:
   //       "Reproductor de música para dispositivos android / ios , desarrollado en flutter.",
   //    screenShots: [palmPlayerScreenshot1],
   //    color1: "#0e6046",
   //    color2: "#36a1b2",
   // },
];
