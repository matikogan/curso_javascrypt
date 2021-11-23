import { agregarAlCarrito } from "./agregarProdCarrito.js";
import obtenerDatos from "./getData.js";

export const printProducts = async () => {
    const datos = await obtenerDatos();

    for (const producto of datos) {
        $('#printVelas').append(
            `
            <div class="card col-md-4 col-6 margin-3" style="width: 18rem;">
            <img src="${producto.thumbnailUrl}" class="card-img-top" alt="vela bali basito">
            <h5 class="card-title">${producto.title}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p id="precio">$${producto.precio}</p>
            <buttton class="btn btn-primary" id="buy">Comprar</button>
            </div>  
            </div>
            `

        )}

        //boton agregar al carrito
        const btnAgregar = document.querySelector('#buy')

        btnAgregar.addEventListener('click', () => {
            agregarAlCarrito();
        })


}



/*
export const printProducts = (datos) => {

    for (const producto of datos) {
        $('#printVelas').append(
            `
            <div class="card col-md-4 col-6 margin-3" style="width: 18rem;">
            <img src="${producto.thumbnailUrl}" class="card-img-top" alt="vela bali basito">
            <h5 class="card-title">${producto.title}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p id="precio">$${producto.precio}</p>
            <buttton class="btn btn-primary" id="buy">Comprar</button>
            </div>  
            </div>
            `

        )}


}

*/
