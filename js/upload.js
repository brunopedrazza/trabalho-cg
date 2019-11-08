onload = function(){
    this.document.getElementById("submit").style.display = "none";
}

var loadFile = function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    this.document.getElementById("submit").style.display = "inline";
};