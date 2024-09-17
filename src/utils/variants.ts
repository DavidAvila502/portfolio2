import { Variants } from "framer-motion";

export const verticalUpAppears: Variants = {
   show: { y: 0, opacity: 1, transition: { type: "spring", duration: 1 } },
   hide: { y: 100, opacity: 0 },
};

export const textTypingStagger: Variants = {
   hidden: {
      opacity: 0,
   },
   show: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: i * 0.01 },
   }),
};

export const typing: Variants = {
   hidden: {
      opacity: 0,
      y: 20,
   },
   show: {
      opacity: 1,
      y: 0,
      transition: {
         type: "tween",
         ease: "easeIn",
      },
   },
};

export const verticalFloating: Variants = {
   initial: { y: -50 },
   show: { y: 0 },
};

export const StaggerChild: Variants = {
   hide: {
      opacity: 0,
   },
   show: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: i * 0.3, delayChildren: i * 0.2 },
   }),
};

export const StaggerVerticalUpAppears: Variants = {
   hide: { y: 200, opacity: 0 },
   show: {
      y: 0,
      opacity: 1,
      transition: {
         type: "spring",
         duration: 0.1,
         opacity: { duration: 0.1 },
      },
   },
};

export const technologyIconVariant: Variants = {
   hidden: {
      opacity: 0,
      y: 20,
      scale: 0,
   },
   show: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 360,
      transition: {
         type: "tween",
         ease: "easeIn",
         duration: 0.5,
      },
   },
};

export const technologyTitleVariant: Variants = {
   hidden: {
      opacity: 0,
   },
   show: {
      opacity: 1,
      transition: { type: "tween", ease: "easeIn", duration: 0.5 },
   },
};

export const technologyListStagger: Variants = {
   hidden: {
      opacity: 0,
   },
   show: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
   }),
};

export const scaleVariants: Variants = {
   hidden: {
      scale: 0,
   },
   show: {
      scale: 1,
      transition: {
         type: "spring",
         stiffness: 260,
         damping: 20,
      },
   },
};

export const leftToRightVariants: Variants = {
   hidden: {
      x: -80,
      opacity: 0,
   },
   show: {
      x: 0,
      opacity: 1,

      transition: {
         type: "spring",
         duration: 1,
      },
   },
};

export const appearsVariants: Variants = {
   hidden: {
      opacity: 0,
   },

   show: { opacity: 1, transition: { duration: 1.2 } },
};
