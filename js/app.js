let dice = document.querySelector('.dice')
let h1 = document.querySelector('h1')
let p = document.querySelector('p')


dice.onclick = getAdvice

function getAdvice(){
    fetch('https://api.adviceslip.com/advice',{
        cache: 'no-cache'
    })
    .then(res => res.json())
    .then(insertAdvice)
}

function insertAdvice(res) {
    h1.textContent = `advice #${res.slip.id}`
    p.textContent = res.slip.advice
}

getAdvice()