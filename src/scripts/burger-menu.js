let menuBtn = document.querySelector('.header__burger-btn');
let menu = document.querySelector('.header__menu');
let menuItem = document.querySelectorAll('.header__menu--item');

menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
})

menuItem.forEach(function(menuItem) {
  menuItem.addEventListener('click',function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  })
})
