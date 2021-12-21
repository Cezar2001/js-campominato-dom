const containerBoxesOne = document.querySelector('.container-box-1');
const containerBoxesTwo = document.querySelector('.container-box-2');
const containerBoxesThree = document.querySelector('.container-box-3');
const buttonOne = document.getElementById('level-1');
const buttonTwo = document.getElementById('level-2');
const buttonThree = document.getElementById('level-3');

function getRandom (min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

function gameOver(win, score) {
    const modal = document.createElement('div');
    modal.className = 'game-over';
    if (win) {
        modal.classList.add('winner');
        modal.innerText = 'Hai vinto! ';
    } else {
        modal.classList.add('loser');
        modal.innerText = 'Hai perso! ';
    }

    modal.innerText += `Il tuo punteggio è: ${score}`;

    const body = document.getElementsByTagName('body')[0];
    body.append(modal);
}

function createNewBox(container, number, listBombs) {
    const boxCreated = document.createElement('div');
    boxCreated.className = 'box';
    boxCreated.innerHTML = number;
    container.append(boxCreated);
    let clicked = 0;

    boxCreated.addEventListener('click', function() {
        if(listBombs.includes(number)) {
            this.classList.add('box-red');
            gameOver(false, clicked, container)
        } else {
            this.classList.add('box-blue');
            clicked++;

            if(score === maxCells - 16) {
                gameOver(true, clicked, container);
            }
        }
    });
}

function generaBombe(min, max) {
    let listBombs = [];
    while (listBombs.length < 16) {
        const randomNumber = getRandom(min, max);
        if(!listBombs.includes(randomNumber)) {
            listBombs.push(randomNumber);
        }
    }
    return listBombs;
}

buttonOne.addEventListener('click', function() {
    this.classList.toggle('box-grey');
    containerBoxesOne.innerHTML = "";
    containerBoxesTwo.innerHTML = "";
    containerBoxesThree.innerHTML = "";
    let listBombs = generaBombe(1, 100);
    for (let i = 1; i <= 100; i++) {
        createNewBox(containerBoxesOne, i, listBombs);
    }
});

buttonTwo.addEventListener('click', function() {
    this.classList.toggle('box-grey');
    containerBoxesOne.innerHTML = "";
    containerBoxesTwo.innerHTML = "";
    containerBoxesThree.innerHTML = "";
    let listBombs = generaBombe(1, 81);
    for (let i = 1; i <= 81; i++) {
        createNewBox(containerBoxesTwo, i, listBombs);
    }
});

buttonThree.addEventListener('click', function() {
    this.classList.toggle('box-grey');
    containerBoxesOne.innerHTML = "";
    containerBoxesTwo.innerHTML = "";
    containerBoxesThree.innerHTML = "";
    let listBombs = generaBombe(1, 49);
    for (let i = 1; i <= 49; i++) {
        createNewBox(containerBoxesThree, i, listBombs);
    }
});