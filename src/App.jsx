import "./index.css";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function App() {
	useGSAP(() => {
		ScrollSmoother.create({
			smooth: 3,
			effects: true,
		});
	});
	return (
		<main>
			<Navbar />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<HeroSection />
					<MessageSection />
					<FlavorSection />
          <NutritionSection/>
					<div className="h-dvh"></div>
				</div>
			</div>
		</main>
	);
}

export default App;
