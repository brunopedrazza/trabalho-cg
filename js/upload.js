onload = function(){
    this.document.getElementById("submit").addEventListener("click", submitImage);
}

var loadFile = function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    var button = this.document.getElementById("button");
    if (!button.firstChild) {
        createSendButton(button);
    }
};

function submitImage(){

}

function createSendButton(button){
    var objButtonSubmit = document.createElement("input");
    var text = document.createTextNode("Enviar");
    objButtonSubmit.setAttribute("type", "submit");
    objButtonSubmit.setAttribute("form", "form");
    objButtonSubmit.appendChild(text);
    button.appendChild(objButtonSubmit);
}