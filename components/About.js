import React, { useEffect } from "react";
import {gsap } from "gsap";
import Head from "next/head";

const About = () => {

    useEffect(() => {
        gsap.fromTo(".about", {
            opacity: 0
        }, {
            opacity: 1,
            ease: "power4.out",
            stagger: 0.33
        })

        
    }, []);
  return (
    <><Head>
      <title>à propos de moi</title>
      <meta name="description" content="Romain Marty développeur web à Perpignan" />
      <link rel="icon" href="/favicon.ico" />
    </Head><div className="boxAbout " id="about">
        <div className="services about ">
          <img className="media" src="./asset/1.jpg" alt="paysage de montage" />
          <p>L'aventurier</p>
        </div>
        <div className="services about ">
          <img className="media" src="./asset/2.jpg" alt="papa et sont fils a la plage" />
          <p>Le papa poule</p>
        </div>
        <div className="services about ">
          <video className="media" src="./asset/video.mp4" autoPlay loop muted alt="potager"></video>
          <p>Le Maraicher du dimanche</p>
        </div>
      </div></>
  );
};

export default About;
