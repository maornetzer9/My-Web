import React, { useRef } from "react";
import MotionDivAnimation from "../UX-UI/MotionDivAnimation";
import { mainPageContent } from "../../assets/data/mainPageContent";
import ThreeLinesAnimation from "../../assets/lottie-json/Three-Lines-Animation.json";
import ResponsiveScreens from "../../assets/lottie-json/Responsive-Screens-Animation.json";
import { motion, useScroll, useTransform } from "framer-motion";
import LottieAnimation from "../UX-UI/LottieAnimation";
import "./main-page-content.css";

export default function MainPageContent() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0.7, 0], ["-150%", "400%"]);
    const rotate = useTransform(scrollYProgress, [1, 0.9], ["-160deg", "0deg"]);
    const opacity = useTransform(scrollYProgress, [1, 0], [0, 1]);

    return (
        <motion.div style={{ scale }} className="main-page-container">
            {mainPageContent.length
                ? mainPageContent.map(
                      ({ title, content, subContent }, index) => {
                          return (
                              <div
                                  key={index}
                                  className="main-content-container"
                              >
                                  <div className="main-page-header">
                                      <h2> {content} </h2>
                                      <h1> {title} </h1>
                                  </div>
                                  <div className="main-page-sub-content">
                                      <span> {subContent} </span>
                                  </div>

                                  <button id="services-button">
                                      {"השירותים שלנו !"}
                                  </button>
                              </div>
                          );
                      }
                  )
                : null}

            <MotionDivAnimation
                direction="ltr"
                animateDirection="left"
                className="three-lines-animation"
            >
                <LottieAnimation
                    animationData={ThreeLinesAnimation}
                    style={{ height: "250px" }}
                />
            </MotionDivAnimation>
            <MotionDivAnimation
                direction="ltr"
                animateDirection="left"
                className="lottie-animation"
            >
                <LottieAnimation animationData={ResponsiveScreens} />
            </MotionDivAnimation>
        </motion.div>
    );
}
