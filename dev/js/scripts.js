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
       .to("#w-draw_2", {duration: 0.3, x:"-=193",  ease:"power1.out"}, "go")
       .to("#s-draw_2", {duration: 0.3, x:"+=193",  ease:"power1.out"}, "go")
       .to(".first-half", {duration: 0.3, alpha:1}, "go");

    return tl;

}

function thirdPhase(){
    let tl = gsap.timeline();
    tl.to("#leading-tile-3", {duration:0.2, y:"-=10"})
    .to("#leading-tile-3", {duration:0.3,  rotation:160}, "start")
    .to("#s-draw_2", {duration:0.3, x:"-=214"}, "start" )
    .to(".second-half", {duration: 0.3, alpha:1}, "start");

  return tl;

}




function lastPhase(){
    let tl = gsap.timeline();
    tl.from("#ball-1", {duration:0.5, y:"-=700", opacity:0})
    .to("#ball-1", {duration:0.2, y:"+=10"})
    .to("#leading-tile-3", {duration:0.3,  rotation:154, fill:"#F7B0BE"})
    .to("#ball-1", {duration:0.5, y:"-=300"})
    .to("#ball-1", {duration:0.5, motionPath:{
        path:"#ball-path1",
        align:"#ball-path1",
        autoRotate: true,
        alignOrigin:[0.5, 0.5]
    }}, "i")
    .to("#ball-2", {duration:0.5, alpha:1, motionPath:{
        path:"#ball-path2",
        align:"#ball-path2",
        autoRotate: true,
        alignOrigin:[0.5, 0.5]
    }}, "i")
    .to(".first-half, .second-half", {duration:0.5, fill:"#F7B0BE" });

    return tl;

}

mainTL.add(drawW())
.add(middlePhase())
.add(thirdPhase())
.add(lastPhase())
;





// MotionPathHelper.create("#leading-tile-3");
GSDevTools.create();