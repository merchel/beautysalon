const services = [
  {
    title: "Lash Extensions",
    image: "https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?auto=format&fit=crop&w=900&q=82",
    summary: "Soft, custom lash extensions designed around your eye shape and daily routine.",
    duration: "2 hr - 2 hr 30 min",
    price: "$185",
    description: "A full lash appointment for clients who want refined length, curl, and definition without a heavy finish.",
    steps: ["Consultation and lash health review", "Custom curl, length, and density mapping", "Gentle isolated extension application", "Final styling, brush-through, and aftercare review"],
    benefits: ["Opens and defines the eyes", "Reduces daily makeup time", "Customizable from natural to fuller glam"],
    aftercare: ["Avoid steam and oil for 24 hours", "Brush gently each morning", "Book fills every 2-3 weeks"]
  },
  {
    title: "Brow Shaping",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=82",
    summary: "Feature-balancing brow design with shaping, trimming, and optional tinting.",
    duration: "35 - 50 min",
    price: "$48",
    description: "A precise brow service that enhances your natural structure while preserving softness and fullness.",
    steps: ["Brow consultation and face-shape assessment", "Custom mapping", "Gentle shaping and trimming", "Styling finish with soothing care"],
    benefits: ["Frames the face beautifully", "Adds polish with minimal upkeep", "Keeps brow fullness intentional"],
    aftercare: ["Avoid exfoliants for 24 hours", "Use soothing gel if sensitive", "Let brows grow between visits"]
  },
  {
    title: "Facial Treatments",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=82",
    summary: "Restorative facials for glow, hydration, clarity, and skin comfort.",
    duration: "60 - 90 min",
    price: "$135",
    description: "A relaxing treatment tailored to your current skin condition, goals, and sensitivity level.",
    steps: ["Skin analysis", "Double cleanse and exfoliation", "Treatment mask and facial massage", "Serums, moisturizer, SPF, and home-care plan"],
    benefits: ["Improves glow and texture", "Supports hydration and barrier comfort", "Creates a calm reset for the skin"],
    aftercare: ["Wear SPF daily", "Pause strong actives for 48 hours", "Hydrate and keep routine gentle"]
  },
  {
    title: "Makeup Services",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=82",
    summary: "Camera-ready soft glam, natural polish, and event makeup looks.",
    duration: "60 - 90 min",
    price: "$145",
    description: "Professional makeup that enhances your features and wears beautifully for photos, events, and celebrations.",
    steps: ["Look consultation", "Skin prep and complexion work", "Eye, cheek, and lip design", "Setting finish and touch-up guidance"],
    benefits: ["Photographs beautifully", "Long-wearing comfort", "Customized to your event and personal style"],
    aftercare: ["Carry lip color for touch-ups", "Blot gently instead of rubbing", "Remove makeup fully before bed"]
  },
  {
    title: "Skincare Consultation",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=82",
    summary: "A focused skin review with product guidance and a realistic home routine.",
    duration: "45 min",
    price: "$85",
    description: "Ideal for clients who want clarity about their skin goals, product choices, and treatment plan.",
    steps: ["Lifestyle and product review", "Skin goal discussion", "Routine design", "Treatment recommendations"],
    benefits: ["Removes routine confusion", "Supports healthier skin habits", "Helps avoid overbuying products"],
    aftercare: ["Introduce products slowly", "Track skin changes weekly", "Schedule seasonal routine updates"]
  },
  {
    title: "Beauty Packages",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=82",
    summary: "Curated combinations for glow days, birthdays, photos, and personal resets.",
    duration: "2 hr 30 min - 4 hr",
    price: "$295",
    description: "A polished multi-service experience that pairs complementary treatments for a complete beauty refresh.",
    steps: ["Personalized package consultation", "Service sequencing", "Lash, brow, skin, or makeup care", "Final styling and maintenance plan"],
    benefits: ["Efficient complete refresh", "Beautiful for special occasions", "Coordinated results across services"],
    aftercare: ["Follow each service's care notes", "Book ahead for events", "Use recommended products consistently"]
  },
  {
    title: "Event Beauty Prep",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=82",
    summary: "Beauty planning for weddings, portraits, galas, and milestone celebrations.",
    duration: "90 min - 3 hr",
    price: "$175",
    description: "A calm, organized approach to getting camera-ready for important dates without last-minute stress.",
    steps: ["Event timeline review", "Beauty goal planning", "Trial or prep appointment", "Final event-ready service"],
    benefits: ["Creates a cohesive look", "Reduces event-day stress", "Keeps results polished and comfortable"],
    aftercare: ["Schedule services in the ideal order", "Bring inspiration photos", "Keep skin routine gentle before the event"]
  }
];

const serviceGrid = document.querySelector("#serviceGrid");
const serviceModal = document.querySelector("#serviceModal");
const modalBody = document.querySelector(".modal-body");
const navLinks = document.querySelector("#primary-menu");
const menuToggle = document.querySelector(".menu-toggle");
const lightbox = document.querySelector("#lightbox");

services.forEach((service, index) => {
  const card = document.createElement("button");
  card.className = "service-card reveal";
  card.type = "button";
  card.innerHTML = `
    <img src="${service.image}" alt="${service.title} service">
    <h3>${service.title}</h3>
    <p>${service.summary}</p>
  `;
  card.addEventListener("click", () => openService(index));
  serviceGrid.appendChild(card);
});

function openService(index) {
  const service = services[index];
  modalBody.innerHTML = `
    <img src="${service.image}" alt="${service.title}">
    <p class="eyebrow">Service Details</p>
    <h2 id="modalTitle">${service.title}</h2>
    <p>${service.description}</p>
    <div class="modal-meta">
      <span>Duration: ${service.duration}</span>
      <span>Starting at ${service.price}</span>
    </div>
    <div class="modal-columns">
      <div>
        <h3>Procedure Steps</h3>
        <ul>${service.steps.map(item => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div>
        <h3>Benefits</h3>
        <ul>${service.benefits.map(item => `<li>${item}</li>`).join("")}</ul>
      </div>
    </div>
    <h3>Aftercare Tips</h3>
    <ul>${service.aftercare.map(item => `<li>${item}</li>`).join("")}</ul>
    <a class="btn btn-primary" href="#contact">Book Appointment</a>
  `;
  serviceModal.showModal();
  document.body.classList.add("modal-open");
}

document.querySelectorAll(".modal-close").forEach(button => {
  button.addEventListener("click", () => {
    button.closest("dialog").close();
    document.body.classList.remove("modal-open");
  });
});

document.querySelectorAll("dialog").forEach(dialog => {
  dialog.addEventListener("click", event => {
    if (event.target === dialog) {
      dialog.close();
      document.body.classList.remove("modal-open");
    }
  });
  dialog.addEventListener("close", () => document.body.classList.remove("modal-open"));
});

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

const filterButtons = document.querySelectorAll(".gallery-filter button");
const galleryItems = document.querySelectorAll(".gallery-grid button");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    galleryItems.forEach(item => {
      item.classList.toggle("hidden", filter !== "all" && item.dataset.category !== filter);
    });
  });
});

galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    const img = lightbox.querySelector("img");
    img.src = item.dataset.full;
    img.alt = item.querySelector("img").alt;
    lightbox.showModal();
    document.body.classList.add("modal-open");
  });
});

modalBody.addEventListener("click", event => {
  if (event.target.matches('a[href="#contact"]')) {
    serviceModal.close();
    document.body.classList.remove("modal-open");
  }
});

document.querySelector(".contact-form").addEventListener("submit", event => {
  event.preventDefault();
  const note = event.currentTarget.querySelector(".form-note");
  note.textContent = "Thank you. Your appointment request is ready for demo review.";
  event.currentTarget.reset();
});
