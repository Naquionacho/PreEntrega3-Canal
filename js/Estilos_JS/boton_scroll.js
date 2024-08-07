const d = document,
  w = window;

  //Función para que aparezca un botón para subir a determianda distancia de la barra de scroll.
export default function scrollTopButton (btn) {
  const $scrollBtn = d.querySelector(btn);

  w.addEventListener("scroll", (e) =>{
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

    if (scrollTop > 600){
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }
  });


  d.addEventListener("click", (e) =>{
    if(e.target.matches(btn)) {
      w.scrollTo({
        behavior: "smooth",
        top:0,
      });
    }
  });
}