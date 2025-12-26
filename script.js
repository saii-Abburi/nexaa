// const joinBtn = document.getElementById("joinBtn");

const modal = document.getElementById("joinModal");
const closeBtn = modal.querySelector(".close");

const joinBtns = document.getElementsByClassName("joinBtn");
for (let btn of joinBtns) {
  btn.onclick = () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  };
}

// Open modal
// joinBtn.onclick = () => {
//   modal.style.display = "block";
//   document.body.style.overflow = "hidden"; // Prevent scrolling
// };

// Close modal
closeBtn.onclick = () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
};

// Close modal on clicking outside
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
};

const cards = document.querySelectorAll(".impact-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X relative to card
    const y = e.clientY - rect.top; // Mouse Y relative to card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10; // Max 10deg
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  });
});

const profileCards = document.querySelectorAll(".profile-card");

profileCards.forEach((card) => {
  const photoLayer = card.querySelector(".card-layer.photo");
  const contentLayer = card.querySelector(".card-layer.content");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 8; // smaller tilt
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

    // Parallax layers
    if (photoLayer) {
      photoLayer.style.transform = `translateZ(30px)`; // photo moves forward
    }
    if (contentLayer) {
      contentLayer.style.transform = `translateZ(60px)`; // text moves slightly more
    }
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    photoLayer.style.transform = `translateZ(0px)`;
    contentLayer.style.transform = `translateZ(0px)`;
  });
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

const flagshipCard = document.querySelector(".event-card.flagship");
const video = document.getElementById("flagshipPreview");

flagshipCard.addEventListener("mouseenter", () => {
  video.style.display = "block";
  video.play();
});

flagshipCard.addEventListener("mousemove", (e) => {
  video.style.left = `${e.clientX + 20}px`;
  video.style.top = `${e.clientY - 140}px`;
});

flagshipCard.addEventListener("mouseleave", () => {
  video.style.display = "none";
  video.pause();
  video.currentTime = 0;
});

const buttons = document.querySelectorAll(".mission-points button");
const image = document.getElementById("missionImage");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // UI state
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Fade out
    image.classList.add("fade");

    // Swap image AFTER fade
    setTimeout(() => {
      image.src = btn.dataset.img;
      image.classList.remove("fade");
    }, 300);
  });
});


// const hero = document.getElementsByClassName('nexaa-vision')[0];

// function meteor(){
//   let e = document.createElement('img');
//   e.src='./assets/Meteor.png';
//   e.setAttribute('class' ,'meteor');
//   hero.appendChild(e);
//   e.style.left = Math.random()* + innerWidth+'PX';

//   setTimeout(function(){
//     hero.removeChild(e); 
//   },1500)
// }

// setInterval(function(){
//   meteor()
// }
// ,100)

const cursor = document.querySelector('.custom-cursor');
let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;
let hue = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  emitParticle(e.clientX, e.clientY);
});

function emitParticle(x, y) {
  const p = document.createElement('div');
  p.className = 'cursor-particle';

  hue = (hue + 6) % 360;
  p.style.setProperty('--hue', `${hue}deg`);

  p.style.left = `${x}px`;
  p.style.top = `${y}px`;

  document.body.appendChild(p);

  setTimeout(() => p.remove(), 600);
}

function animate() {
  currentX += (mouseX - currentX) * 0.2;
  currentY += (mouseY - currentY) * 0.2;

  cursor.style.transform =
    `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;

  requestAnimationFrame(animate);
}

animate();




