let burger = document.querySelector('.header__nav-burger');
let menu = document.querySelector('.header__nav-menu');

burger.addEventListener('click', function () {
   menu.classList.toggle('header__nav-menu-acteve');
})


window.addEventListener('scroll', function() {
   let navigation = document.querySelector('.header__vrap-nav');
   if (window.scrollY > 100) {
      navigation.classList.add('nav-active');
  } else {
   navigation.classList.remove('nav-active');
  }
 });


