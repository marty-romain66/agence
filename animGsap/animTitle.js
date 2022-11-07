import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function animBoxTitle () {

gsap.fromTo("#gsap",{
    opacity: 0,
    y: 100
},{
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.1

})
}