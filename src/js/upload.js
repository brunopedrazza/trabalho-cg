onload = function(){
    this.document.getElementById("submit").style.display = "none";
    document.getElementById("inp").addEventListener("change", readFile);
}

function readFile() {
    if (this.files && this.files[0]) {
      
      var file_reader = new FileReader();
      
      file_reader.addEventListener("load", function(e) {
        document.getElementById("img").src = e.target.result;
        document.getElementById("submit").style.display = "inline";
        var base64 = document.getElementById("base64");
        base64.value = e.target.result;
      }); 
      
      file_reader.readAsDataURL(this.files[0]);
    }
  }