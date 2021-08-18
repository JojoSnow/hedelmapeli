let playMoney = 50;
let betMoneyArray = [1, 2, 3];
let winMoney = [2, 4, 6, 8];
let randomImgArray = ['img/apple.png', 'img/cherry.png', 'img/pear.png', 'img/watermelon.png'];

let betEvent = document.querySelectorAll('.bet-item');
let btnClick = document.getElementById('button');

betEvent.forEach(bet => bet.addEventListener('mouseup', selectBet));
btnClick.addEventListener('click', playGame);

function selectBet(event) {
    let betTarget = event.target;
    let target = '';

    if(betTarget === document.getElementById('one-bet')) {
        target = betTarget.getAttribute('id');
    } else if (betTarget === document.getElementById('two-bet')) {
        target = betTarget.getAttribute('id');
    } else if (betTarget === document.getElementById('three-bet')) {
        target = betTarget.getAttribute('id');
    } else {
        console.log('bet select error');
    }

    switch(target) {
        case 'one-bet':
            document.getElementById('bet-money').innerHTML = betMoneyArray[0];
            break;
        case 'two-bet':
            document.getElementById('bet-money').innerHTML = betMoneyArray[1];
            break;
        case 'three-bet':
            document.getElementById('bet-money').innerHTML = betMoneyArray[2];
            break;
        default:
            console.log('innerHTML bet error');
            break;
    }
}

function playGame() {
    let randomNum = Math.floor(Math.random() * randomImgArray.length);
    let imgOne = document.getElementById('slot-one');
    let imgTwo = document.getElementById('slot-two');
    let imgThree = document.getElementById('slot-three');
    let imgFour = document.getElementById('slot-four');
    
    imgOne.scr = randomImgArray[randomNum];
}