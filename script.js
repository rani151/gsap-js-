// time (fun )
function time(){
 var a = 0
    
 setInterval(function(){
    a +=  Math.floor(Math.random()*20)

    if(a<100){
        document.querySelector(".loader h1").innerHTML = a+"%"
    }

    else{
        a=100
        document.querySelector(".loader h1").innerHTML = a+"%"
    }
     
    },150)
  
  }
  
 
//  for loader
 var tl = gsap.timeline()

 tl.to(".loader h1",{
   
    delay:0.5,
    duration:1,
    // onStart  --> in built function h jo js m( fun )ko run krta h 
    onStart:time()
 })

 tl.to(".loader",{
    top:"-100vh",
    delay:0.5,
    duration:2

})

 gsap.to(".page1 h1",{
   
 translate:"transformX(-100%)",
 fontWeight:"100",
 scrollTrigger:{
  trigger:".page1",
  scroller:"body",
  markers:true,
  start:"top 0",
  end:"top -200%",
  scrub:3,
  pin:true
    }
 })
