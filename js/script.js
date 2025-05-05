// const root = document.documentElement;

// function theme(){
//     let max = 0xFFFFFF; 
//     let rand = Math.random() * max; 
//     rand = Math.floor(rand).toString(16);
//     let randColor = "#" + rand.padStart(6, 0).toUpperCase(); 
//     root.style.setProperty("--text", randColor );
//     console.log("Text color: " + randColor);
// }

// function toggleTheme() {
//     document.body.classList.toggle("dark");
//     const themeIcon = document.getElementById("themeIcon");

//     if (document.body.classList.contains("dark")) {
//         localStorage.setItem("theme", "dark");
//         themeIcon.src = "/assets/icons8-été-70.png";
//     } else {
//         localStorage.setItem("theme", "light");

//         themeIcon.src = "/assets/icons8_moon_light.png";
//     }
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
