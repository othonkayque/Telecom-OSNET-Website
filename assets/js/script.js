const checkboxElement = document.getElementById("flexSwitchCheckDefault");

var planoCidade = document.querySelector(".cidade");
var planoSitio = document.querySelector(".sitio");

checkboxElement.addEventListener("change", function() {
    if (this.checked) {
        planoCidade.style = "display: none";
        planoSitio.style = "display: block";
    }
    else {
        planoCidade.style = "display: block";
        planoSitio.style = "display: none";
    }
});


function infoNav() {
    var navbarinfo = document.querySelector(".icons-1");
    navbarinfo.classList.toggle("show");
}