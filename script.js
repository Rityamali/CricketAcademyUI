
let crsr = document.querySelector("#cursor")
let crsr_b = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    crsr_b.style.left = dets.x-175+"px"
    crsr_b.style.top = dets.y-175+"px"
})

let navh4 = document.querySelectorAll("#nav h4")  //queryseectorAll is uesd to select all h4 in nav
navh4.forEach(function(elem){
    elem.addEventListener("mouseenter" , function(){
        crsr.style.scale = 4
        crsr.style.border = "1px solid white"
        crsr.style.backgroundColor = "transparent"
        elem.style.color = "black"

    })
    elem.addEventListener("mouseleave" , function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid orangered"
        crsr.style.backgroundColor = "orangered"
        elem.style.color = "white"

    })
})



gsap.to("#nav",{
    backgroundColor :"#ffb62f",
    duration:0.5,
    height:"70px",
    scrollTrigger:{
        trigger:"#nav",
        scroller :"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "black",
    scrollTrigger:{
        trigger:"#main",          // ye trigger ho rha he 
        scroller:"body",           // ye scroll krne se
        start:"top -30%",         // kb start hoga ye define kiya
        end:"top -60%",           // kb end hoga
        scrub:3                   //repeatation continue rhega with delay
    }
})


gsap.from("#about-sec img,#about-sec-data",{
    y:60,
    opacity:0,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#about-sec",
        scroller:"body",
        start : "top 70%",
        end : "top 45%",
        scrub:3
    }

})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end : "top 45%",
        scrub:3
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start: "top 55%",
        end: "top 50%",
        scrub:3
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start: "top 75%",
        end: "top 70%",
        scrub:3
    }
})













