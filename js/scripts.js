var meowCount = 0;
var barkCount = 0;

$(document).ready(function() {
  $("button#sillycat").click(function() {
    $("ul.cat").append("<li>Meow!</li>");
    meowCount++;
    if (meowCount === 5) {
      alert("Cat wins!");
    }
  });

  $("button#sillydog").click(function() {
    $("ul.dog").append("<li>Bark!</li>");
    barkCount++;
    if (barkCount === 5) {
      alert("Dog wins!");
    }
  });

});
