import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function animBoxServices () {
    gsap.fromTo(".card",{
        opacity: 0
    },{
        opacity: 1,
        duration: 1,
        stagger: 0.5
        

    })
}