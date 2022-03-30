/** @format */

// counter js
let counts = setInterval(updated)
let upto = 600
function updated() {
  var count = document.getElementById("counter")
  count.innerHTML = ++upto
  if (upto === 1500) {
    clearInterval(counts)
  }
}
let count1 = setInterval(updated1)
let upto1 = 1
function updated1() {
  var count = document.getElementById("counter1")
  count.innerHTML = ++upto1
  if (upto1 === 5) {
    clearInterval(count1)
  }
}
let count2 = setInterval(updated2)
let upto2 = 1
function updated2() {
  var count = document.getElementById("counter2")
  count.innerHTML = ++upto2 + " " + "+"
  if (upto2 === 30) {
    clearInterval(count2)
  }
}
let count3 = setInterval(updated3)
let upto3 = 0
function updated3() {
  var count = document.getElementById("counter3")
  count.innerHTML = ++upto3
  if (upto3 === 100) {
    clearInterval(count3)
  }
}
