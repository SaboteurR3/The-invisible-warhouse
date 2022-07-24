import img from "../../img/1221448-ba8de4.svg";
import contactImg from "../../img/contact-img.svg";
import TrackVisibility from "react-on-screen";
import "animate.css";
import "../Contact/Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  // animate
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sorry I'm in Toussaint <3");
  };
  return (
    <div className="Contact" id="CONTACT">
      <motion.div
        className="card"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 1 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <motion.div variants={imageAnimate}>
          <img className="img" src={img} alt="..." />
        </motion.div>
        <motion.p variants={textAnimate}>
          <div className="Form_contact_us">
            <h1>Contact Us</h1>
          </div>
        </motion.p>
      </motion.div>
      <div className="Contac-Wrap">
        <div className="forImage">
          <TrackVisibility className="isVisiblee">
            {({ isVisible }) => (
              <div className="isVisiblee">
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              </div>
            )}
          </TrackVisibility>
        </div>
        <div className="Contact-form" variants={textAnimate}>
          <form action="submit" className="contact-form">
            <input
              type="text"
              className="contact-form-text"
              placeholder="Your name"
              name="name"
              required
            />
            <input
              type="email"
              className="contact-form-text"
              placeholder="Your email"
              name="email"
              required
            />
            <input
              type="text"
              className="contact-form-text"
              placeholder="Your phone"
              name="phone"
              required
            />
            <textarea
              className="contact-form-text"
              placeholder="Your message"
              name="text"
              required
              defaultValue={""}
            />
            <motion.div
              className="card"
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ staggerChildren: 0.5 }}
            >
              <motion.button
                variants={textAnimate}
                type="submit"
                className="contact-form-btn"
                onClick={handleSubmit}
              >
                Send
              </motion.button>
            </motion.div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
