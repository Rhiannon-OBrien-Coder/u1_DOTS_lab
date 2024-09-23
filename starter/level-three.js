/*
 * DOTS: Level Three
 *
 */
// let ball = document.querySelectorAll('.js-ball')
// let levelWinner = document.querySelector('.level-winner')
// let score = 0
// console.log(ball)

// ball[0].addEventListener('click', function() {
//     let scoreDisplay = document.querySelector('.js-score')
//     score = score + 20
//     console.log(score)
//     scoreDisplay.innerText = score
//     if (score >= 100){
//         levelWinner.style.opacity = 1
//     }
// })

// ball[1].addEventListener('click', function() {
//     let scoreDisplay = document.querySelector('.js-score')
//     score = score + 5
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



// let balls = document.querySelectorAll('.js-ball')
// let levelWinner = document.querySelector('.level-winner')
// let score = 0

// for (let i = 0; i < balls.length; i++){
//     balls[i].addEventListener('click', function() { 
//         let scoreDisplay = document.querySelector('.js-score')
//         if (i === 0) {
//             score = score + 20
//         } else if (i === 1) {
//             score = score + 5
//         } else {
//             score = score + 10
//         }
//         scoreDisplay.innerText = score
//         if (score >= 100){
//             levelWinner.style.opacity = 1
//         }
// })}



let balls = document.querySelectorAll('.js-ball')
let levelWinner = document.querySelector('.level-winner')
let score = 0

for (let i = 0; i < balls.length; i++){
    balls[i].addEventListener('click', function() { 
        let scoreDisplay = document.querySelector('.js-score')
        score = score + parseInt(balls[i].getAttribute('data-increment'))
        scoreDisplay.innerText = score
        if (score >= 100){
            levelWinner.style.opacity = 1
        }
})}