function highlightMenu(menuItem) {
  $('.tm-page-link').removeClass('active');
  menuItem.addClass('active');
}
function fade(){
  var x = document.getElementsByClassName("tm-list-item")[0]
  x.style.animation = "pulse 0.5s ease-in 3s"
  console.log(x)
}
function initPage() {
  let pageId = location.hash;

  if(pageId) {
    highlightMenu($(`.tm-page-link[href^="${pageId}"]`)); 
    showPage($(pageId));
  }
  else {
    pageId = $('.tm-page-link.active').attr('href');
    showPage($(pageId));
  }
}
function popup(){
  
  alert(
  document.getElementById("name").value +" "+
  document.getElementById("email").value  +" "+
  document.getElementById("mobil").value  +" "+
  document.getElementById("message").value);
  
// Get the modal

// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
}