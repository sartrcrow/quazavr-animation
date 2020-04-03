document.addEventListener("DOMContentLoaded", animation)

function animation() {
	let spikes = []
	const S = 0.35
	const spaceGuy = "#spaceGuy",
		quazavr = "#quazavr",
		eye = "#eye"

	const animationObjects = [
		{ id: "#leftFlipper", transform: "100% 0", speed: S * 3, rotate: 15, z: 0.1, rotationZ: 0.01, force3D:true },
		{ id: "#rightFlipper", transform: "100% 0", speed: S * 3, rotate: -15, z: 0.1, rotationZ: 0.01, force3D:true },
		{ id: "#rightWhisker", transform: "0 100%", speed: S * 4, rotate: 15, z: 0.1, rotationZ: 0.01, force3D:true },
		{ id: "#leftWhisker", transform: "100% 100%", speed: S * 4, rotate: -15, z: 0.1, rotationZ: 0.01, force3D:true }
	]

	// Flippers animation

	animationObjects.map(e => {
		return gsap
			.timeline({
				repeat: -1,
				defaults: {
					transformOrigin: e.transform,
					ease: "none",
					duration: e.speed
				}
			})
			.to(e.id, {
				rotate: e.rotate
			})
			.yoyo(true)
	})

	// Quazavr movement up & down animation

	const quazavrTL = gsap
		.timeline({
			repeat: -1,
			defaults: { duration: 1.3, ease: "none" }
		})
		.to(quazavr, {
			y: 12,
			z: 0.1,
			rotationZ: 0.01,
			force3D: true
		})
		.yoyo(true)

	//Spikes animation

	for (let i = 1; i <= 6; i++) {
		let spikeId = `#spike${i}`
		let spikeTl = gsap
			.timeline({
				repeat: -1,
				defaults: { transformOrigin: "0% 100%", ease: "none", duration: S * 3 }
			})
			.to(spikeId, {
				rotate: 3
			})
			.yoyo(true)
		spikes.push(spikeTl)
	}

	// SpaceGuy animation

	const spaceGuyTL = gsap
		.timeline({
			repeat: -1,
			defaults: { transformOrigin: "50% 50%", ease: "none", duration: S * 6 }
		})
		.to(spaceGuy, {
			y: -1,
			rotate: 1
		})
		.yoyo(true)

	// Eye blinking animation

	const eyeTL = new TimelineMax({ repeat: -1, repeatDelay: 2 })
		.from("#eyeLid", { attr: { height: 0 }, duration: 0.2 })
		.to("#eye", { scaleY: -0.1, transformOrigin: "50% 50%", duration: 0.2 }, 0)
		.to(
			"#eye",
			{ scaleY: 1, transformOrigin: "50% 50%", duration: 0.2 },
			"-=0.1"
		)

	// Checks animation

	const arr = ["#checkMark1, #checkMark2, #checkMark3"]
	gsap.set(arr, {opacity: 0 })

	const tl = gsap
		.timeline({ repeat: -1 })
		.to(arr, { opacity: 0, duration: S * 3 })
		.to("#checkMark1", { opacity: 1, duration: S })
		.to("#checkMark2", { opacity: 1, duration: S })
		.to("#checkMark3", { opacity: 1, duration: S })
}
