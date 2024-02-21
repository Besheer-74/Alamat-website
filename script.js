const aboutLink = document.querySelector('a[href="#about"]');
const homeLink = document.querySelector('a[href="#home"]');
const projectsLink = document.querySelector('a[href="#projects"]');
const contactLink = document.querySelector('a[href="#contact"]');

homeLink.addEventListener('click', function(event) {
    event.preventDefault();
    const homeSection = document.getElementById('home');
    homeSection.scrollIntoView({ behavior: 'smooth' });
  });

  projectsLink.addEventListener('click', function(event) {
    event.preventDefault();
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  });

aboutLink.addEventListener('click', function(event) {
  event.preventDefault();
  const aboutSection = document.getElementById('about');
  aboutSection.scrollIntoView({behavior: 'smooth'});
  });

contactLink.addEventListener('click', function(event) {
    event.preventDefault();
    const aboutSection = document.getElementById('contact');
    aboutSection.scrollIntoView({behavior: 'smooth'});
    });

  document.addEventListener("DOMContentLoaded", function() {
    var aboutSection = document.getElementById("about");
    var navBar = document.querySelector("nav");

    window.addEventListener("scroll", function() {
        var aboutSectionTop = aboutSection.offsetTop;
        var scrollPosition = window.scrollY;

        if (scrollPosition >= aboutSectionTop) {
            navBar.classList.add("about-nav");
        } else {
            navBar.classList.remove("about-nav");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector(".header");
    var headerText = document.getElementById("header-text");

    var images = ["url(assets/Home.jpg)", "url(assets/s1.jpg)"];
    var texts = ["KENAN", "TAYSEER"];
    var currentIndex = 0;
    var intervalDuration = 5000; // Change image every 5 seconds (5000 milliseconds)

    function changeBackgroundAndText() {
        header.style.backgroundImage = images[currentIndex];
        headerText.textContent = texts[currentIndex];
        headerText.classList.remove("fadeIn"); // Remove the animation class
        void headerText.offsetWidth; // Trigger reflow to restart the animation
        headerText.classList.add("fadeIn"); // Add the animation class to restart the animation
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Initial call to start the slideshow
    changeBackgroundAndText();

    // Set interval to change images and texts automatically
    var intervalId = setInterval(changeBackgroundAndText, intervalDuration);

    // Optionally, pause the slideshow when hovering over the header
    header.addEventListener("mouseenter", function() {
        clearInterval(intervalId);
    });

    // Resume the slideshow when mouse leaves the header
    header.addEventListener("mouseleave", function() {
        intervalId = setInterval(changeBackgroundAndText, intervalDuration);
    });
});
