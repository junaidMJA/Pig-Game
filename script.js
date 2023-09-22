'use-strict';

const p1score = document.querySelector('.p1score')
const p2score = document.querySelector('.p2score')
const p1current = document.querySelector('.p1current')
const p2current = document.querySelector('.p2current')

const sc1 = document.querySelector('.sc1')
const cc1 = document.querySelector('.cc1')
const sc2 = document.querySelector('.sc2')
const cc2 = document.querySelector('.cc2')

const newGame = document.querySelector('.new-game')
const rollDice = document.querySelector('.roll-dice')
const hold = document.querySelector('.hold')

const image = document.querySelector('.dice')

const containerBg = document.querySelector('.container-bg')

var current = 1


rollDice.addEventListener('click', () => {
    let num = Math.floor((Math.random()*6)+1)
    image.style.visibility = 'visible'
    image.src = `Dice/dice-${num}.png`

    if (current == 1) {
        if (num == 1) {
            p1current.innerText = 0
            current = 2
            containerBg.classList.add('container-bg-temp')
            sc1.classList.add('sc1-temp')
            cc1.classList.add('cc1-temp')
            sc2.classList.remove('sc2-temp')
            cc2.classList.remove('cc2-temp')
        }
        else {
            p1current.innerText = Number(p1current.innerText) + num
        }
        
    }
    else {
        if (num == 1) {
            p2current.innerText = 0
            current = 1
            containerBg.classList.remove('container-bg-temp')
            sc2.classList.add('sc2-temp')
            cc2.classList.add('cc2-temp')
            sc1.classList.remove('sc1-temp')
            cc1.classList.remove('cc1-temp')
        }
        else {
            p2current.innerText = Number(p2current.innerText) + num
        }
    }
})

hold.addEventListener('click', () => {
    if (current == 1) {
        p1score.innerText = Number(p1score.innerText) + Number(p1current.innerText)
        p1current.innerText = 0
        if (p1score.innerText >= 100) {
            image.style.visibility = 'hidden'
            rollDice.style.pointerEvents = 'none'
            hold.style.pointerEvents = 'none'
        }
        else {
            current = 2
            containerBg.classList.add('container-bg-temp')
            sc1.classList.add('sc1-temp')
            cc1.classList.add('cc1-temp')
            sc2.classList.remove('sc2-temp')
            cc2.classList.remove('cc2-temp')
        }
    }
    else {
        p2score.innerText = Number(p2score.innerText) + Number(p2current.innerText)
        p2current.innerText = 0
        if (p2score.innerText >= 100) {
            image.style.visibility = 'hidden'
            rollDice.style.pointerEvents = 'none'
            hold.style.pointerEvents = 'none'
        }
        else {
            current = 1
            containerBg.classList.remove('container-bg-temp')
            sc2.classList.add('sc2-temp')
            cc2.classList.add('cc2-temp')
            sc1.classList.remove('sc1-temp')
            cc1.classList.remove('cc1-temp')
        }
    }
})

newGame.addEventListener('click', () => {
    image.style.visibility = 'hidden'
    current = 1
    p1score.innerText = 0
    p2score.innerText = 0
    p1current.innerText = 0
    p2current.innerText = 0
    rollDice.style.pointerEvents = 'auto'
    hold.style.pointerEvents = 'auto'
    containerBg.classList.remove('container-bg-temp')
    sc2.classList.add('sc2-temp')
    cc2.classList.add('cc2-temp')
    sc1.classList.remove('sc1-temp')
    cc1.classList.remove('cc1-temp')
})