let redshow = document.querySelector(".red");
let greenshow = document.querySelector(".green");
let yellowshow = document.querySelector(".yellow");
let showtimer = document.querySelector(".timer");
let signleft = document.querySelector(".left");
let signright = document.querySelector(".right");
let img = document.querySelector(".img")
let red = true , yellow = false , green = false; 
signright.style.display = "none";
signleft.style.display = "none";
let container = 0;

let timer = setInterval(() => {

    if (container === -1 && red) {
        green = true;
        img.style.display ="none"

        setTimeout(function() {
            signleft.style.display = "block";
            signright.style.display = "none";
        } );
        setTimeout(function() {
            signleft.style.display = "none";
            signright.style.display = "block";
        }, 20000);
            signleft.style.display = "block";
            signright.style.display = "block";
    
        red = false;
        showtimer.style.border = "5px solid rgb(28, 255, 39)";
        showtimer.style.color = "rgb(28, 255, 39)";
        showtimer.style.boxShadow = "0px 0px 50px rgb(28, 255, 39)";
        container = 40;
        
    }
   

    else if (container === -1 && yellow) {
        red = true;
        signleft.style.display = "none";
        signright.style.display = "none";
        img.style.display ="block"

        yellow = false;
        showtimer.style.border = "5px solid rgb(255, 28, 28)";
        showtimer.style.color = "rgb(255, 28, 28)";
        showtimer.style.boxShadow = "0px 0px 50px rgb(255, 28, 28)";
        container = 15;
    }

    else if (container === -1 && green) {
        yellow = true;
        green = false;
        img.style.display ="none"

        signleft.style.display = "none";
        signright.style.display = "none";

        showtimer.style.border = "5px solid rgb(255, 213, 28";
        showtimer.style.color = "rgb(255, 213, 28";
        showtimer.style.boxShadow = "0px 0px 50px rgb(255, 213, 28";
        container = 5;
    }

    if (red) {
        redshow.classList.remove("disable");
        greenshow.classList.add("disable");
        yellowshow.classList.add("disable");
    }
    if (yellow) {
        yellowshow.classList.remove("disable");
        greenshow.classList.add("disable");
        redshow.classList.add("disable");
    }
    if (green) {
        greenshow.classList.remove("disable");
        redshow.classList.add("disable");
        yellowshow.classList.add("disable");
    }
    

    if (container < 60){
        showtimer.innerText = `${container}`
    }
   
    container--;

},1000)