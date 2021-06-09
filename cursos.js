let fragmento = document.createDocumentFragment();
let contenedorCursos = document.querySelector(".contenedor_cursos");
/* class Cursos{
    constructor(videos){
        this.videos = videos;
    }
    reproducir(){
            
    }
}

const video_1 = new Cursos(); */
let arr = [
    "uno","dos", "tres", "cuatro","uno","dos", "tres", "cuatro"
]
let img = [
    "https://github.com/juankamilohuertas/prueba/imagenes/ojos.jpg",
    "/imagenes/redes_sociales.jpg"
];
for (let index = 0; index <= arr.length -1; index++) {  // creando nodos de todo el contenido de los cursos 
    let layout_poster_cursos = document.createElement("div");
    layout_poster_cursos.classList.add("col-12", "col-sm-6", "col-lg-3", "mb-5");
    layout_poster_cursos.innerHTML += `<div class="card shadow p-3 mb-5 bg-body rounded" style="width: 100%; height: 100%">
    <img src="${img[0]}" class="card-img-top" alt="...">
    <div class="card-body d-flex flex-column justify-content-center">
      <h5 class="card-title">Curso De Html: construye aplicasiones web</h5>
      <p class="card-text"><i class="far fa-clock"></i> 2h 6m nivel intermedio</p>
      <p class="card-text text-warning"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
      <i class="fas fa-star"></i><i class="fas fa-star"></i> 4.5</p>
      <a href="#" class="btn btn-primary">Iniciar Curso</a>
    </div>
  </div>`;
    contenedorCursos.appendChild(layout_poster_cursos);  
}
contenedorCursos.appendChild(fragmento);