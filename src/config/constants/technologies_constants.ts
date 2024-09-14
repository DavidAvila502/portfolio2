import reactIcon from "../../assets/react.svg";
import flutterIcon from "../../assets/flutter.svg";
import expressIcon from "../../assets/express.svg";

export enum technologyType {
   main,
   secondary,
   learn,
}

export interface ITechnology {
   title: string;
   description: string;
   icon: string;
   type?: technologyType;
}

export const TechnologiesConstants: Array<ITechnology> = [
   {
      title: "React",
      description: "Biblioteca para crear interfaces web",
      icon: reactIcon,
      type: technologyType.main,
   },
   {
      title: "Express js",
      description: "Framework back-end",
      icon: expressIcon,
      type: technologyType.main,
   },
   {
      title: "Flutter",
      description: "Framework para desarrollar aplicaciones moviles",
      icon: flutterIcon,
      type: technologyType.main,
   },
];
