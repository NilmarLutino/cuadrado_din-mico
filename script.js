const cuadrado = document.getElementById('cuadrado');

cuadrado.addEventListener('click', function() {
    // Cambiar color al azar
    let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    cuadrado.style.backgroundColor = color;

    // Cambiar posición al azar
    let maxTop = window.innerHeight - cuadrado.offsetHeight;
    let maxLeft = window.innerWidth - cuadrado.offsetWidth;
    let newTop = Math.floor(Math.random() * maxTop);
    let newLeft = Math.floor(Math.random() * maxLeft);
    cuadrado.style.top = newTop + 'px';
    cuadrado.style.left = newLeft + 'px';
});
