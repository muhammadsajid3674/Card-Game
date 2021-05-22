
var isFirstImag = true;
function swapImage1(element) {
    if (isFirstImag) {
        element.src = './images/King Card.png';
        isFirstImag = false;
    }
    else {
        element.src = './images/Playing Card Front Facing.png';
        isFirstImag = true;
        alert('You have lose:( Better luck for next time.')
    }
}
var isFirstImag = true;
function swapImage(element) {
    if (isFirstImag) {
        element.src = './images/Jokar Card.jpg';
        isFirstImag = false;
        
    }
    else {
        element.src = './images/Playing Card Front Facing.png';
        isFirstImag = true;
        alert('Congrats you have won:)')
    }
}


