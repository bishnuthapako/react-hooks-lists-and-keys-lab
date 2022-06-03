import React from "react";
import user from "../data/user";
import Home from "./Home";


function NavBar() {
  const links = ["home", "about", "projects"];
  // const linksNav = links.map(function(props, index){
  //   return <a href= {props} key={index}>{props}</a>
  // })

  return (<nav>
    {/* {linksNav} */}

    <a href="#home">home</a>
    <a href="#about">about</a>
    <a href="#projects">projects</a>
  
    {/* display an <a> tag for each link here */}
    </nav>);
}

export default NavBar;

