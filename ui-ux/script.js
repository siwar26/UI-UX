document.addEventListener("DOMContentLoaded", function() {
    // Liste des palettes de couleurs possibles
    var rgb1 = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
    var rgb2 = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";

    // var palettes = [
    //     ["#3498db", "#2ecc71", "#e74c3c", "#f39c12"],
    //     ["#1abc9c", "#9b59b6", "#e67e22", "#7f8c8d"],
    //     ["#2c3e50", "#f1c40f", "#e67e22", "#16a085"]
    //     // Ajoutez autant de palettes que vous le souhaitez
    // ];

    // Sélectionnez une palette de couleurs aléatoire
    //var randomPalette = palettes[Math.floor(Math.random() * palettes.length)];

    // Appliquez les couleurs au contenu de la page
    document.getElementById("content").style.backgroundColor= rgb1;
    document.getElementById("content").style.color = rgb2;

    document.getElementById("content").style.fontSize= Math.floor(Math.random()*36-10)+"px";
});
