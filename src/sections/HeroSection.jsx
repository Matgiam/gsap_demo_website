import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

function HeroSection() {
	useGSAP(() => {
		const titleSplit = SplitText.create(".hero-title", { type: "chars" });
		const tl = gsap.timeline({
			delay: 1,
		});

		tl
			.to(".hero-content", { opacity: 1, y: 0, ease: "power1.inOut" })
			.to(
				".hero-text-scroll",
				{
					clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
					ease: "circ.out",
				},
				"-=0.5"
			)
			.from(titleSplit.chars, {
				stagger: 0.02,
				opacity: 0,
				y: 50,
				ease: "power2.out",
			}),
			"-=0.5";

		const heroTl = gsap.timeline({
			scrollTrigger: {
				trigger: ".hero-container",
				start: "top top",
				end: "bottom top",
				scrub: true,
				markers: true,
			},
		});
		heroTl.to(".hero-container", {
			rotate: 7,
			scale: 0.85,
			y: 300,
			ease: "power1.inOut",
		});
	});

	return (
		<section className="bg-main-bg">
			<div className="hero-container">
				<img src="/images/static-img.png" alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto scale-100 md:scale-150" />
				<div className="hero-content opacity-0 ">
					<div className="overflow-hidden">
						<h1 className="hero-title">Freaking Delicious</h1>
					</div>
					<div
						style={{
							clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
						}}
						className="hero-text-scroll"
					>
						<div className="hero-subtitle">
							<h1>Protein + Caffine</h1>
						</div>
					</div>
					<h2>Live life to the fullest  with SPYLT: Shatter boredom and embrace your inner kid with every deliciously smooth chug.</h2>
					<div className="hero-button">Chug a spylt</div>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
