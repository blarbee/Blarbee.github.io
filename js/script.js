
// =================================================================== ANIMATIONS =======================================
const observer_fondu = new IntersectionObserver(elements => {
    elements.forEach(element => {
      if (element.isIntersecting) {
        element.target.classList.add('fondu');
      }
    });
  });
  observer_fondu.observe(document.querySelector('#about_me_paragraph'));
  observer_fondu.observe(document.querySelector('#formation_card'));
  observer_fondu.observe(document.querySelector('.bland_container:nth-child(2)'));

  const observer_right_to_left = new IntersectionObserver(elements => {
    elements.forEach(element => {
      if (element.isIntersecting) {
        element.target.classList.add('from_right_to_left');
      }
    });
  });
  observer_right_to_left.observe(document.querySelector('#container_socials'));
  observer_right_to_left.observe(document.querySelector('.bland_container:nth-child(1)'));

  const observer_left_to_right = new IntersectionObserver(elements => {
    elements.forEach(element => {
      if (element.isIntersecting) {
        element.target.classList.add('from_left_to_right');
      }
    });
  });

document.querySelectorAll('#container_projets>*').forEach(el => {observer_left_to_right.observe(el);});

// ============================================================ THEMES =======================================

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.className = savedTheme;

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});

function toggleTheme() {
  const themeIcon = document.getElementById("dark");
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    document.documentElement.className = "dark";
  } else {
    localStorage.setItem("theme", "light");
    document.documentElement.className = "light";
  }
}








// const root = document.documentElement;

// function theme(){
//     let max = 0xFFFFFF; 
//     let rand = Math.random() * max; 
//     rand = Math.floor(rand).toString(16);
//     let randColor = "#" + rand.padStart(6, 0).toUpperCase(); 
//     root.style.setProperty("--text", randColor );
//     console.log("Text color: " + randColor);
// }



// document.addEventListener("DOMContentLoaded", () => {
//     if (localStorage.getItem("theme") === "dark") {
//         document.body.classList.add("dark");
//         const themeIcon = document.getElementById("themeIcon");
//         themeIcon.src = "/assets/icons8-été-70.png";
//     }else{
//         const themeIcon = document.getElementById("themeIcon");

//         themeIcon.src = "/assets/icons8_moon_light.png";
//     }
// });

// document.addEventListener('mousemove', (e) => {
//     const glow = document.getElementById('cursorGlow');
//     glow.style.top = `${e.clientY}px`;
//     glow.style.left = `${e.clientX}px`;
// });

// TODO: add socials to the footer maybe
// TODO: add keyframes animation