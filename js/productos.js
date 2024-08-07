import { agregarAlCarrito } from "./carrito.js";
let id_productos = 1;
const d = document;

class Producto {
  constructor(nombre, precio, categoria = "") {
    let tipos_categoria = [
      "Maquinas",
      "Clavos y Tornillos",
      "Herramientas",
      "Electricidad",
    ];

    this.nombre = nombre;
    this.categoria = tipos_categoria[categoria];
    this.precio = precio;
    this.id = id_productos++;
    this.img = `./assets/img/${nombre.toLowerCase()}.jpg`;
    this.stock = rand_int(0, 30);
  }
}

let productos = [
  new Producto("Martillo", 10000, 2),
  new Producto("Destornillador_Philips", 4000, 2),
  new Producto("Destornillador_Paleta", 4000, 2),
  new Producto("Agujereadora", 50000, 0),
  new Producto("Cinta_Metrica", 6000, 2),
  new Producto("Alicate", 8000, 2),
  new Producto("Cajon_150_Piezas", 100000, 2),
  new Producto("Enchufe_Exterior", 2000, 2),
  new Producto("Foco_15w", 1500, 3),
  new Producto("Foco_Inteligente", 12000, 3),
  new Producto("Llaves", 6500, 2),
  new Producto("Pico_de_Loro", 11000, 2),
  new Producto("Triple", 2500, 3),
  new Producto("Zapatilla", 9000, 3),
  new Producto("Taladro_Inalambrico", 160000, 0),
  new Producto("Caladora", 70000, 0),
];

//Función para calcular el stock aleatorio.
function rand_int(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function renderProductos() {
  const container_cards = d.querySelector("#container");
  container_cards.innerHTML = ""; // Limpia el contenedor antes de renderizar

  productos.forEach((producto) => {
    let copia_plantilla = d.querySelector("template").content.cloneNode(true);

    copia_plantilla.querySelector("h5").textContent = producto.nombre;
    copia_plantilla.querySelector(
      ".card-categoria"
    ).textContent = `Categoría: ${producto.categoria}`;
    copia_plantilla.querySelector(
      ".card-price"
    ).textContent = `Precio: $${producto.precio}`;
    copia_plantilla.querySelector(
      ".card-id"
    ).textContent = `Id: ${producto.id}`;
    copia_plantilla.querySelector(
      ".card-stock"
    ).textContent = `Stock: ${producto.stock}`;
    copia_plantilla.querySelector("img").setAttribute("src", producto.img);
    copia_plantilla.querySelector("img").setAttribute("alt", producto.nombre);

    const btnAgregar = copia_plantilla.querySelector("button");
    btnAgregar.addEventListener("click", () => {
      if (producto.stock > 0) {
        agregarAlCarrito(producto);
        renderProductos(); // Renderiza los productos para actualizar el stock
      }
    });
    if (producto.stock === 0) {
      copia_plantilla.querySelector(".card").style.opacity = "0.5"; // Para que se vea cuando algún producto se queda sin Stock
      btnAgregar.disabled = true;
    }

    container_cards.append(copia_plantilla);
  });
}

export { productos, renderProductos };
