// 1. Mouseover (Pasar el mouse)
document.getElementById('box1').addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = "cyan";
    e.target.innerText = "¡Detectado!";
});

// 2. Dblclick (Doble clic)
document.getElementById('box2').addEventListener('dblclick', (e) => {
    e.target.style.transform = "scale(1.1)";
    alert("¡Doble clic activado!");
});

// 3. Input (Escribir en el campo)
document.querySelector('#box3 input').addEventListener('input', (e) => {
    document.getElementById('box3').style.border = "3px solid green";
});

// 4. Keydown (Presionar tecla)
window.addEventListener('keydown', () => {
    document.getElementById('box4').innerText = "¡Tecla presionada!";
    document.getElementById('box4').style.color = "red";
});

// 5. Contextmenu (Clic derecho)
document.getElementById('box5').addEventListener('contextmenu', (e) => {
    e.preventDefault(); // Evita que salga el menú normal
    e.target.innerText = "¡Clic derecho bloqueado!";
});

// 6. Copy (Copiar texto)
document.getElementById('box6').addEventListener('copy', () => {
    alert("¡Has copiado el texto de la celda 6!");
});

// 7. Mouseup (Soltar el clic)
document.getElementById('box7').addEventListener('mouseup', (e) => {
    e.target.style.borderRadius = "50%";
    e.target.innerText = "¡Soltaste el botón!";
});

// 8. Resize (Cambiar tamaño de ventana)
window.addEventListener('resize', () => {
    const b8 = document.getElementById('box8');
    b8.innerText = "Ancho: " + window.innerWidth + "px";
    b8.style.backgroundColor = "orange";
});