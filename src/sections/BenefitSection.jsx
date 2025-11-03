import ClipPathTitle from "../components/ClipPathTitle";
import SplitText from "gsap/SplitText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import VideoPinSection from "../components/VideoPinSection";

function BenefitSection() {
	useGSAP(() => {
		const paraSplit = SplitText.create(".paragraph", { type: "chars" });
		const revealTl = gsap.timeline({
			delay: 1,
			scrollTrigger: {
				trigger: ".benefit-section",
				start: "top 60%",
				end: "top top",
				scrub: true,
			},
		});

		const paraTL = gsap.timeline({
			delay: 1,
			scrollTrigger: {
				trigger: ".paragraph",
				start: "top 60%",
				end: "top top",
				scrub: true,
			},
		});
		paraTL.from(paraSplit.chars, {
			opacity: 0,
			stagger: 0.02,
			yPercent: 40,
			ease: "circ.out",
		});
		revealTl
			.to(".benefit-section .first-title", {
				duration: 1,
				opacity: 1,
				clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
				ease: "circ.out",
			})
			.to(".benefit-section .second-title", {
				duration: 1,
				opacity: 1,
				clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
				ease: "circ.out",
			})
			.to(".benefit-section .third-title", {
				duration: 1,
				opacity: 1,
				clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
				ease: "circ.out",
			})
			.to(".benefit-section .fourth-title", {
				duration: 1,
				opacity: 1,
				clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
				ease: "circ.out",
			});
	});
	return (
		<section className="benefit-section">
			<div className="container mx-auto pt-20">
				<div className="col-center paragraph">
					<p className="">
						Unlock the Advantages: <br /> Explore the Key Benefits of Choosing SPYLT
					</p>
					<div className="mt-20 col-center">
						<ClipPathTitle title={"Shelf stable"} color={"#faeade"} bg={"#c88e64"} className={"first-title"} borderColor={"#222123"} />
						<ClipPathTitle title={"Protein + Caffeine"} color={"#222123"} bg={"#faeade"} className={"second-title"} borderColor={"#222123"} />
						<ClipPathTitle title={"Infinitely recyclable"} color={"#faeade"} bg={"#7F3B2D"} className={"third-title"} borderColor={"#222123"} />
						<ClipPathTitle title={"Lactose free"} color={"#2E2D2F"} bg={"#FED775"} className={"fourth-title"} borderColor={"#222123"} />
					</div>
                       <div className="md:mt-0 mt-10">
            <p>And much more ...</p>
          </div>
				</div>
			</div>
			<div className="relative overlay-box">
				<VideoPinSection />
			</div>
		</section>
	);
}

export default BenefitSection;
