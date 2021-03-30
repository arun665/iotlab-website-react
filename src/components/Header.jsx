import react from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from "./images/logo.png";
import logoimg from "./images/logoimg.png";
import profile from "./images/profile.png";
import cart from "./images/cart.png";



function Header(){
    return      <ul id="header" >
        <li className="menuitem"  ><a  id="brand"  href="#home" data-aos="fade-up">  <img src={logoimg} id="logoimg"  /> <img src={logo} id="logo"  /> </a></li>
      
     
        <li className="menuitem" style={{float:'right'}} ><a href="https://arun665.github.io/iotlabhome/" data-aos="fade-up">   <img src={profile} id="profile"  /></a></li>
        <li className="menuitem" style={{float:'right'}}><a href="https://arun665.github.io/iotlab4/" data-aos="fade-up">  <img src={cart} id="cart"  /> </a></li> 
    </ul>;
    
    
}

export default Header;