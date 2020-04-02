document.addEventListener("DOMContentLoaded", animation)
function animation() {
    const   leftFlipper = "#leftFlipper",
            rightFlipper = "#rightFlipper",
            rightWhisker = "#rightWhisker",
            leftWhisker = "#leftWhisker",
            quazavr = "#quazavr",
            spike1 = "#spike1",
            spike2 = "#spike2",
            spike3 = "#spike3",
            spike4 = "#spike4",
            spike5 = "#spike5",
            spike6 = "#spike6"

    const S = .17

    // Flippers animation

    const leftFlipperTL = gsap
          .timeline({
              repeat: -1,
              defaults: { transformOrigin: "100% 0%", ease: "none", duration: S * 2 }
          })
          .to(leftFlipper, { 
              rotate: 10,
              duration: 0.9,
         })
          .yoyo(true)
    
          const rightFlipperTl = gsap
          .timeline({
              repeat: -1,
              defaults: { transformOrigin: "100% 0", ease: "none", duration: S * 2 }
          })
          .to(rightFlipper, { 
              rotate: -10,
              duration: 0.9,
         })
          .yoyo(true)

          // SpaceGuy whiskers animation

          const rightWhiskerTl = gsap
          .timeline({
              repeat: -1,
              defaults: { transformOrigin: "0% 100%", ease: "none", duration: S * 2 }
          })
          .to(rightWhisker, { 
              rotate: -8,
              duration: 0.9,
         })
          .yoyo(true)

          const leftWhiskerTl = gsap
          .timeline({
              repeat: -1,
              defaults: { transformOrigin: "0% -50%", ease: "none", duration: S * 2 }
          })
          .to(leftWhisker, { 
              rotate: -3,
              duration: 0.9,
         })
          .yoyo(true)

         // Quazavr movement up & down animation

          const quazavrTL = gsap
          .timeline({ 
              repeat: -1, 
              defaults: { transformOrigin: '100% -5%', duration: 1 }
            })
            .to(quazavr, {
                y: 2
            })
        .yoyo(true)

        //Spikes animation

        const spike1TL = gsap
          .timeline({
              repeat: -1,
              defaults: { transformOrigin: "0% 100%", ease: "none", duration: S * 2 }
          })
          .to(spike1, { 
              rotate: 3,
              duration: 0.9,
         })
          .yoyo(true)

          const spike2TL = gsap
          .timeline({
              repeat: -1,
              defaults: { transformOrigin: "0% 100%", ease: "none", duration: S * 2 }
          })
          .to(spike2, { 
              rotate: 2,
              duration: 0.9,
         })
          .yoyo(true)

          const spike3TL = gsap
          .timeline({
              repeat: -1,
              defaults: { transformOrigin: "0% 100%", ease: "none", duration: S * 2 }
          })
          .to(spike3, { 
              rotate: 2,
              duration: 0.9,
         })
          .yoyo(true)

          const spike4TL = gsap
          .timeline({
              repeat: -1,
              defaults: { transformOrigin: "0% 100%", ease: "none", duration: S * 2 }
          })
          .to(spike4, { 
              rotate: 2,
              duration: 0.9,
         })
          .yoyo(true)

          const spike5TL = gsap
          .timeline({
              repeat: -1,
              defaults: { transformOrigin: "0% 100%", ease: "none", duration: S * 2 }
          })
          .to(spike5, { 
              rotate: 2,
              duration: 0.9,
         })
          .yoyo(true)

          const spike6TL = gsap
          .timeline({
              repeat: -1,
              defaults: { transformOrigin: "0% 100%", ease: "none", duration: S * 2 }
          })
          .to(spike6, { 
              rotate: 2,
              duration: 0.9,
         })
          .yoyo(true)

}