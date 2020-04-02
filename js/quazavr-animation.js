document.addEventListener("DOMContentLoaded", animation)
function animation() {
    const   leftFlipper = "#leftFlipper",
            rightFlipper = "#rightFlipper",
            rightWhisker = "#rightWhisker",
            leftWhisker = "#leftWhisker",
            spaceGuy = "#spaceGuy",
            quazavr = "#quazavr"

    const S = .17

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

          const quazavrTL = gsap
          .timeline({ 
              repeat: -1, 
              defaults: { transformOrigin: '100% -5%', duration: 1 }
            })
            .to(quazavr, {
                y: 2
            })
        .yoyo(true)

}