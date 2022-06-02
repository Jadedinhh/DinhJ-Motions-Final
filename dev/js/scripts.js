import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, CustomEase, DrawSVGPlugin, GSDevTools, MorphSVGPlugin, MotionPathHelper);


const mainTL = gsap.timeline({});


function drawW(){
    let tl = gsap.timeline();


    tl.from("#leading-tile", {duration:0.5, y:"-=700", alpha:0})
    .from("#w-draw_2", {duration:0.7, drawSVG:"0%"})
    .to("#leading-tile-2", {duratiob:0.5, alpha:1, motionPath:{
        path:"#w-to-s",
        align:"#w-to-s",
        autoRotate: 90,
        alignOrigin:[0.5, 0.5]
    } })
    .to("#leading-tile", {duration:0, alpha:0})
    .to("#leading-tile-2", {duration:0, alpha:0})
    .from("#s-draw_2", {duration:0.7, drawSVG:"0%"})
    .to("#leading-tile-3", {duratiob:0.5, alpha:1, motionPath:{
        path:"#from-s",
        align:"#from-s",
        autoRotate: true,
        alignOrigin:[0.5, 0.5]
    } })

    ;

    return tl;
}

function middlePhase(){
    let tl = gsap.timeline();

    tl.to("#leading-tile-3", {duration: 0.5, y:"-=300",  ease:"power1.out"}, "run")
       .to("#w-draw_2", {duration: 0.5, x:"-=50",  ease:"power1.out"}, "run")
       .to("#s-draw_2", {duration: 0.5, x:"+=50",  ease:"power1.out"}, "run")
       .to("#leading-tile-3", {duration:0.5, rotation:251})
       .to("#leading-tile-3", {duration:0.5, y:"40", ease:"Bounce.easeOut"},"-=0.1")
       .to("#w-draw_2", {duration: 0.5, x:"-=193",  ease:"power1.out"}, "-=0.1")
       .to("#s-draw_2", {duration: 0.5, x:"+=193",  ease:"power1.out"}, "-=0.1");

    return tl;

}

mainTL.add(drawW())
.add(middlePhase())
;





// MotionPathHelper.create("#leading-tile-3");
GSDevTools.create();