import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import MainHeader from "../Main-Header/MainHeader";
import "./multi-layer-parallax.css";

export default function MultiLayerParallax() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const scale = useTransform(scrollYProgress, [0.9, 0], ["700%", "100%"]);
    const rotateY = useTransform(scrollYProgress, [1, 0.9], ["160deg", "0deg"]);
    const opacity = useTransform(scrollYProgress, [1, 0], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <motion.div
            style={{ opacity, scale, rotateY}}
            ref={ref}
            className="parallax-container"
        >
            <motion.h1 style={{ y: textY, opacity, color: "#9100b5" }} className="parallax-text">
                <MainHeader/>
            </motion.h1>

            <motion.div
                className="parallax-background"
                style={{ y: backgroundY, opacity: 0.8 }}
            />

            <div className="parallax-overlay" />
        </motion.div>
    );
}
