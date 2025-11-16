// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  const boton = document.querySelector('#boton-importante');
  
  if (boton) {
    boton.addEventListener('click', function () {
      boton.textContent = 'Aplicado';
      boton.style.backgroundColor = '#4caf50';
      boton.style.cursor = 'not-allowed';
      boton.disabled = true;
    });
  }

  const jobsListingsSection = document.querySelector('.jobs-listings');

  if (jobsListingsSection) {
    jobsListingsSection.addEventListener('click', function (event) {
      const element = event.target;

      if (element.classList.contains('button-apply-job')) {
        element.textContent = 'Aplicado';
        element.classList.add('is-applied');
        element.disabled = true;
      }
    });
  }
});