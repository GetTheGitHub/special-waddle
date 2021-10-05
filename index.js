
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0


console.log(saveEl)

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - " 
    saveEl.innerText += countStr
    countEl.textContent = 0
    count = 0
}

console.log(count)

function reset() {
    window.location.reload() 
}

