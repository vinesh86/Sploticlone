let menubar = document.querySelector('.menubar')
let leftmenu = document.querySelector('.left-menu')
let catalog = document.querySelector('.catalog')
let second = document.querySelector('.second')

menubar.addEventListener('click',function()
{
    leftmenu.classList.toggle('active')
    catalog.classList.toggle('active2')
    second.classList.toggle('active2')


})