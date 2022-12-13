const activate = document.querySelector('.header__menu-logo');
activate.addEventListener('click', function(){
document.getElementById('sidebar').classList.toggle('activate--sidebar');
});
const desactivate=document.querySelector('.header__sidebar--img');
desactivate.addEventListener('click', function(){
    document.getElementById('sidebar').classList.remove('activate--sidebar');
});
