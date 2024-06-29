import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideAnimation } from "../../assets/utilities/motion";
import { UseBreakpoints } from "../../assets/utilities/UseBreakPoints";

export default function MotionDivAnimation({
    style = '',
    children,
    animateDirection = "left",
    direction = "rtl",
    className = "",
    mobileAnimationDirection = "left",
    tabletAnimationDirection = "left",
    desktopAnimationDirection = "left",
}) {
    const device = UseBreakpoints();

    const [inViewRef, inView] = useInView({
        triggerOnce: false, // Trigger multiple times
        threshold: 0.1, // Adjust this threshold as needed
    });

    const getAnimationProps = () => {
        switch (device) {
            case "mobile":
                return slideAnimation(mobileAnimationDirection);
            case "tablet":
                return slideAnimation(tabletAnimationDirection);
            case "desktop":
                return slideAnimation(desktopAnimationDirection);
            default:
                return slideAnimation(animateDirection);
        }
    };

 
    const animateProps = getAnimationProps();

    return (
        <motion.div
            ref={inViewRef}
            dir={direction}
            style={style}
            className={className}
            initial={animateProps.initial}
            animate={inView ? animateProps.animate : animateProps.initial}
            transition={animateProps.transition}
        >
            {children}
        </motion.div>
    );
}
