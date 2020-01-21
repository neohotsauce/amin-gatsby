/**MENU**/
$(document).ready(function() {
  $("#menubutton").on("click", e => {
    $("#mainmenu").toggle();
  });

  $("#menusection ul li a").click(function() {
    $("#mainmenu").fadeOut(1000);
    $("#menubutton").click();
  });
});
/**carousel**/

$("#carouselExampleIndicators").carousel({
  interval: 1500,
  cycle: true
});
