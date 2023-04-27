let total = 0

document.querySelector('#zero').addEventListener('click', makeZero)
document.querySelector('#addThree').addEventListener('click', add3)
document.querySelector('#addNine').addEventListener('click', add9)
document.querySelector('#minusTwo').addEventListener('click', minus2)
document.querySelector('#timesTwo').addEventListener('click', mult2)

function makeZero() {
    total = 0
    document.querySelector('#result').innerText = total
}

function add3() {
    total += 3
    document.querySelector('#result').innerText = total
}

function add9() {
    total+= 9 
    document.querySelector('#result').innerText = total
}

function minus2() {
    total-= 2
    document.querySelector('#result').innerText = total
}

function mult2() {
    total *= 2
    document.querySelector('#result').innerText = total
}

