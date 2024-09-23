/*
 * DOTS: Level One
 *
 */

let ball = document.querySelector('.js-ball')
let levelWinner = document.querySelector('.level-winner')
let score = 0

ball.addEventListener('click', function() {
    let scoreDisplay = document.querySelector('.js-score')
    score = score + 10
    console.log(score)
    scoreDisplay.innerText = score
    if (score >= 100){
        levelWinner.style.opacity = 100
    }
})