
// let husky = document.getElementById('husky')
// let corgi = document.getElementById('corgi')
// corgi.addEventListener('click', () => {
//     let balls = 0;
//     balls++
//     husky.textContent = balls 
// })


const counter = document.getElementById("value")
const decrease = document.querySelector("#decrease")
const reset = document.querySelector("#reset")
const increse = document.querySelector("#increse")
let meter = 0;

increse.addEventListener('click', () => {
    meter++
    counter.textContent = meter
})

decrease.addEventListener('click', () => {
    meter--
    counter.textContent = meter
})

reset.addEventListener('click', () => {
    meter = 0
    counter.textContent = meter
})