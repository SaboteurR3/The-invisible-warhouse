import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image_1 from "../../img/65fcf46725ffa108e4ae71cfce212031.jpg";
import image_2 from "../../img/2007659e3bc27affa1df4d36823aa079.jpg";
import image_3 from "../../img/d068202b4d2e8df8ca665e66e3a6f8d6.jpg";
import image_4 from "../../img/551f8f108072104f8e8457d4e7f9cb6f.jpg";
import image_5 from "../../img/e150c0cb0b1ccabef377f4084c4cf3c8.jpg";
import image_6 from "../../img/d41cbb3dd3c689e004a7d0bf1e77ba95.jpg";
import image_7 from "../../img/107c21a9a8a57697f8de8c6ae7bbaa1f.jpg";
import "../Potions/Potions.css";
import { motion } from "framer-motion";

const Potions = () => {
  // animate
  const textAnimate = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1 },
    },
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="Carousel" id="Carousel">
      <div className="container_1" id="MYTHICALPOTIONS">
        <div className="row">
          <div className="col-12">
            <div className="bx wow zoomIn">
              <motion.div
                className="card"
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ staggerChildren: 0.5 }}
              >
                <motion.h1 variants={textAnimate}>Mythical Potions</motion.h1>
                <motion.h3 variants={textAnimate}>
                  These are some unnamed mythical potions! scroll down and see
                  other items
                </motion.h3>
              </motion.div>

              <motion.div
                variants={textAnimate}
                className="card"
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ staggerChildren: 0.5 }}
              >
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme slider"
                >
                  <div className="item">
                    <img className="img-1" src={image_1} alt="Image" />
                  </div>
                  <div className="item">
                    <img className="img-2" src={image_2} alt="Image" />
                  </div>
                  <div className="item">
                    <img className="img-3" src={image_3} alt="Image" />
                  </div>
                  <div className="item">
                    <img className="img-4" src={image_4} alt="Image" />
                  </div>
                  <div className="item">
                    <img className="img-5" src={image_5} alt="Image" />
                  </div>
                  <div className="item">
                    <img className="img-6" src={image_6} alt="Image" />
                  </div>
                  <div className="item">
                    <img className="img-7" src={image_7} alt="Image" />
                  </div>
                </Carousel>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Potions;
