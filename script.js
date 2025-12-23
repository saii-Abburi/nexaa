const joinBtn = document.getElementById("joinBtn");
const modal = document.getElementById("joinModal");
const closeBtn = modal.querySelector(".close");

// Open modal
joinBtn.onclick = () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent scrolling
};

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
