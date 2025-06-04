// Ejemplo: Cambiar el color del fondo al hacer clic en un botón
document.addEventListener('DOMContentLoaded', () => {
    console.log("Página cargada correctamente");
    
    // Puedes añadir más funciones aquí
});
<script>
document.getElementById('btnGracias').addEventListener('click', function() {
    const agradecimiento = document.getElementById('agradecimiento');
    
    // Mostrar el overlay
    agradecimiento.style.display = 'flex';
    
    // Ocultar el botón
    this.style.display = 'none';
    
    // Opcional: Reproducir un sonido
    // new Audio('sonido.mp3').play();
    
    // Opcional: Cerrar al hacer clic (descomenta si lo quieres)
    // agradecimiento.addEventListener('click', function() {
    //     this.style.display = 'none';
    //     document.getElementById('btnGracias').style.display = 'block';
    // });
});
</script>