import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(CustomEase, DrawSVGPlugin, GSDevTools, MorphSVGPlugin, MotionPathHelper);


const mainTL = gsap.timeline({});