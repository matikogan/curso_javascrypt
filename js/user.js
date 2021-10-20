// 1 ENTIDADES

class User {
    constructor (nombre, pass) {
        this.nombre = nombre;
        this.pass = pass
    }
}


class Producto {
    constructor (nombre, categoria, precio, stock){
        this.nombre = nombre
        this.categoria = categoria
        this.precio = precio
        this.stock = stock
    }
}

const matias = new User ("matias", "sustenart")
let listaProductos;

if (localStorage.getItem("lista") == null) {
    listaProductos = []
} else{
    listaProductos = JSON.parse(localStorage.getItem("lista"))
}



const crearProducto = (nombre, categoria, precio, stock) => {
    const producto = new Producto(nombre, categoria, precio, stock)
    return producto;
}


// confirmacion de acceso


const confirmacionDeAcceso = () => {
    const nombre = prompt("Ingresa tu nombre de usuario");
    const pass = prompt("Ingresa la contrasena")
    const bucle = true

    while (bucle) {

        if (nombre === matias.nombre && pass === matias.pass) {

            let ciclo = true;

            while (ciclo){
                const nombre = prompt("ingrese nombre del producto")
                const categoria = prompt("ingrese categoria del producto")
                const precio = Number(prompt("inrese el precio"))
                const stock = parseFloat(prompt("ingrese la cantidad de productos"))

                listaProductos.push(crearProducto(nombre, categoria, precio, stock)) 
                
                localStorage.setItem("lista", JSON.stringify(listaProductos))

                ciclo = confirm("Deseas agregar otro producto mas?")
            }

            break;
        }else {
            alert("USUARIO INCORRECTO");
        }
   }
   
}  

confirmacionDeAcceso()



/*
const addProductos = document.getElementById("addProducts")
const nombre = document.getElementById("user").value
const pass = document.getElementById("pass").value;
const login = document.getElementById("entrar")

const confirmacionDeAcceso = () => {
    if (nombre === matias.nombre && pass === matias.pass) {
        alert("Iniciaste Sesion")
        addProducts.innerHTML += `
        <form>
            <input type="text"> Titulo del producto
                <br><br>
            <input type="text"> Categoria
                <br><br>
            <input type="number"> Precio
                <br><br>
            <input type="number"> Stock
        </form>
    `
    } else {
        alert("El usuario o la contrasnia son incorrectas")
    }
}

login.addEventListener ("click", () => {
    confirmacionDeAcceso()
});*/