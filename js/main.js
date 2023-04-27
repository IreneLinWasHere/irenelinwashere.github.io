document.querySelector('#luna').addEventListener('click', moonWeight)
document.querySelector('#mars').addEventListener('click', marsWeight)
document.querySelector('#jupiter').addEventListener('click', jupiterWeight)
document.querySelector('#pluto').addEventListener('click', plutoWeight)
document.querySelector('#sun').addEventListener('click', sunWeight)

function moonWeight() {
  let weight = document.querySelector('#weight').value
  weight = Math.round(weight * 100 * 0.167) / 100
  document.querySelector('#result').innerText = `You would weigh ${weight} pounds on the Moon.`
  document.body.style.backgroundImage = 'url(assets/moon.jpg)'
}

function marsWeight() {
  let weight = document.querySelector('#weight').value
  weight = Math.round(weight * 100 * 0.38) / 100
  document.querySelector('#result').innerText = `You would weigh ${weight} pounds on Mars.`
  document.body.style.backgroundImage = 'url(assets/mars.jpg)'
}

function jupiterWeight() {
  let weight = document.querySelector('#weight').value
  weight = Math.round(weight * 100 * 2.34) / 100
  document.querySelector('#result').innerText = `You would weigh ${weight} pounds on Jupiter, but you cannot stand on the planet's surface.`
  document.body.style.backgroundImage = 'url(assets/jupiter.jpg)'
}

function plutoWeight() {
  let weight = document.querySelector('#weight').value
  weight = Math.round(weight * 100 * 0.06) / 100
  document.querySelector('#result').innerText = `You would weigh ${weight} pounds on Pluto, but it is too cold and you would freeze to death.`
  document.body.style.backgroundImage = 'url(assets/pluto.jpg)'
}

function sunWeight() {
  document.querySelector('#result').innerText = `Why are you trying to stand on the sun? It's way too hot and you would burn to death.`
  document.body.style.backgroundImage = 'url(assets/sun.jpg)'
}


