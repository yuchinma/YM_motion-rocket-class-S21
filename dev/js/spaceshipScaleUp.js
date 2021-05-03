import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import {flamesTL} from "./liftOff"

gsap.registerPlugin(MotionPathPlugin);

export let spaceshipScaleUpTL = gsap.timeline();

spaceshipScaleUpTL.to("#space-ship",{duration:0.15, rotation: "-=5",ease:"none"})
        .to("#space-ship",{duration:0.15, rotation: "-=5", yoyo:true, repeat:5,ease:"none"})
        .to("#space-ship", {duration: 1, scale: 20, x: "-=450", y: "+=700", ease: "bounce"})
        .to("#window", {duration: .75, rotation: -360})
        .to("#space-ship", {duration: .75, scale: 1, x: "+=380", y: "-=660", onComplete:startFlames}, "scaleDown")
        .to("#space-ship", {duration: 8, motionPath: {path: "#flyoutPath", align:"#flyoutPath", alignOrigin: [0.5, 0.5], autoRotate: 90}, ease: "power2.in", scale: 1}, "flyout")
       
        .to("#moon", {duration: .75, scale: .5, x: 610, y: 650}, "scaleDown")
        .to("#moon", {duration: 8, motionPath: {path: "#flyoutPath", align:"#flyoutPath", alignOrigin: [0.5, 0.5], autoRotate: 90}, ease: "power2.in", scale: 1}, "flyout")


        function startFlames(){
            console.log("flames");
            gsap.set("#left-blue",{scaleY:1})
            gsap.set("#left-dark-blue",{scaleY:1})
            gsap.set("#right-blue",{scaleY:1})
            gsap.set("#right-dark-blue",{scaleY:1})
            flamesTL.play();
        }