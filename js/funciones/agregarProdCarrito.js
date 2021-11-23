
export const agregarAlCarrito = (id, productos) => {
    //Todos los prod del carrito
    let productosCarrito = JSON.parse(localStorage.getItem('carritoSUSTEN')) || [];

    // Producto seleccionado
    let productoSeleccionado = productos.filter(producto => producto.id === id);
    //Objeto con los datos del producto
    let datosProductoAgregado = {
        thumbnailUrl: productoSeleccionado[0].thumbnailUrl,
        title: productoSeleccionado[0].title,
        precio: productoSeleccionado[0].precio,
        id: productoSeleccionado[0].id,
        cantidad: 1
    }


    //Si el producto no esta agregado, se agrega
    //Si el producto ya esta agregado, se aumenta la cantidad
    const yaAgregado = productosCarrito.some( producto => producto.id === productoAgregado.id);
    if(!yaAgregado){
        productosCarrito = [...productosCarrito, datosProductoAgregado]
    } else{
        productosCarrito.forEach(producto => {
            if(producto.id === productoAgregado.id){
                producto.cantidad++;
            }
        })
    }
    localStorage.setItem('carritoLF', JSON.stringify(productosCarrito));
}

    