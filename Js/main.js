$(document).ready( function() {
 $("#meow").click( function(){
   $("#animals").append("<img class='animal' src='Images/cat.png' alt='Cute Cat'/> ");
 });

 $("#bork").click( function(){
   $("#animals").append("<img class='animal' src='Images/bork.png' alt='bork dog'/> ");
 });
});
