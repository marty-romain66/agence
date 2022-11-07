import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import ListTech from "../components/ListTech";
import styles from "../styles/Home.module.css";
import animTitle from "../animGsap/animTitle";
import { useEffect } from "react";
import React from "react";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Home() {
  const [media, setMedia] = React.useState(true);
  useEffect(() => {
  if(window.innerWidth < 1000){
    setMedia(false);
  }
  }, []);

  const text = "Romain Marty Développeur Web";
  const text2 = () => {
    // create span for each letter
    const letters = text.split("").map((letter, index) => {
      return (
        <span key={index} id="gsap" className={styles.letter}>
          {letter}
        </span>
      );
    });
    return letters;
  };
  useEffect (() => {
    animTitle()
  },[])

  return (
    <>
      <div className="boxMiddle">
        <h2>{text2()}</h2>
        <h3>Full Stack Developer</h3>
        
        <h4>" Développons ensemble les projets de demain "</h4>
        
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="chevron-circle-down"
          className="svgScroll svg-inline--fa fa-chevron-circle-down fa-w-16 "
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z"
          ></path>
        </svg>
      </div>
      <div className="boxEnd">
        <ListTech />
        {media ? <Footer /> : null}
        <Footer/>
        
      </div>
    </>
  );
}
