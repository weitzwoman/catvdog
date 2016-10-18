$(document).ready(function() {
  $("button#sillycat").click(function() {
    $("ul.cat").append("<li>Meow!</li>");
  
  });

  $("button#sillydog").click(function() {
    $("ul.dog").append("<li>Bark!</li>");

  });

});
