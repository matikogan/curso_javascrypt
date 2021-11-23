import Header from '../partes/header.js';
import {CarritoVacio} from '../partes/carritoVacio.js'
import { ListaCarrito } from '../partes/listaCarrito.js';
import Footer from '../partes/footer.js';

let carritoStorage = JSON.parse(localStorage.getItem('carritoSUSTEN')) || [];
let subtotal;
let iva;

//Funcion para mostrar productos del carrito 
const mostrarListaCarrrito = () => {
    $(".carrito").empty()
    $('.resumen-compra').empty()

    if(carritoStorage.length == 0) {
        CarritoVacio();
    } else {
        subtotal = 0
        iva = 0.22
        carritoStorage.forEach( producto => {
            ListaCarrito(producto);
            iva = producto.precio * iva
            subtotal = iva * producto.cantidad
        })

    //Eliminar producto de carrito
    const btnEliminar = document.querySelectorAll('.btn-delete')
    btnEliminar.forEach ( btn => {
        btn.addEventListener('click', () => {
            let id = btn.id
            eliminarProducto(id)
        })
    
    })

    $('.resumen-compra').append(
        ` <h3><strong>Resumen Compra</strong></h3>
        <h4 class="carrito-resumen">Subtotal: ${subtotal}</h4>
        <h4 class="carrito-resumen">IVA: ${iva}</h4>
        <h2 class="total-carrito">Total: ${iva+subtotal}</h3>
        <a href="" class="btn-comprar">Comprar</a>`
    )

    const btnAumentar = document.querySelectorAll('.aumentar-cantidad')
    const btnDisminuir = document.querySelectorAll('.disminuir-cantidad')

    //Aumentar cantidad
    btnAumentar.forEach(btn => {
        btn.addEventListener('click', () => {
            let productos = carritoStorage
            productos.forEach(producto => {
                if(producto.id === btn.dataset.id){
                    producto.cantidad ++;
                }
            })
            localStorage.setItem('carritoSUSTEN', JSON.stringify(productos));
            mostrarListaCarrrito()
        })
    })

    //Dismiuir cantidad
    btnDisminuir.forEach(btn => {
        btn.addEventListener('click', () => {
            let productos = carritoStorage
            productos.forEach(producto => {
                if(producto.id === btn.dataset.id){
                    if (producto.cantidad == 1){
                        eliminarProducto(producto.id);
                }else {
                    producto.cantidad --;
                    localStorage.setItem('carritoSUSTEN', JSON.stringify(productos));
                    mostrarListaCarrrito()
                        }
                    }
                    
                })
            })

        })
    }
}

//Eliminar Producto
const eliminarProducto = id => {
    carritoStorage = carritoStorage.filter( producto => producto.id != id);
    localStorage.setItem('carritoSUSTEN', JSON.stringify(carritoStorage));
    mostrarListaCarrrito();
}


$(document).ready(async () => {
    
    Header();
    mostrarListaCarrrito();
    Footer();
})
