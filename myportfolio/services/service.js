// GSAP Animations
window.onload = () => {
    gsap.from(".title", { opacity: 0, y: -50, duration: 1 });

    gsap.from(".service-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".services",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
};
