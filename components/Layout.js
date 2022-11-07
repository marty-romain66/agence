import React, { useEffect } from "react";
import Header from "./Header";

export default function Layout({ children }) {

  return (
    <>
      <Header />
      <main className="box"> {children} </main>
    </>
  );
}
