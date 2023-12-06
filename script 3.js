//  page1
 gsap.from(".page1 .box",{
  scale:0,
  duration:1,
  delay:1,
  rotate:360
 })
// page 2
 gsap.from(".page2 .box",{
  scale:0,
  duration:1,
 
  rotate:360,
  // <-scrollTrigger ->

  // scrollTrigger: ".page2 .box"

  //****right way to use it****
  scrollTrigger:{

    // now hre give all property:

    trigger:".page2 .box", //jisko trigger krna h:

    scroller:"body",     //jispr trigger krna h ---- (body)

    // markers:true,

     start:"top 60%",

    // scrub:true ,    //jese scroll hoga vese vese animate:

    end:"top 30%",
    scrub:2
  }
 })