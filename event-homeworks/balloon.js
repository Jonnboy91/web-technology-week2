document.addEventListener('keydown', balloon)

function balloon(event){
  if (event.key === "ArrowUp") {
    updateBalloonSize('balloon', 1.1, 'up')
  }
  if (event.key === "ArrowDown"){
    updateBalloonSize('balloon', 0.9, 'down')
  }

};

function updateBalloonSize(element, amount, direction) {
    element = document.getElementById(element)
    let balloonSize = window.getComputedStyle(element).fontSize
  let balloonSizeValue = parseInt(balloonSize.split('px')[0])

  if(direction === 'up'){
    balloonSizeValue *= amount
  } else{
    balloonSizeValue *= amount
  }

  if(balloonSizeValue <= 150){
    console.log(balloonSize)
    balloonSize = Math.ceil(balloonSizeValue) + 'px';
    element.style.fontSize = balloonSize

  } else{
    boom(element)
  }
}

function boom(element) {
  element.firstChild.nodeValue = '💥';
  document.removeEventListener('keydown', balloon);
}



