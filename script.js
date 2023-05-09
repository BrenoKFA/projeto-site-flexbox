function menu() {
    let click = document.querySelector('.menu-mobile')
    if (document.querySelector('.menu nav ul').style.display == 'flex') {
        document.querySelector('.menu nav ul').style.display = 'none'
    } else {
        document.querySelector('.menu nav ul').style.display = 'flex'
    } 
}