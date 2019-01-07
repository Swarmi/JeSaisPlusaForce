var nav = document.getElementById('nav');
// var liste = document.querySelectorAll('#nav>ul>li');


window.onscroll = function(){
    if (window.pageYOffset > 100){
        nav.style.background = "#007bff";
        // liste.style.color = "white";
        nav.className = "navbar navbar2";
        nav.style.boxShadow = "0px 4ps 2px grey";
    }
    else{
        nav.style.background = "transparent";
        // liste.style.color = "black";
        nav.className = "navbar";

        nav.style.boxShadow = "none";
    }
}