import "../Specials/Specials.css";
import castle from "../../img/1096474-1f2030.svg";
import first_image from "../../img/73afc0a55e7b723b2fd1af8585780f8c.jpg";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";

const Specials = () => {
  //animate
  const textAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.1, duration: 1 },
    },
  };
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div
        className={isVisible ? "Specials" : "Min-specials"}
        id="SPECIALITEMS"
      >
        <motion.div
          className="card"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.div className="Sepcial-Header" variants={textAnimate}>
            <div className="castle">
              <img src={castle} alt="" />
            </div>
            <h1>Special Items From different Worlds</h1>
            <div className="castle">
              <img src={castle} alt="" />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="card"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 1 }}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.div className="Main-Content" variants={textAnimate}>
            <div className="first_item">
              <h2 layout>Magic lamp</h2>
              <img layout src={first_image} alt="..." />
              {isVisible && (
                <p layout>
                  Magic Lamp is a quest item in The Witcher 3: Wild Hunt. It's
                  initially picked up by Keira Metz during Magic Lamp, but
                  she'll give it to Geralt later if one chooses to do An
                  Invitation from Keira Metz. The item can be used anywhere
                  spirits and such ghosts are found (typically indicated by
                  green lights). The lamp can be used as a light source too
                </p>
              )}
            </div>
            <div className="first_item">
              <h2 layout>Magic lamp</h2>
              <img layout src={first_image} alt="..." />
              {isVisible && (
                <p layout>
                  Magic Lamp is a quest item in The Witcher 3: Wild Hunt. It's
                  initially picked up by Keira Metz during Magic Lamp, but
                  she'll give it to Geralt later if one chooses to do An
                  Invitation from Keira Metz. The item can be used anywhere
                  spirits and such ghosts are found (typically indicated by
                  green lights). The lamp can be used as a light source too
                </p>
              )}
            </div>
            <div className="first_item">
              <h2 layout>Magic lamp</h2>
              <img layout src={first_image} alt="..." />
              {isVisible && (
                <p layout>
                  Magic Lamp is a quest item in The Witcher 3: Wild Hunt. It's
                  initially picked up by Keira Metz during Magic Lamp, but
                  she'll give it to Geralt later if one chooses to do An
                  Invitation from Keira Metz. The item can be used anywhere
                  spirits and such ghosts are found (typically indicated by
                  green lights). The lamp can be used as a light source too
                </p>
              )}
            </div>
            <div className="first_item">
              <h2 layout>Magic lamp</h2>
              <img layout src={first_image} alt="..." />
              {isVisible && (
                <p layout>
                  Magic Lamp is a quest item in The Witcher 3: Wild Hunt. It's
                  initially picked up by Keira Metz during Magic Lamp, but
                  she'll give it to Geralt later if one chooses to do An
                  Invitation from Keira Metz. The item can be used anywhere
                  spirits and such ghosts are found (typically indicated by
                  green lights). The lamp can be used as a light source too
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
        <div onClick={() => setIsVisible(!isVisible)} className="div-btn">
          <button className="btn">
            {isVisible ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Specials;
