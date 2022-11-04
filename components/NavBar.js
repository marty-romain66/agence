import React from "react";
import { useRouter } from "next/router";
export default function NavBar() {
  const [href, setHref] = React.useState("");
  const router = useRouter();
  const handleClickS = (e) => {
    e.preventDefault();
    router.push("/service#services");
  };
  const handleClickP = (e) => {
    e.preventDefault();
    router.push("/projets#projet");
  };
  const handleClickC = (e) => {
    e.preventDefault();
    router.push("/contact#contact");
  };
  const handleClickA = (e) => {
    e.preventDefault();
    router.push("/about#about");
  };

  return (
    <>
      <main className="middle">
        <div className="box3">
          <div className="navBar">
            <ul>
              <li>
                <a href={href} onClick={handleClickS}>
                  Mes services
                </a>
              </li>
              <li>
                <a href="#" onClick={handleClickP}>
                  Mes projets
                </a>
              </li>
              <li>
                <a href="#" onClick={handleClickC}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#" onClick={handleClickA}>
                  Qui suis-je?
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
