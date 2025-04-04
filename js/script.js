const root = document.documentElement;

function theme(){
    let max = 0xFFFFFF; 
    let rand = Math.random() * max; 
    rand = Math.floor(rand).toString(16);
    let randColor = "#" + rand.padStart(6, 0).toUpperCase(); 
    root.style.setProperty("--text", randColor );
    console.log("Text color: " + randColor);
}

function toggleTheme() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }
});

document.addEventListener('mousemove', (e) => {
    const glow = document.getElementById('cursorGlow');
    glow.style.top = `${e.clientY}px`;
    glow.style.left = `${e.clientX}px`;
});
