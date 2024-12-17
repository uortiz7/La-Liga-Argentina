document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los elementos con la clase 'container'
    let containers = document.getElementsByClassName('container');

    // Itera sobre cada elemento y aplica el estilo deseado
    for (let i = 0; i < containers.length; i++) {
        containers[i].style.height = '100vh';
    }
});
