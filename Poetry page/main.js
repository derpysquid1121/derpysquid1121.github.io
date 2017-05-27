
function sayDank(){
    var dank = new Audio("dank.mp3");
    dank.play();
}

$("#dank").on("click", sayDank);
