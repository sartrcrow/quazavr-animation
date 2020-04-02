document.addEventListener("DOMContentLoaded", animation)
function animation() {
    const   leftFlipper = "#leftFlipper",
            rightFlipper = "#rightFlipper",
            rightWhisker = "#rightWhisker",
            leftWhisker = "#leftWhisker",
            spaceGuy = "#spaceGuy",
            quazavr = "#quazavr",
            spike1 = "#spike1",
            spike2 = "#spike2",
            spike3 = "#spike3",
            spike4 = "#spike4",
            spike5 = "#spike5",
            spike6 = "#spike6",
            eye = "#eye",
            eyeLid = "eyeLid"

    const S = .17

// Flippers animation

    const leftFlipperTL = gsap
          .timeline({
              repeat: -1,
              defaults: { transformOrigin: "100% 0%", ease: "none", duration: S * 2 }
          })
          .to(leftFlipper, { 
              rotate: 15,
              duration: 0.9,
         })
          .yoyo(true)
    
    const rightFlipperTl = gsap
          .timeline({
              repeat: -1,
              defaults: { transformOrigin: "100% 0", ease: "none", duration: S * 2 }
          })
          .to(rightFlipper, { 
              rotate: -15,
              duration: 0.9,
         })
          .yoyo(true)

// SpaceGuy whiskers animation

    const rightWhiskerTl = gsap
          .timeline({
              repeat: -1,
              defaults: { transformOrigin: "0% 100%", ease: "none", duration: S * 4 }
          })
          .to(rightWhisker, { 
              rotate: 15,
              duration: 0.9,
         })
          .yoyo(true)

    const leftWhiskerTl = gsap
          .timeline({
              repeat: -1,
              defaults: { transformOrigin: "100% 100%", ease: "none", duration: S * 4 }
          })
          .to(leftWhisker, { 
              rotate: -15,
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

    const eyeTL = new TimelineMax({repeat:-1,repeatDelay:2})
    .from("#eyeLid",.2,{attr:{height:0}})
    .to("#eye",.2,{scaleY:-0.1, transformOrigin:"50% 50%"},0)
    .to("#eye",.1,{scaleY:1, transformOrigin:"50% 50%"},"-=0.1")

// Checks animation

    const tl = gsap.timeline({repeat: -1})

            tl.to("#checkMark3", 1, { opacity: 0, duration: 1 })
            tl.to("#checkMark2", 1, { opacity: 0, duration: 1 })
            tl.to("#checkMark1", 1, { opacity: 0, duration: 1 })
            tl.to("#checkMark1", 1, { opacity: 1})
            tl.to("#checkMark2", 1, { opacity: 1, duration: 1 })
            tl.to("#checkMark3", 1, { opacity: 1, duration: 1 })

}