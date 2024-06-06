var change = document.querySelector("div");
var largesize = document.querySelector(".largesize");
var smallsize = document.querySelector(".smallsize");

function large(){
    change.classList.add("largesize")
}
function small(){
change.classList.add("smallsize")
}

largesize.onclick = large;
smallsize.onclick = small;
