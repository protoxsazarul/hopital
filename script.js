var Bouton1 = document.getElementById("bouton1");
var Bouton2 = document.getElementById("bouton2");
var Bouton3 = document.getElementById("bouton3");
var Bouton4 = document.getElementById("bouton4");
var Bouton5 = document.getElementById("bouton5");
var Bouton6 = document.getElementById("bouton6");

function B1() {
    $(".bouton").removeClass("rouge");
    $(".text").hide();
    $("#epaule").show();
    $("#bouton1").addClass("rouge");
}

function B2() {
    $(".bouton").removeClass("rouge");
    $(".text").hide();
    $("#coude").show();
    $("#bouton2").addClass("rouge");
}

function B3() {
    $(".bouton").removeClass("rouge");
    $(".text").hide();
    $("#poignet").show();
    $("#bouton3").addClass("rouge");
}

function B4() {
    $(".bouton").removeClass("rouge");
    $(".text").hide();
    $("#hanche").show();
    $("#bouton4").addClass("rouge");
}

function B5() {
    $(".bouton").removeClass("rouge");
    $(".text").hide();
    $("#genoux").show();
    $("#bouton5").addClass("rouge");
}

function B6() {
    $(".bouton").removeClass("rouge");
    $(".text").hide();
    
    $("#cheville").show();
    $("#bouton6").addClass("rouge");
}
function test(){
    var idclick = document.getElementById(this.id);
    console.log(idclick)
    var idid= idclick.id
    console.log(idid)
}
$(".bouton").on("click",test);
// Ecouteur d'evenement "click" qui APPEL B*
Bouton1.addEventListener("click", B1);
Bouton2.addEventListener("click", B2);
Bouton3.addEventListener("click", B3);
Bouton4.addEventListener("click", B4);
Bouton5.addEventListener("click", B5);
Bouton6.addEventListener("click", B6);
