import "./index.css"
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
gsap.registerPlugin(ScrollTrigger);
function App() {
	return <main>
    <Navbar />
    <HeroSection />
   <MessageSection/>
   <FlavorSection />
   <div className="h-dvh"></div>
  </main>;
}

export default App;
