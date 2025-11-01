import "./index.css"
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
function App() {
	return <main>
    <Navbar />
    <HeroSection />
    <div className="h-dvh border-red-500"></div>
  </main>;
}

export default App;
