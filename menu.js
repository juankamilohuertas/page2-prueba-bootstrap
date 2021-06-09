let fragment = document.createDocumentFragment();
let cuerpo = document.querySelector("body");
cuerpo.innerHTML= `<header> 
<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container-fluid px-2 px-md-4 px-lg-5">
        <a class="navbar-brand" href=""><img src="https://juankamilohuertas.github.io/prueba/index.html" alt="">Steje</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#colapso" aria-controls="colapso" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="colapso">
            <div class="navbar-nav text-center w-100 mt-5 mt-sm-0">
                <a class="nav-link active mt-3 mt-sm-0 item_cursos" href="https://juankamilohuertas.github.io/prueba/index.html#cursos">Cursos</a>
              <a class="nav-link" href="#">Novedades</a>
              <a class="nav-link" href="https://juankamilohuertas.github.io/prueba/blog/blog.html">Blog</a>
              <a class="nav-link" href="#">Inicia sesion</a>
              <a class="nav-link registrarse" href="/index.html#registrarse">Registarse</a>
            </div> 
            <form class="busqueda_inicio d-flex p-2">
                <input class="form-control me-2 w-100" type="search" placeholder="Buscar..." aria-label="Search">
                <button class="btn btn-outline-success" type="submit"><i class="fas fa-search"></i></button>
            </form>   
      </div>
    </div>
</nav>
</header>`;
cuerpo.appendChild(fragment);