var dino = document.getElementById("dino");
var bloque = document.getElementById("bloque");

function saltar(){
    if (dino.classList != "animar"){
    dino.classList.add("animar");
    }
    setTimeout(function(){
        dino.classList.remove("animar")
    },500);
}