export const ListaCarrito = producto => {

    let precio = producto.precio + (producto.precio * iva)

    $('.carrito').append(
        `
        <div class="card mb-3" style="max-width: auto;">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="${producto.thumbnail}" class="img-fluid rounded-start" alt="...">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h4 class="card-title">${producto.nombre}</h5>
                          <p class="card-text">${producto.precio}</p>
                          <button class="aumentar-cantidad">+</button> 
                          <p col-3>${producto.cantidad}</p> 
                          <button class="disminuir-cantidad">-</button> 
                          <hr>
                          <p>Total</p>
                          <p>${precio}*${producto.cantidad}</p>
                          <button class="btn-delete">Eliminar</button>
                        </div>
                      </div>
                    </div>
                </div>
        `
   )


}