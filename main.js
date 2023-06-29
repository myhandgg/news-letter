let parent = document.querySelector(".parent")
let leftSide = document.querySelector(".left-side")
let rightSide = document.querySelector(".right-side")
let input = document.querySelector("input")
let btn = document.querySelector(".button")
let warningText = document.querySelector(".warning")
let result = document.querySelector(".result")
let userEmail = document.querySelector(".user-email")
let dissmis = document.querySelector(".dissmis-message")

let reg = /\w+@\w+.(com|net|info|org)/ig

btn.onclick = () =>{
    if (input.value.match(reg) !== null){
        parent.style.display = "none"
        result.style.display = "block"
        warningText.style.display = "none"
        input.style.backgroundColor = "var(--White)"
        input.style.borderColor = "var(--Grey)"
        userEmail.textContent = input.value
        dissmis.onclick = () =>{
            result.style.display = "none"
            parent.style.display = "flex"
        }
    } else {
        warningText.style.display = "block"
        input.style.backgroundColor = "#ffcec5"
        input.style.border = "1px solid var(--Tomato)"
    }
}