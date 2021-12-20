const containerBoxesOne = document.querySelector('.container-box-1');
const containerBoxesTwo = document.querySelector('.container-box-2');
const containerBoxesThree = document.querySelector('.container-box-3');
const buttonOne = document.getElementById('level-1');
const buttonTwo = document.getElementById('level-2');
const buttonThree = document.getElementById('level-3');
const numbers = [];

function getRandom (min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

// while (numbers.length < 16) {
//     const randomNumber = getRandom(1, 100);
//     if(!numbers.includes(randomNumber)) {
//         boxCreated.classList.add ('box-red');
//     }
// }


function createNewBox(container, number) {
    const boxCreated = document.createElement('div');
    boxCreated.className = 'box';
    boxCreated.innerHTML = number;
    container.append(boxCreated);

    boxCreated.addEventListener('click', function() {
        // this.classList.toggle('box-blue');
        while (numbers.length < 16) {
        const randomNumber = getRandom(1, 100);
        if(!numbers.includes(randomNumber)) {
            this.classList.add('box-red');
        } else {
            this.classList.add('box-blue');
        }
    }
    });
}

buttonOne.addEventListener('click', function() {
    this.classList.toggle('box-grey');
    containerBoxesOne.innerHTML = "";
    containerBoxesTwo.innerHTML = "";
    containerBoxesThree.innerHTML = "";
    for (let i = 1; i <= 100; i++) {
        createNewBox(containerBoxesOne, i, getRandom);
    }
});

buttonTwo.addEventListener('click', function() {
    this.classList.toggle('box-grey');
    containerBoxesOne.innerHTML = "";
    containerBoxesTwo.innerHTML = "";
    containerBoxesThree.innerHTML = "";
    for (let i = 1; i <= 81; i++) {
        createNewBox(containerBoxesTwo, i);
    }
});

buttonThree.addEventListener('click', function() {
    this.classList.toggle('box-grey');
    containerBoxesOne.innerHTML = "";
    containerBoxesTwo.innerHTML = "";
    containerBoxesThree.innerHTML = "";
    for (let i = 1; i <= 49; i++) {
        createNewBox(containerBoxesThree, i);
    }
});