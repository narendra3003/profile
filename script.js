// Smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Optional: Add a "scroll to top" button
  const scrollToTopButton = document.createElement("button");
  scrollToTopButton.innerText = "↑";
  scrollToTopButton.style.position = "fixed";
  scrollToTopButton.style.bottom = "20px";
  scrollToTopButton.style.right = "20px";
  scrollToTopButton.style.padding = "10px 15px";
  scrollToTopButton.style.fontSize = "18px";
  scrollToTopButton.style.border = "none";
  scrollToTopButton.style.borderRadius = "5px";
  scrollToTopButton.style.backgroundColor = "#ff7f50";
  scrollToTopButton.style.color = "#fff";
  scrollToTopButton.style.cursor = "pointer";
  scrollToTopButton.style.display = "none";  // Initially hidden
  
  document.body.appendChild(scrollToTopButton);
  
  // Show or hide "scroll to top" button based on scroll position
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });
  
  // Scroll to top on button click
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });