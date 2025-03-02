const root = document.documentElement;

function theme(){
    let max = 0xFFFFFF; 
    let rand = Math.random() * max; 
    rand = Math.floor(rand).toString(16);
    let randColor = "#" + rand.padStart(6, 0).toUpperCase(); 
    root.style.setProperty("--text", randColor );
    console.log("Text color: " + randColor);
}

// const randColor = () =>  {
//     // root.style.setProperty("--text", "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase());
//     let color = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
//     root.style.setProperty("--color", color);
//     console.log("Background color: " + color);
// }

function dark() {
    document.body.classList.toggle("dark");
}

var originalBG = $(".nav a").css("background-color");

$('.nav li:not(".active") a').mousemove(function(e) {
    x = e.pageX - this.offsetLeft;
    y = e.pageY - this.offsetTop;
    xy = x + " " + y;
    bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", 100, from(rgba(255,255,255,0.8)), to(rgba(255,255,255,0.0))), " + originalBG;
    bgMoz = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor + " 0%, " + originalBG + " " + gradientSize + "px)";

    $(this)
        .css({background: bgWebKit})
        .css({background: bgMoz});
    }).mouseleave(function() {
    $(this).css({
        background: originalBG
    });
});