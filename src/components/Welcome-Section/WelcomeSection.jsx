import React from "react";
import { motion } from "framer-motion";
import MotionDivAnimation from "../UX-UI/MotionDivAnimation";

export default function WelcomeSection() {

    const header = "דפי נחיתה בעזרת פיתוח UX/UI מתקדם";
    const title = "פיתוח ועיצוב ברמה שעוד לא ראיתם";

    return (
        <MotionDivAnimation
            direction="rtl"
            animateDirection="right"
            style={{
                color: "white",
                height: "100vh",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
        >
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1.5,
                        delay: 0.5,
                        ease: "easeInOut",
                    }}
                    style={{ 
                        fontSize: "100px", 
                        marginBottom: "20px", 
                        color: "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)", 

                    }}
                >
                    {header}
                </motion.h1>
                <motion.h3
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                    className="title"
                    style={{ 
                        fontSize: "60px",
                        color: "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)", 

                     }}
                >
                    {title}
                </motion.h3>
        </MotionDivAnimation>
    );
}
