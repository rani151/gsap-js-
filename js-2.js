 
// ek order m saare  element ko move krna
 var tl = gsap.timeline()
 
 
 tl.from(".nav img, .nav h3, .nav h4, .nav button",{

 y:-100,
 delay:1,
 opacity:0,
 //stagger   <- ek ek krkr element move krenge ->
 stagger:0.3

 })

 tl.from(".main h1",{
  y:100,
  opacity:0
  
 })

 tl.from(".main>img",{
    scale:0,
    opacity:0,
    stagger:0.3
   })

   tl.from("h5",{
    scale:0,
    opacity:0
   })

   tl.from("h5",{
     y:30,
     duration:0.7,
     repeat:-1,
     yoyo:true
   })