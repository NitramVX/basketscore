let scoreHome = 88
let scoreGuest = 88

document.getElementById("scoreH").textContent = scoreHome
document.getElementById("scoreG").textContent = scoreGuest
document.getElementById("buttonH").style.pointerEvents = "none"
document.getElementById("buttonG").style.pointerEvents = "none"

function sum1H() {
    scoreHome += 1
    scoreH.textContent = scoreHome
}

function sum2H() {
    scoreHome += 2
    scoreH.textContent = scoreHome
}

function sum3H() {
    scoreHome += 3
    scoreH.textContent = scoreHome
}

function sum1G() {
    scoreGuest += 1
    scoreG.textContent = scoreGuest
}

function sum2G() {
    scoreGuest += 2
    scoreG.textContent = scoreGuest
}

function sum3G() {
    scoreGuest += 3
    scoreG.textContent = scoreGuest
}

function homePos() {
    document.getElementById("homePos").style.color = "red"
    document.getElementById("guestPos").style.color = "black"
}

function guestPos() {
    document.getElementById("homePos").style.color = "black"
    document.getElementById("guestPos").style.color = "red"
}

function startGame() {
    scoreHome = 0
    scoreH.textContent = scoreHome
    scoreGuest = 0
    scoreG.textContent = scoreHome
    
    document.getElementById("buttonH").style.pointerEvents = "auto"
    document.getElementById("buttonG").style.pointerEvents = "auto"

    
    document.addEventListener('keydown', (event) => {
        if (event.key === 'a') {
            homePos()
        } else if (event.key === "d") {
            guestPos()
        }   
    })

}

function resetGame() {
    scoreHome = 88
    scoreH.textContent = scoreHome
    scoreGuest = 88
    scoreG.textContent = scoreHome
    
    document.getElementById("buttonH").style.pointerEvents = "none"
    document.getElementById("buttonG").style.pointerEvents = "none"
    document.getElementById("homePos").style.color = "black"
    document.getElementById("guestPos").style.color = "black"
}


document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        startGame()
        scoreHome = 0
        scoreH.textContent = scoreHome
        scoreGuest = 0
        scoreG.textContent = scoreHome
    } else if (event.key === "r") {
        resetGame()
        scoreHome = 88
        scoreH.textContent = scoreHome
        scoreGuest = 88
        scoreG.textContent = scoreHome
        document.getElementById("buttonH").style.pointerEvents = "none"
        document.getElementById("buttonG").style.pointerEvents = "none"
    }
})

