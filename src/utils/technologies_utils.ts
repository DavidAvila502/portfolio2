import {
   ITechnology,
   technologyType,
} from "../config/constants/technologies_constants";

export const getTechnologyByType = (
   technologiesConstants: Array<ITechnology>,
   currentTechnologyType: technologyType
): Array<ITechnology> => {
   switch (currentTechnologyType) {
      case technologyType.main:
         return technologiesConstants.filter(
            (item) => item.type == technologyType.main
         );

      case technologyType.secondary:
         return technologiesConstants.filter(
            (item)=> item.type == technologyType.main || item.type == technologyType.secondary);

      case technologyType.learn:
         return technologiesConstants.filter(
            (item) => item.type == technologyType.learn
         );

      default:
         return technologiesConstants;
   }
};

export const getTechnologiesByName = (
   technologiesConstants: Array<ITechnology>,
   technologyNames: Array<string>
) => {
   let technologiesFound: Array<ITechnology> = [];

   technologyNames.forEach((currentTechnologyName) => {
      const technologyFound = technologiesConstants.find(
         (currentTechnology) =>
            currentTechnologyName.toLocaleLowerCase() ==
            currentTechnology.title.toLowerCase()
      );

      technologyFound != undefined
         ? technologiesFound.push(technologyFound!)
         : "";
   });

   return technologiesFound;
};
