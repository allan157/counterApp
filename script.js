const count = document.querySelector(".count")
const Add = document.querySelector(".add")
const resetCount = document.querySelector(".reset")
const sub = document.querySelector(".subtract")
const buttons = document.querySelector(".buttons")

buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")){
        count.innerHTML++;
        setColor()
    }

    if (e.target.classList.contains("subtract")){
        count.innerHTML--;
        setColor()
    }

    if (e.target.classList.contains("reset")){
        count.innerHTML = 0;
        setColor()
    }
})

function setColor() {
    if (count.innerHTML > 0){
        count.style.color = "pink"
    } else if  (count.innerHTML < 0){
        count.style.color = "yellow"
    } else {
         count.style.color = "white"
    }
}



