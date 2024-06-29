import MainPage from "./components/Main-Page/MainPage";
import FallingStarsBackground from "./components/Falling-Stars-Background/FallingStarsBackground";
import WelcomeSection from "./components/Welcome-Section/WelcomeSection";
import MultiLayerParallax from "./components/UX-UI/MultiLayerParallax";
import { motion } from "framer-motion";
import "./App.css";

function App() {
    return (
        <FallingStarsBackground>
                <motion.div className="App">
                    <MultiLayerParallax />
                    <WelcomeSection />
                    <MainPage />
                </motion.div>
        </FallingStarsBackground>
    );
}

export default App;
