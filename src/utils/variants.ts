import { Variants } from "framer-motion";

export const verticalUpAppears:Variants = {
    show: { y: 0, opacity: 1 ,transition:{type: "spring", duration: 1 }},
    hide: { y: 100, opacity: 0 },
    
}

export const textTypingStagger = {
    hidden: {
       opacity: 0,
    },
    show: (i = 1) => ({
       opacity: 1,
       transition: { staggerChildren: 0.03, delayChildren: i * 0.01 },
    }),
 };

export const typing = {
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
 

 export const verticalFloating ={
   initial:{y:-50},
   show:{y:0}
 }