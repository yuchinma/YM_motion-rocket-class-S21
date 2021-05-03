import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

// gsap.set(".moon-things",{display: "block"});

export let moonBackTL = gsap.timeline();

moonBackTL.to("#moon", {duration: 1, x: 500, y: 500, ease: "back"})
        .to("#moon", {duration: 1, rotation: -360}, "+=.5")
        .to("#moon", {duration: .5, scale: 3}, "-=.75")
        .from(".moon-things", {duration: .5, alpha: 0}, "-=.75")
        .to("#moon", {duration: .5, scale: 25, x: "-=100", y: "+=460", ease: "power4.out"})
        .to("#moon", {duration: .3, scale: 1, x: 50, y: 50}, "+=.1")
        .to("#moon", {duration: .3, scale: 2, x: 800, y: 300}, "+=.5")
        .to("#moon", {duration: .3, scale: 3, x: 150, y: 780}, "+=.25")
        .to("#moon", {duration: 1, motionPath: {path: "#moonOut", align:"#moonOut", alignOrigin: [0.5, 0.5], autoRotate: 45}, ease: "none", scale: 0}, "+=.5")
        .to("#moon", {duration: 1, motionPath: {path: "#moonIn", align:"#moonIn", alignOrigin: [0.5, 0.5], autoRotate: 0}, ease: "none", scale: 2.5}, "+=1")
        .to("#moon", {duration: .08, scale: 3})
        .to("#moon", {duration: .08, scale: 2.5})