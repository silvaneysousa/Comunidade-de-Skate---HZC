const iconeMenu = document.querySelector('.cabecalho_botao_menu');
const menuLateral = document.querySelector('.menu-lateral');

iconeMenu.addEventListener('click', () => {
    menuLateral.classList.toggle('menu-lateral--ativo')
});