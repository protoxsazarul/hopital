function test() {
//    declaration de la variable pour recupérer l'id du bouton clické
    var idclick = document.getElementById(this.id);
//    supréssion de la couleur des bouton
    $(".bouton").removeClass("rouge");
    $(".text").hide();
    $("#" + idclick.id).addClass("rouge");
//$("#"+idclick.id +"_par").show();
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
$(".bouton").on("click", test);

