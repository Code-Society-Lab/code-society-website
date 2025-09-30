// initializing lenis for smooth scrolling
const lenis = new Lenis({
    autoRaf: true,
});

lenis.on('scroll', (e) => {
    console.log(e);
});

// javascript for smooth scrolling when arrow clicked
document.getElementById('scroll-down').addEventListener('click', function (e) {
    e.preventDefault();
    setTimeout(function () {
        lenis.scrollTo('#info');
    }, 500);
});

// gsap animations
window.addEventListener('DOMContentLoaded', function(){
    const tl = gsap.timeline();

    tl.from('nav .col', {
        opacity: 0,
        x: -50,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        clearProps: "all"
    });

    tl.from('.logo', {
        scale:0.9,
        opacity:0
    })
    
    const titles = document.querySelectorAll('.title');
    titles.forEach((title) => {
        const splitTitle = new SplitText(title, {type: "chars"});
        
        tl.from(splitTitle.chars, {
            opacity: 0,
            y: 50,
            rotationX: -90,
            stagger: 0.05,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });
    
    const description = document.querySelector('.description');
    const splitDesc = new SplitText(description, {type: "words"});
        
    tl.from(splitDesc.words, {
        opacity: 0,
        y: 20,
        stagger: 0.03,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: description,
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });

    tl.from('.cta-join', {
        opacity:0,
        scale:0.95,
        y:5
    })
});