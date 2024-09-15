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
         return technologiesConstants;

      case technologyType.learn:
         return technologiesConstants.filter(
            (item) => item.type == technologyType.learn
         );

      default:
         return technologiesConstants;
   }
};
