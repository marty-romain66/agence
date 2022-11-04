import React from 'react'
import styles from "../styles/Home.module.css";
import { gsap } from "gsap";
import { useRouter } from "next/router";
export default function Header() {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };
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
  return (
    <header>
    <div className="box">
      <a onClick={handleClick} href='/' className="boxCenterY">
        <h1>{text2()}</h1>
      </a>
      <img src="./asset/image1.png" alt="" />
    </div>
    <div className="box2">
      <h2>"Faisons grandir nos projets ensemble"</h2>
    </div>
  </header>
  )
}
