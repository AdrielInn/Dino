var dino = document.getElementById("dino");
var bloque = document.getElementById("bloque");

function saltar(){
    if (dino.classList != "animar"){
    dino.classList.add("animar");
    }
    setTimeout(() => { dino.classList.remove("animar") }, 500);
}

var muere = setInterval(() => {
    var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    var bloqueLeft = parseInt(window.getComputedStyle(bloque).getPropertyValue("left"));
    if(bloqueLeft < 20 && bloqueLeft < 0 && dinoTop >= 130){
        bloque.style.animation = "none";
        bloque.style.display = "none"
        alert("Perdiste");
        location.reload();
    }
},10)