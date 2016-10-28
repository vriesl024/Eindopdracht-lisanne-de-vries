var doIt = document.querySelector('.accountgegevens');
var doItTwo = document.querySelector('.accountgegevens1');
var buttonGrey = document.querySelector('.verander');
var button = document.querySelector('.next');

//===============================================//

var color = function () {
    doIt.classList.toggle('do');
    doItTwo.classList.toggle('do');
    buttonGrey.classList.toggle('do');
}

button.addEventListener('click', color);

//===============================================//