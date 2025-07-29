// Certificates.js

// Certificate data array
const certificates = [
  { img: "certs/cert1.JPG", title: "Android Application Development" },
  { img: "certs/cert2.JPG", title: "AR/VR Development" },
  { img: "certs/cert3.JPG", title: "Paloalto Internship" },
  { img: "certs/cert4.JPG", title: "Java Business" },
  { img: "certs/cert5.JPG", title: "1 Month Internship Completion Certificate" },
  { img: "certs/cert6.JPG", title: "Offer Letter" },
  { img: "certs/cert7.JPG", title: "Offer Letter" },
  { img: "certs/cert8.JPG", title: "Java Programmers" },
  // Add more if needed
];

// Get container
const grid = document.getElementById("certGrid");

// Generate cards
certificates.forEach(cert => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">
        <img src="${cert.img}" alt="${cert.title}" />
      </div>
      <div class="card-back">
        <p>${cert.title}</p>
        <button class="view-btn" data-img="${cert.img}">View</button>
      </div>
    </div>
  `;
  grid.appendChild(card);
});

// Modal Logic
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");

// Delegate event for dynamic buttons
grid.addEventListener("click", e => {
  if (e.target.classList.contains("view-btn")) {
    const imgSrc = e.target.getAttribute("data-img");
    modalImg.src = imgSrc;
    modal.style.display = "flex";
  }
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
