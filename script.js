function rolagem (id_secao){
    const elemento = document.getElementById(id_secao);

if(elemento){
    elemento.scrollIntoView({ behavior: 'smooth' }); 
}

}

window.rolagem = rolagem