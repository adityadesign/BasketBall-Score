let num1 = 0
let num2 = 0
let h_count = 0
let g_count = 0
document.getElementById("home-score").textContent = num1
document.getElementById("guest-score").textContent = num2

function h_one(){
    h_count += 1
    document.getElementById("home-score").textContent = h_count
}

function h_two(){
    h_count += 2
    document.getElementById("home-score").textContent = h_count
}

function h_three(){
    h_count += 3
    document.getElementById("home-score").textContent = h_count
}

function g_one(){
    g_count += 1
    document.getElementById("guest-score").textContent = g_count
}

function g_two(){
    g_count += 2
    document.getElementById("guest-score").textContent = g_count
}

function g_three(){
    g_count += 3
    document.getElementById("guest-score").textContent = g_count
}