import { gsap } from "gsap";

// gsap.set(".moon-things",{display: "block"});

export let moonBackTL = gsap.timeline();

moonBackTL.to("#moon", {duration: 1, x: 500, y: 500, ease: "back"})
        .to("#moon", {duration: 1, rotation: -360}, "+=.5")
        .to("#moon", {duration: .5, scale: 3}, "-=.75")
        .from(".moon-things", {duration: .5, alpha: 0}, "-=.75")
        .to("#moon", {duration: .5, scale: 25, ease: "power4. out"})
        .to("#moon", {duration: .25, scale: 1, x: 50, y: 50})
        .to("#moon", {duration: .25, scale: 2, x: 1000, y: 300})