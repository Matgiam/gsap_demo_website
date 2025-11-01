import "./index.css"
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
gsap.registerPlugin(ScrollTrigger);
function App() {
	return <main>
    <Navbar />
    <HeroSection />
   <MessageSection/>
   <div className="h-dvh"></div>
  </main>;
}

export default App;
