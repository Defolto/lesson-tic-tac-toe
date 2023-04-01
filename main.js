function createTooltip(selector, text) {
    const elem = document.querySelector(selector)
    elem.style.position = "relative"

    elem.insertAdjacentHTML("beforeend", `<div class="tooltip">${text}</div>`)
}