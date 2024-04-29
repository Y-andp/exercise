let point = document.querySelector(".point")
let prev = document.querySelector('#prev')
let next = document.querySelector('#next')
let circle = document.querySelectorAll('.circle')
let index = 1
prev.addEventListener('click', () => {
    index--
    if (index < 1) {
        index = 1
    }
    change()
})

next.addEventListener('click', () => {
    index++
    if (index >= circle.length) {
        index = circle.length
    }
    change()
})
let change = () => {
    circle.forEach((item, idx) => {
        if (idx < index) {
            item.classList.add('check')
        } else {
            item.classList.remove('check')
        }
    })
    point.style.width = (100 / (circle.length - 1)) * (index - 1) + '%'
    if (index === 1) {
        prev.disabled = true
        prev.className = 'disable'
        next.className = 'click'
    } else if (index === circle.length) {
        next.disabled = true
        next.className = 'disable'
        prev.className = 'click'
    } else {
        prev.disabled = false
        next.disabled = false
        prev.className = 'click'
        next.className = 'click'
    }
}