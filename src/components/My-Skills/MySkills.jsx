import React from "react";
import { mySkills } from "../../assets/data/mySkills.js";
import MotionDivAnimation from "../UX-UI/MotionDivAnimation.jsx";
import LottieAnimation from "../UX-UI/LottieAnimation.jsx";
import IphoneAnimation from "../../assets/lottie-json/IphoneAnimation.json";
import DesktopAnimation from "../../assets/lottie-json/Desktop-Animation.json";
import ResponsiveScreensAnimation from "../../assets/lottie-json/Responsive-Screens-Animation.json";
import TechnologyAnimation from "../../assets/lottie-json/Technology-Animation.json";
import TechnologyAnimation2 from "../../assets/lottie-json/Technology-Animation-2.json";
import HandicappedAnimation from "../../assets/lottie-json/Handicapped-Animation.json";
import './my-skills.css'


export default function MySkills() {

    const lottieIcons = [
        IphoneAnimation,
        ResponsiveScreensAnimation,
        DesktopAnimation,
        TechnologyAnimation2,
        HandicappedAnimation,
        TechnologyAnimation,
    ];

    const header = "יכולות ומומחיות";

    return (
        <MotionDivAnimation animateDirection="right">
            <h1
                style={{
                    textAlign: "center",
                    fontSize: "40px",
                    color: "white",
                }}
            >
                {header}
            </h1>
            <ol className="cart-list-container">
                {mySkills?.length
                    ? mySkills.map(({ title, description }, index) => {
                          return (
                              <ul key={index} className="cart-container">
                                  <li className="cart-list-title"> {title} </li>
                                  <span className="cart-list-content">
                                      {" "}
                                      {description}{" "}
                                  </span>
                                  <LottieAnimation
                                    style={{height: '250px'}}
                                      key={index}
                                      animationData={lottieIcons[index]}
                                  />
                              </ul>
                          );
                      })
                    : null}
            </ol>
        </MotionDivAnimation>
    );
}
