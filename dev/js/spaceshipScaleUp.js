import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

export let spaceshipScaleUpTL = gsap.timeline();

spaceshipScaleUpTL.to("#space-ship",{duration:0.15, rotation: "-=5",ease:"none"})
        .to("#space-ship",{duration:0.15, rotation: "-=5", yoyo:true, repeat:5,ease:"none"})
        .to("#space-ship", {duration: 1, scale: 20, x: "-=250", y: "+=400", ease: "bounce"})
        .to("#window", {duration: .75, rotation: -360})
        .to("#space-ship", {duration: .75, scale: 1, x: "+=160", y: "-=430"}, "scaleDown")
        .to("#space-ship", {duration: 5, motionPath: {path: "#flyoutPath", align:"#flyoutPath", alignOrigin: [0.5, 0.5], autoRotate: 90}, ease: "none", scale: 1}, "flyout")
       
        .to("#moon", {duration: .75, scale: .5, x: 550, y: 600}, "scaleDown")
        .to("#moon", {duration: 5, motionPath: {path: "#flyoutPath", align:"#flyoutPath", alignOrigin: [0.5, 0.5], autoRotate: 90}, ease: "none", scale: 1}, "flyout")