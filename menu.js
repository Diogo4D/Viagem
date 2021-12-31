const min_menu = document.getElementById('min_menu')

min_menu.addEventListener('click', ()=> {
    var header = document.getElementById('header')

    header.classList.toggle('active')
})