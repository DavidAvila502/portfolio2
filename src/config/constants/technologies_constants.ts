import reactIcon from "../../assets/react.svg";
import flutterIcon from "../../assets/flutter.svg";
import expressIcon from "../../assets/express.svg";
import javascriptIcon from "../../assets/javascript.svg";
import typescriptIcon from "../../assets/typescript.svg";
import htmlIcon from "../../assets/html.svg";
import cssIcon from "../../assets/css.svg";
import gitIcon from "../../assets/git.svg";
import strapiIcon from "../../assets/strapi-logo.png";
import pythonIcon from "../../assets/pytnon.svg";
import flaskIcon from "../../assets/Flask.svg";

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
      description: "Framework para desarrollar aplicaciones móviles",
      icon: flutterIcon,
      type: technologyType.main,
   },
   {
      title: "Git",
      description: "Control de versiones",
      icon: gitIcon,
      type: technologyType.secondary,
   },
   {
      title: "Javascript",
      description: "Lenguaje de programación para la web",
      icon: javascriptIcon,
      type: technologyType.secondary,
   },

   {
      title: "Css",
      description: "Lenguaje de estilos en cascada",
      icon: cssIcon,
      type: technologyType.secondary,
   },

   {
      title: "Typescript",
      description: "Superconjunto de javascript",
      icon: typescriptIcon,
      type: technologyType.secondary,
   },

   {
      title: "Html",
      description: "Lenguaje de marcado",
      icon: htmlIcon,
      type: technologyType.secondary,
   },

   {
      title: "Python",
      description: "Lenguaje de programación interpretado de alto nivel",
      icon: pythonIcon,
      type: technologyType.secondary,
   },

   {
      title: "Flask",
      description: "Micro-Framework back-end para python",
      icon: flaskIcon,
      type: technologyType.secondary,
   },
   {
      title: "Strapi",
      description: "CMS back-end para node js",
      icon: strapiIcon,
      type: technologyType.secondary,
   },
];
