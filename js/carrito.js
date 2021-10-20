let listaObjetos;
let imprimirDatos = document.getElementById("productosPrint")
let btn = document.getElementById("finalizarCompra")

if(localStorage.getItem("carrito") == null) {
    alert("Carrito vacio")
} else {
    listaObjetos = JSON.parse(localStorage.getItem("carrito"))
}

listaObjetos.forEach(element => {
    imprimirDatos.innerHTML += `
    <div class="card col-md-4 col-6 margin-3" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element.nombre}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${element.categoria}</h6>
            <p class="card-text">${element.precio}</p>
        </div>
    </div>
    `
});

const finalizarCompra = () => {

    let monto = 0

    listaObjetos.forEach (e => {
        monto += e.precio
    })

    alert("Felicitacion, tu compra fue aprobada, gastaste " + monto);
    localStorage.removeItem("carrito");
}

btn.addEventListener("click", () => {
    finalizarCompra()
})