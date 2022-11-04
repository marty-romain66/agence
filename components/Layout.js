import React from "react";
import Header from "./Header";
import styles from "../styles/Home.module.css";
import NavBar from "./NavBar";
export default function Layout({ children }) {
  return (
    <>
  <div className="conteneurApp">
      <Header />
      <NavBar/>
      <section> {children} </section>
      </div>
    </>
  );
}
