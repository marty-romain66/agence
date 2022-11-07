import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function animBoxTech() {
  gsap.fromTo(
    ".boxCont",
    {
      opacity: 0,
      x: "-100%",
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        scrub: 1,
       
        trigger: ".boxEnd",
        start: "top 50%",
        end: "top 30% ",
      },
    }
  );
  gsap.fromTo(
    ".boxCont2",
    {
        opacity: 0,
        x: "100%",
        },
        {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
            scrub: 1,
  
            trigger: ".boxEnd",
            start: "top 50%",
            end: "top 30% ",
        },
    })
}
