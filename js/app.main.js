const damnItScroll=()=>{


    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
    })
  
    locoScroll.on('scroll', ScrollTrigger.update)
    
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".container", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
    });
    // var c1 = gsap.timeline({
    
    //   scrollTrigger: {
    //     trigger: ".slide-container",
    //     scroller: "..slide-container",
    //     scrub: true,
    //     pin:true,
    //     start: "top top",
    //     end: "+=100%"
    //   }
    // let pinBoxes = document.querySelectorAll(".pin-wrap > *");
    // let pinWrap = document.querySelector(".pin-wrap");
    // let pinWrapWidth = pinWrap.offsetWidth;
    // let horizontalScrollLength = pinWrapWidth - window.innerWidth;
  
    // // Pinning and horizontal scrolling
  
    // gsap.to(".pin-wrap", {
    //   scrollTrigger: {
    //     scroller: '.container', //locomotive-scroll
    //     scrub: true,
    //     trigger: "#sectionPin",
    //     pin: true,
    //     anticipatePin: 1,
    //     start: "top top",
    //     end: pinWrapWidth
    //   },
    //   x: horizontalScrollLength*2,
    //   ease: "none"
    // });
     

      var nav = document.querySelector("#nav-btn");
     
      nav.addEventListener('click',()=>{
        gsap.from('.nav-container',{
          display:'none',
          opacity: 0,

        })
        gsap.to('.nav-container',{
          display:'block',
          opacity: 1,
        })

  

      })
      var closeBtn = document.getElementById('close');
      closeBtn.onclick = ()=>{

        gsap.to('.nav-container',{
          display:'none',
          opacity: 0,

        })
      }
     

      gsap.to('#close',{
        rotate:360,
        repeat:-1,
        duration:20
        
      })

      gsap.to('.nav-bg',{
        duration:500,
        x:'+=10%',
        repeat:-1,
      })

      // var image = gsap.timeline();
      // var img = document.querySelector('.wide-pic-1');
      // img.onclick = function(){

      //   gsap.from('.wide-pic-1',{

      //     scale:1,
      //   })
      //   gsap.to('.wide-pic-1',{

      //     scale:2,
      //   })
      // }
      // document.onclick=function(e){

      //   gsap.to('.wide-pic-1',{

      //     scale:1,
      //   })
      // }


    
    ScrollTrigger.refresh();
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
  
        
      
      
  }