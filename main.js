let playMoney = 50;
let betMoneyArray = [1, 2, 3];
let winMoney = [2, 4, 6, 8];
let randomImg = ['/img/apple.png', '/img/cherry.png', '/img/pear.png', '/img/watermelon.png'];

let bets = document.querySelectorAll('.bet-item')

let betMoney = document.getElementById('bet-money');

bets.forEach(bet => bet.addEventListener('click', selectBet));

function selectBet(event) {
    let betTarget = event.target;
    let target = '';

    if(betTarget = document.getElementById('one-bet')) {
        target = betTarget.getAttribute('id');
    } else if (betTarget = document.getElementById('two-bet')) {
        target = betTarget.getAttribute('id');
    } else if (betTarget = document.getElementById('three-bet')) {
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