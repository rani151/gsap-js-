 var tl = gsap.timeline()

 tl.from(".nav",{
    opacity:0, 
    delay:0.8 
 })
//  nav 
 tl.from(".nav h1, .nav h3, .nav h4, .nav i",{
    y:-80,
    duration:0.3,
   
    opacity:0,
    stagger:0.6
 })
// left ---- h1 
 tl.from(".left h1",{
     x:-100,
     duration:0.5,
     opacity:0,
     stagger:0.6,
     color:"red"
 })
// right- --  img
tl.from(".right img",{
  scale:2,
  duration:0.5,
  opacity:0
  
    
})

//-----------------------------------  p-2 -----------------------------------------------------

gsap.from(".page2 .box",{
    scale:0,
    opacity:0,
    duration:0.5,
    stagger:0.5,
    // scrollTrigger

    scrollTrigger:{
        trigger:".page2 .box",
        scroller:"body",
        markers:true,
        start:"top 60%"
    }
})