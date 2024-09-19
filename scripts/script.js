function animar() {
    const btn = document.getElementById("btn-menu");
    btn.classList.toggle("ativo");
}

function animarMenu() {
    const menu = document.getElementById("menu-mobile");
    menu.classList.toggle("abrir");
    menu.addEventListener("click", animarMenu);
}
export { animar, animarMenu };