const root = document.documentElement;

function theme(){
    let max = 0xFFFFFF; 
    let rand = Math.random() * max; 
    rand = Math.floor(rand).toString(16);
    let randColor = "#" + rand.padStart(6, 0).toUpperCase(); 
    root.style.setProperty("--text", randColor );
    console.log("Text color: " + randColor);
}

const randColor = () =>  {
    // root.style.setProperty("--text", "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase());
    let color = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
    root.style.setProperty("--color", color);
    console.log("Background color: " + color);
}

theme(); 
randColor();
