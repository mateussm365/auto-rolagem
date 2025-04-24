function rolagem(id_secao) {
    const elemento = document.getElementById(id_secao);

    if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });
    }

}

window.rolagem = rolagem

function func_overlay(elemento, i) {
    const text_over = document.getElementsByClassName("overlay-text");
    text_over[i].style.width = elemento.offsetWidth + "px";
    text_over[i].style.height = elemento.offsetHeight + "px";

}


