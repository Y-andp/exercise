window.onload = () => {
    let cardbox = document.querySelectorAll(".card")
    cardbox.forEach(item => item.onclick = () => {
        removeclass()
        item.classList.add('active')
    })
    function removeclass() {
        cardbox.forEach(item => {
            item.classList.remove('active')
        })
    }
}