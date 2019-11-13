onload = function(){
    base64 = new URLSearchParams(window.location.search).get("img");
    image = document.getElementById("img");

    addHeaderEvents();

    var url = "http://localhost:5000/upload";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url + "?img=" + base64, false);
    xhttp.send();

    base64_images = xhttp.response.split('*')

    image.src = base64_images[0];
}

function addHeaderEvents() {
    var header = document.getElementById("header");
    var btns = header.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}

function uploaded() {
    cleanAll();
    image.src = base64;
}

function change(index) {
    cleanAll();
    image.src = base64_images[index - 1];
}

function cleanAll() {
    var all = document.getElementById("all");
    while (all.firstChild) {
        all.removeChild(all.firstChild);
    }
}

function showAll() {
    var all = document.getElementById("all");
    image.src = base64;
    base64_images.forEach(element => {
        var img = document.createElement("img");
        img.src = element;
        all.appendChild(img);
    });
}