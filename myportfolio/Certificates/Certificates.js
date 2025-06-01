// Modal logic
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");

document.querySelectorAll(".view-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = btn.getAttribute("data-img");
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".card", {
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".grid",
    start: "top 80%",
    toggleActions: "play none none reset"
  }
});
