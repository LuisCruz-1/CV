// Obtener todas las secciones que tienen un ID definido
const sections = document.querySelectorAll("section[id]");

// Agregar un escuchador de eventos para el desplazamiento
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
  
  // Obtener la posición actual de desplazamiento
  let scrollY = window.pageYOffset;
  
  // Ahora recorremos las secciones para obtener la altura, la parte superior y los valores de ID para cada una
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");    
    /*
    - Si nuestra posición actual de desplazamiento entra en el espacio donde se encuentra la sección actual en pantalla, agregue la clase .active al enlace de navegación correspondiente, de lo contrario, elimínela
    - Para saber qué enlace necesita una clase activa, usamos la variable sectionId que estamos obteniendo mientras recorremos las secciones como un selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".verticalmenu a[href*='" + sectionId + "']").classList.add("active");
    } else {
      document.querySelector(".verticalmenu a[href*='" + sectionId + "']").classList.remove("active");
    }
  });
}
function myFunction() {
  var element = document.querySelector('.mobilenav');
  var checkbox = document.querySelector('#toggle');
  
  if (checkbox.checked) {
    element.classList.remove('relative');
  } else {
    element.classList.add('relative');
  }
}