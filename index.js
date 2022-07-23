const add1HomeBtn = document.getElementById("add1-home")
const add2HomeBtn = document.getElementById("add2-home")
const add3HomeBtn = document.getElementById("add3-home")

const homeResult = document.getElementById("home-result")

const add1GuestBtn = document.getElementById("add1-guest")
const add2GuestBtn = document.getElementById("add2-guest")
const add3GuestBtn = document.getElementById("add3-guest")

const guestResult = document.getElementById("guest-result")

let homeCount = 0
let guestCount = 0
homeResult.textContent=homeCount
guestResult.textContent=guestCount

function add1Home(){
    homeCount += 1
    homeResult.textContent = homeCount
}

function add2Home(){
    homeCount += 2
    homeResult.textContent = homeCount
}

function add3Home(){
    homeCount += 3
    homeResult.textContent = homeCount
}


function add1Guest(){
    guestCount += 1
    guestResult.textContent = guestCount
}

function add2Guest(){
    guestCount += 2
    guestResult.textContent = guestCount
}

function add3Guest(){
    guestCount += 3
    guestResult.textContent = guestCount
}

// For Home Button 
add1HomeBtn.addEventListener("click" , add1Home)
add2HomeBtn.addEventListener("click" , add2Home)
add3HomeBtn.addEventListener("click" , add3Home)

//for Guest Button

add1GuestBtn.addEventListener("click" , add1Guest)
add2GuestBtn.addEventListener("click" , add2Guest)
add3GuestBtn.addEventListener("click" , add3Guest)
