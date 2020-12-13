function formhandling() {
var result = document.getElementById("result")
var sidea = document.forms["form"]["sidea"].value;
var sideb = document.forms["form"]["sideb"].value;

   result.innerHTML = "hypotenuse = " + Math.sqrt(Math.pow(sidea, 2)+Math.pow(sideb, 2));
    return false;
  }
