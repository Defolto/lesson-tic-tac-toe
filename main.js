const pole = document.querySelector(".pole")
const span = document.querySelector("#step")
const winsX_html = document.getElementById("winsX")
const winsO_html = document.getElementById("winsO")

const winMass = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]

function checkWin() {
    const divs = document.querySelectorAll(".pole div")
    winMass.forEach((item, i) => {
        if (divs[item[0] - 1].innerHTML == divs[item[1] - 1].innerHTML && divs[item[1] - 1].innerHTML == divs[item[2] - 1].innerHTML && divs[item[2] - 1].innerHTML != "") {
            if (divs[item[2] - 1].innerHTML == "X") {
                winsX += 1
                winsX_html.innerHTML = winsX
            } else {
                winsO += 1
                winsO_html.innerHTML = winsO
            }
            alert(`Победа: ${divs[item[2] - 1].innerHTML}`)
            divs.forEach((item) => {
                item.innerHTML = ""
            })
            symbol = "×"
            span.innerHTML = symbol
        }
    })
}

let symbol = "×"
let winsX = 0
let winsO = 0
pole.addEventListener("click", (e) => {
    // проверка, на нажатие клетки поля
    if (e.target.className == "pole") {
        return
    }

    // проверка на пустоту нажатой клетки
    if (e.target.innerHTML != "") {
        return
    }

    e.target.innerHTML = symbol
    if (symbol == "×") {
        symbol = "○"
    } else {
        symbol = "×"
    }
    span.innerHTML = symbol
    checkWin()
})  