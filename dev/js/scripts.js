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



mainTL.add(drawW());





// MotionPathHelper.create("#from-s");
GSDevTools.create();