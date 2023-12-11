gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var time = gsap.timeline();

time.from(".nav .logo, .nav .nav-item, .nav img", {
    y: -30,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2,
    // scrollTrigger: ".nav .logo, .nav .nav-item, .nav img"

})

time.from(".p1-part2 h1, .p1-part2 p, .p1-part2 button", {
    y: -30,
    duration: 0.3,
    opacity: 0,
    stagger: 0.3,
    // scrollTrigger : ".p1-part2 h1, .p1-part2 p, .p1-part2 button"
})

time.from(".p1-part2 img", {
    x: 50,
    duration: 0.4,
    opacity: 0,
    // scrollTrigger: ".p1-part2 img"
})

gsap.from(".page2 .card", {
    y: -40,
    stagger: 0.4,
    opacity: 0,
    scrollTrigger: {
        trigger: ".page2 .card",
        scroller: "#main",
        scrub: 5,
        start: "top 70%",
        end: "top 30%"
    }
})

gsap.from(".page3 h2,.page3 p, .page3 .card", {
    y: -40,
    stagger: 0.4,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".page3 h2,.page3 p, .page3 .card",
        scroller: "#main",
        scrub: 5,
        start: "top 80%",
        end: "top 0%"
    }
})

gsap.from(".page3 .w-60 img", {
    scale: 0,
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".page3 .w-60 img",
        scroller: "#main",
        scrub: 1,
        start: "top 80%",
        end: "top 60%"
    }
})

gsap.from(".page4>.row>.w-50:first-child", {
    scale: 0,
    x: -100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".page4>.row>.w-50:first-child",
        scroller: "#main",
        scrub: 1,
        start: "top 200%",
        end: "top 60%"
    }
})

gsap.from(".page4>.row>.w-50:last-child", {
    scale: 0,
    x: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".page4>.row>.w-50:last-child",
        scroller: "#main",
        scrub: 1,
        start: "top 200%",
        end: "top 60%"
    }
})


gsap.from(".page5", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".page5",
        scroller: "#main",
        scrub: 1,
        start: "top 80%",
        end: "top 50%"
    }
})
if(screen.width < 1992){
    document.getElementsByTagName("body").innerHTML = "This website is currently not available for mobile phones";
}
    
