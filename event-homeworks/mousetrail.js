let dots = [];

// Event listener for mouse movement, which then calls the createDot function
window.addEventListener('mousemove', function(mouse) {
   CreateDot(mouse);
});

// CreateDot function creates a new div element, which gets the trail classname, so that it creates the dot. It gets the mouse position and edits the style, so that it creates the dot where the mouse is moved.
// For the deletion of the old dots I used timeout instead of for loops and arrays. Only downside is that at the moment it creates as many divs as it can in the given timeout period if you keep moving your mouse.
// Problem being when you go to the inspect mode at the same time as moving your mouse on the screen, it will be slow.
function CreateDot(mouse) {
  let dot = document.createElement('div');
  dot.className = 'trail';
  dot.style.position = 'fixed';
  dot.style.top = mouse.pageY + 'px';
  dot.style.left = mouse.pageX + 'px';
  document.body.appendChild(dot);
  window.setTimeout(function() {
    document.body.removeChild(dot);
  }, 400); //Editing this timeout, can give the trail a longer or shorter lifetime.
}

// This is the array way of doing the trail. So the function first creates a dot element (div), and then it checks if there are more than 30 divs, if not then it gives the classname and other styles for the dot to follow and appends it to the body.
// In the case of more than 30 dots "alive" at the moment, it will then remove the first dot of the body.
// function CreateDot(mouse) {
//   let dot = document.createElement('div');
//   if(document.getElementsByTagName('div').length <= 30){
//     dot.className = 'trail';
//     dot.style.position = 'fixed';
//     dot.style.top = mouse.pageY + 'px';
//     dot.style.left = mouse.pageX + 'px';
//     document.body.appendChild(dot);
//   }else{
//     document.body.removeChild(document.getElementsByTagName('div')[0]);
//   }
//
// }