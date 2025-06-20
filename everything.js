function openModal() {
      document.getElementById("junimoModal").style.display = "block";
    }

    function closeModal() {
      document.getElementById("junimoModal").style.display = "none";
    }

    window.onclick = function(event) {
      const modal = document.getElementById("junimoModal");
      if (event.target === modal) {
        closeModal();
      }
    }
// lightbox via buttons
document.querySelectorAll('.quiz-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const fullSrc = btn.dataset.full;
    const overlay = document.getElementById('lbOverlay');
    const lbImg = overlay.querySelector('.lb-image');
    lbImg.src = fullSrc;
    overlay.style.display = 'flex';
  });
});

// close handlers
document.querySelector('.lb-close').addEventListener('click', () => {
  document.getElementById('lbOverlay').style.display = 'none';
});
document.getElementById('lbOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    e.currentTarget.style.display = 'none';
  }
});

// lightbox for any .exam-wrap or earlier .thumb
document.querySelectorAll('.exam-wrap, .thumb img').forEach(el => {
  el.addEventListener('click', e => {
    // handle both div.exam-wrap and img.thumb
    const src = el.dataset.full || el.getAttribute('data-full');
    const overlay = document.getElementById('lbOverlay');
    overlay.querySelector('.lb-image').src = src;
    overlay.style.display = 'flex';
  });
});

// close lightbox
document.querySelector('.lb-close').addEventListener('click', () => {
  document.getElementById('lbOverlay').style.display = 'none';
});
document.getElementById('lbOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) e.currentTarget.style.display = 'none';
});


