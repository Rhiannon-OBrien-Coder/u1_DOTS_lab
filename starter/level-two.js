/*
 * DOTS: Level Two
 *
 */
// let ball = document.querySelectorAll('.js-ball')
// let levelWinner = document.querySelector('.level-winner')
// let score = 0
// console.log(ball)

// ball[0].addEventListener('click', function() {
//     let scoreDisplay = document.querySelector('.js-score')
//     score = score + 10
//     console.log(score)
//     scoreDisplay.innerText = score
//     if (score >= 100){
//         levelWinner.style.opacity = 1
//     }
// })

// ball[1].addEventListener('click', function() {
//     let scoreDisplay = document.querySelector('.js-score')
//     score = score + 10
//     console.log(score)
//     scoreDisplay.innerText = score
//     if (score >= 100){
//         levelWinner.style.opacity = 1
//     }
// })

// ball[2].addEventListener('click', function() {
//     let scoreDisplay = document.querySelector('.js-score')
//     score = score + 10
//     console.log(score)
//     scoreDisplay.innerText = score
//     if (score >= 100){
//         levelWinner.style.opacity = 1
//     }
// })

let balls = document.querySelectorAll('.js-ball')
let levelWinner = document.querySelector('.level-winner')
let score = 0

for (let i = 0; i < balls.length; i++){
    balls[i].addEventListener('click', function() { 
        let scoreDisplay = document.querySelector('.js-score')
        score = score + 10
        console.log(score)
        scoreDisplay.innerText = score
        if (score >= 100){
            levelWinner.style.opacity = 1
        }
})}