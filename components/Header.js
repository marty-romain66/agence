import React, { useEffect } from "react";
import { useRouter } from "next/router";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [toggle, setToggle] = React.useState(false);
  const router = useRouter();
  const handleClickS = (e) => {
    e.preventDefault();
    router.push("/services");
    setToggle(false);
  };
  const handleClickP = (e) => {
    e.preventDefault();
    router.push("/project");
    setToggle(false);
  };
  const handleClickA = (e) => {
    e.preventDefault();
    router.push("/about");
    setToggle(false);
  };
  const handleClickC = (e) => {
    e.preventDefault();
    router.push("/contact");
    setToggle(false);
  };
  const handleClickH = (e) => {
    e.preventDefault();
    router.push("/");
    setToggle(false);
  };
  return (
    <>
      {toggle ? (
        <div className="boxToggle" >
          <div className="boxToggle__card">
            <a href="" onClick={handleClickH}>
              Home
            </a>
          </div>
          <div className="boxToggle__card">
            <a href="" onClick={handleClickS}>
              Services
            </a>
          </div>
          <div className="boxToggle__card">
            <a href="" onClick={handleClickA}>
              About
            </a>
          </div>
          <div className="boxToggle__card">
            <a href="" onClick={handleClickC}>
              Contact
            </a>
          </div>
        </div>
      ) : null}

      <header>
        <div className="boxTitle">
          <h1>Romain Marty</h1>
        </div>
        <div className="navBarMedia">
          <IconButton
          onClick={()=>setToggle(!toggle)}
          className="navBarMedia__media
          "
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2}}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className="navBar">
          <ul>
            <li>
              <a href="" onClick={handleClickH}>
                Home
              </a>
            </li>
            <li>
              <a href="" onClick={handleClickS}>
                Services
              </a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <p onClick={() => setToggle(!toggle)}>Contact</p>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
