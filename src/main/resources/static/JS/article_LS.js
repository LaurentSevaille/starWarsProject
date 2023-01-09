function myFunction() {
    var x = document.getElementById("menu");
    if (x.style.display === "none") {
      x.style.display = "block";
      $("#button_title").html("Hide");
    } else {
      x.style.display = "none";
      $("#button_title").html("Show");
    }
}