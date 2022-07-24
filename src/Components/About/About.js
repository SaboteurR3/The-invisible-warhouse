import "../About/About.css";
import tree from "../../img/1586368-ba8de4.svg";
import { motion } from "framer-motion";

const About = () => {
  const textAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1 },
    },
  };
  const imageAnimate = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 10, 0],
      transition: { type: "spring", bounce: 0.4, duration: 1 },
    },
  };
  const treeAnimate = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1 },
    },
  };

  return (
    <>
      <div className="About" id="ABOUTUS">
        <motion.div
          className="card"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
        >
          <div className="first">
            <motion.h1 variants={textAnimate}>About Us</motion.h1>
            <motion.p variants={treeAnimate}>
              Hello, I'm a programmer who loves the world of fantasy, so I
              decided to create a site that would be a kind of home for every
              fantasy lover. Here you can find items that you have ever seen in
              different worlds. If there is an item that you would like to see
              on the site, feel free to contact me. Let's build an invisible
              storehouse of magical items together.
            </motion.p>
          </div>
          <motion.div className="second" variants={imageAnimate}>
            <img src={tree} alt="" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
