import "../Header/Header.css";
import React from "react";
import poison from "../../img/potion.png";
import github from "../../img/github.png";
import twitter from "../../img/twitter.png";
import instagram from "../../img/instagram.png";
import ShowComponent from "./ShowComponent";
import Loading from "./Loading/Loading";
import { useState, useEffect } from "react";
import arrow from "../../img/down-arrow.png";
import { motion } from "framer-motion";

const Header = () => {
  //animate
  const textAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1 },
    },
  };
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 13000);
  }, []);
  return (
    <section className="Header" id="HOME">
      <div className="Navigation">
        <ul>
          <a className="logo" href="#HOME">
            <img className="icon" src={poison} alt="icon" />
          </a>
          <li className="decorate">
            <a href="#HOME">HOME</a>
          </li>
          <li className="decorate">
            <a href="#MYTHICALPOTIONS">MYTHICAL POTIONS</a>
          </li>
          <li className="decorate">
            {" "}
            <a href="#SPECIALITEMS">SPECIAL ITEMS</a>
          </li>
          <li className="decorate">
            <a href="#CONTACT">CONTACT</a>
          </li>
          <li className="decorate">
            <a href="#ABOUTUS">ABOUT US</a>
          </li>
        </ul>
      </div>
      <div className="test">
        <div className="Header-content">
          <div className="Soical-div">
            <div className="Line"></div>
            <a href="https://github.com/SaboteurR3" target="_blank">
              <img className="Soical" src={github} alt="github" />
            </a>
            <a href="#">
              <img className="Soical" src={twitter} alt="twitter" />
            </a>
            <a href="#">
              <img className="Soical" src={instagram} alt="instagram" />
            </a>
          </div>
          <div className="text">
            {show ? <ShowComponent /> : <Loading />}
            <motion.div
              className="card"
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
            >
              <motion.p variants={textAnimate}>
                If you are a fan of fantasy world, this site is for you, scroll
                down and discover things you already have seen or haven't seen
                yet in a Fantasy World
              </motion.p>
            </motion.div>
            <div className="Read-More">
              <a href="#ABOUTUS">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Read More
              </a>
            </div>
          </div>
        </div>
        <iframe
          className="Spline"
          src="https://my.spline.design/wizardroomcopy-25cd045a5670c89b63267397d107b6f1/"
          frameborder="0"
          width="100%"
          height="100%"
        ></iframe>
        <div className="Help">
          <a href="#MYTHICALPOTIONS">
            <img className="arrow" src={arrow} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
