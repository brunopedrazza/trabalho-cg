onload = function(){
    var base64 = new URLSearchParams(window.location.search).get("img");

    var url = "http://localhost:5000/upload";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url + "?img=" + base64, false);
    xhttp.send();

    var image1 = new Image();
    var image2 = new Image();
    var response = xhttp.response;
    var images = response.split('*')
    image1.src = 'data:image/jpeg;base64,' + images[0].substring(3);
    img1.appendChild(image1);
    image2.src = 'data:image/jpeg;base64,' + images[1].substring(3);
    img2.appendChild(image2);
}