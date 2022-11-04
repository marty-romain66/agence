import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { gsap } from "gsap";
import { useEffect, useState } from "react";


export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#gsap",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "power4.out",
        stagger: 0.07,
      }
    );
    tl.to('img',{
      scale:1.1,
      duration:1,
      ease:'bounce.out'
    })
  }, []);

  return (
    <>
      <Head>
        <title>Romain Marty</title>
        <meta name='keywords' content='Romain Marty, Développeur Web, Perpignan, angece web, seo, seo perpignan, création site internet perpignan' />
        <meta name="description" content="Romain Marty développeur web à Perpignan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
