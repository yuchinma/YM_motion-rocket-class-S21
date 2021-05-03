import { gsap } from "gsap";

// gsap.set(".moon-things",{display: "block"});

export let moonBackTL = gsap.timeline();

moonBackTL.to("#moon", {duration: 1, x: 500, y: 500, ease: "back"})
        .to("#moon", {duration: 1.5, rotation: -360}, "+=.5")
        .to("#moon", {duration: .5, scale: 3}, "-=.75")