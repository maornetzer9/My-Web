import React from "react";
import MainPageContent from "../Main-Page-Content/MainPageContent";
import MySkills from "../My-Skills/MySkills";
import MotionDivAnimation from "../UX-UI/MotionDivAnimation";
import MyServices from "../My-Services/MyServices";
import "./main-page.css";

export default function MainPage() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <div lang="he" >
            <MotionDivAnimation direction="rtl" animateDirection="right">
                <MainPageContent />
            </MotionDivAnimation>

            <MotionDivAnimation direction="rtl" animateDirection="right">
                <MySkills />
            </MotionDivAnimation>

            <MotionDivAnimation direction="rtl" animateDirection="right">
                <MyServices />
            </MotionDivAnimation>

            <button
                onClick={scrollToTop}
                style={{
                    width: "100%",
                    background: "inherit",
                    color: "white",
                    padding: "20px",
                    fontSize: "2rem",
                    border: "none",
                }}
            >
                {" "}
                Scroll To Top{" "}
            </button>
        </div>
    );
}
