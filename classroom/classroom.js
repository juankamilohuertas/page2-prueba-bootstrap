let frag = document.createDocumentFragment();
let listaDecursos = document.querySelector(".listaCursos");
let arr = [
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
    "item6",
    "item7",
    "item8",
    "item9",
    "item10",
    "show",
    "sedfsd"
]
for (let index = 0; index <= arr.length; index++) {
listaDecursos.innerHTML += ` <div class="accordion" id="accordionExample">
<div class="accordion-item border-0">
  <h2 class="accordion-header" id="headingOne">
    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
      Introduccion
    </button>
  </h2>
  <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headi data-bs-parent="#accordionExample">
    <div class="accordion-body p-0 ">
        <div class="list-group rounded-0"><!-- lista de cursos -->
            <button type="button" class="list-group-item list-group-item-action active">The current button</button>
            <button type="button" class="list-group-item list-group-item-action">A second item</button>
            <button type="button" class="list-group-item list-group-item-action">A third button item</button>
            <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
            <button type="button" class="list-group-item list-group-item-action">A disabled button item</button>
          </div>
    </div>
  </div>
</div>
</div>`;
}
listaDecursos.appendChild(frag);