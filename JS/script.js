/*Standard on-scroll Animation */
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        // Optional: Stop observing once the animation has played
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll('.scroll-section').forEach(section => {
    observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        // Optional: Stop observing once the animation has played
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll('.scroll-section1').forEach(section => {
    observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        // Optional: Stop observing once the animation has played
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll('.scroll-section2').forEach(section => {
    observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        // Optional: Stop observing once the animation has played
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll('.scroll-section3').forEach(section => {
    observer.observe(section);
  });
});



/* Footer Scroll Animation */
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Optional: Stop observing once the animation has played
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll('.footer').forEach(section => {
    observer.observe(section);
  });
});


