function test() {
//    declaration de la variable pour recupérer l'id du bouton clické
    var idclick = document.getElementById(this.id);
//    supréssion de la couleur des bouton
    $(".bouton").removeClass("rouge");
//    cache le text a chaque click
    $(".text").hide();
//    applique la couleur rouge au bouton
    $("#" + idclick.id).addClass("rouge");
//    choisi le texte a afficher selon l'id du bouton cliquer
    if (idclick.id == "bouton1") {
        $("#epaule").show();
    } else if (idclick.id == "bouton2") {
        $("#coude").show();
    } else if (idclick.id == "bouton3") {
        $("#poignet").show();
    } else if (idclick.id == "bouton4") {
        $("#hanche").show();
    } else if (idclick.id == "bouton5") {
        $("#genoux").show();
    } else if (idclick.id == "bouton6") {
        $("#cheville").show();
    }
}
//sert a attrapé le moment les bouton sont clicke
$(".bouton").on("click", test);

