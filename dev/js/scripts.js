import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(CustomEase, DrawSVGPlugin, GSDevTools, MorphSVGPlugin, MotionPathHelper);


const mainTL = gsap.timeline({});


function drawW(){
    let tl = gsap.timeline();


    tl.from("#leading-tile", {duration:0.5, y:"-=700", alpha:0})
    .from("#w-draw_2", {duration:0.7, drawSVG:"0%"})
    ;

    return tl;
}



mainTL.add(drawW())





GSDevTools.create();