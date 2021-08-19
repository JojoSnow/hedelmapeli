let playMoney = 50;
let chosenBet = 1;
const betMoneyArray = [1, 2, 3];
const winMoneyArray = [2, 4, 6, 8];
const randomImgArray = ['/img/apple.png', '/img/cherry.png', '/img/pear.png', '/img/watermelon.png'];

let betEvent = document.querySelectorAll('.bet-item');
let btnClick = document.getElementById('button');

betEvent.forEach(bet => bet.addEventListener('mouseup', selectBet));
btnClick.addEventListener('click', startGame);

function selectBet(event) {
    let betTarget = event.target;
    let target = '';

    if (betTarget === document.getElementById('one-bet')) {
        target = betTarget.getAttribute('id');
    } else if (betTarget === document.getElementById('two-bet') && playMoney >= 2) {
        target = betTarget.getAttribute('id');
    } else if (betTarget === document.getElementById('three-bet') && playMoney >= 3) {
        target = betTarget.getAttribute('id');
    } else {
        console.log('bet select error');
    }

    switch(target) {
        case 'one-bet':
            document.getElementById('bet-money').innerHTML = betMoneyArray[0];
            chosenBet = 1;
            break;
        case 'two-bet':
            if (playMoney >= 2) {
                document.getElementById('bet-money').innerHTML = betMoneyArray[1];
                chosenBet = 2;
                break;
            }
        case 'three-bet':
            if (playMoney >= 3) {
                document.getElementById('bet-money').innerHTML = betMoneyArray[2];
                chosenBet = 3;
                break;
            }
        default:
            console.log('innerHTML bet error');
            break;
    }
}

function startGame() {
    randomizeSlots();
    countMoney();
    if (playMoney == 0) {
        endGame();
    }
}

function randomizeSlots() {
    
    const slots = document.querySelectorAll('.roulette-list-item');

    slots.forEach(slot => slot.firstElementChild.remove());

    for (let i = 0; slots.length > i; i++) {
        let randomNum = Math.floor(Math.random() * randomImgArray.length);
        let img = document.createElement('img');
        img.src = randomImgArray[randomNum];
        img.alt = 'random-image';
        slots[i].appendChild(img);
    }
}

function countMoney() {

    let slots = document.querySelectorAll('.roulette-list-item img');
    let apple = 0;
    let cherry = 0;
    let pear = 0;
    let watermelon = 0;

    for (let i = 0; slots.length > i; i++) {
        let slotSrc = slots[i].getAttribute('src');
        switch (slotSrc) {
            case '/img/apple.png':
                apple++;
                break;
            case '/img/cherry.png':
                cherry++;
                break;
            case '/img/pear.png':
                pear++;
                break;
            case '/img/watermelon.png':
                watermelon++;
                break;
            default:
                console.log('slots win/lose error');
        }
    }

    const winOrLose = document.getElementById('tell-text');
    let money = document.getElementById('money');

    if (apple == 4) {
        playMoney = playMoney + (winMoneyArray[0] * chosenBet / 2);
        money.innerText = playMoney;
        winOrLose.innerText = 'Voitto!';
    } else if (cherry == 4) {
        playMoney = playMoney + (winMoneyArray[1] * chosenBet / 2);
        money.innerText = playMoney;
        winOrLose.innerText = 'Voitto!';
    } else if (pear == 4) {
        playMoney = playMoney + (winMoneyArray[2] * chosenBet / 2);
        money.innerText = playMoney;
        winOrLose.innerText = 'Voitto!';
    } else if (watermelon == 4) {
        playMoney = playMoney + (winMoneyArray[3] * chosenBet / 2);
        money.innerText = playMoney;
        winOrLose.innerText = 'Voitto!';
    } else {
        playMoney = playMoney - chosenBet;
        money.innerText = playMoney;
        winOrLose.innerText = 'Ei voittoa';
    }

    if (playMoney < chosenBet) {
        tooBigBet();
    } 
}

function tooBigBet() {
    document.getElementById('tell-text').innerText = 'Panoksesi on liian suuri \nVaihda panostasi';

    if (chosenBet > playMoney && playMoney <= 1) {
        betEvent.forEach(bet => bet.removeEventListener('mouseup', selectBet));
        document.getElementById('one-bet').addEventListener('mouseup', selectBet);
    } else if (chosenBet > playMoney && playMoney <= 2) {
        betEvent.forEach(bet => bet.removeEventListener('mouseup', selectBet));
        document.getElementById('one-bet').addEventListener('mouseup', selectBet);
        document.getElementById('two-bet').addEventListener('mouseup', selectBet);        
    }
}

function endGame() {
    btnClick.removeEventListener('click', startGame);
    document.getElementById('tell-text').innerText = 'Rahasi loppuivat';
    
}