import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

function VideoPinSection() {
	const isMobile = useMediaQuery({
		query: "(max-width:768px)",
	});

	useGSAP(() => {
		if (!isMobile) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".vd-pin-section",
					start: "-15% top",
					end: "200%",
					scrub: 1.5,
					// markers: true,
					pin: true,
				},
			});
			tl.to(".video-box", {
				clipPath: "circle(70% at 50% 50%)",
				ease: "power1.inOut",
			});
		}
	});
	return (
		<section className="vd-pin-section">
			<div style={{ clipPath: isMobile ? "circle(80% at 50% 50%)" : "circle(5.9% at 50% 50%)" }} className="size-full video-box">
				<video src="/videos/pin-video.mp4" muted loop autoPlay></video>
				<div className="abs-center md:scale-100 scale-200">
					<img src="images/circle-text.svg" alt="" className="spin-circle" />
					<div className="play-btn">
						<img src="images/play.svg" alt="" className="size-[3vw] ml-[0.5vw]" />
					</div>
				</div>
			</div>
		</section>
	);
}
export default VideoPinSection;
