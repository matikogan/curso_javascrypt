import Header from '../partes/header.js'
import obtenerDatos from '../funciones/getData.js';
import { tituloPagina } from '../partes/tituloPagina.js';
import { printProducts } from '../funciones/printProductos.js';
import Footer from '../partes/footer.js'



$(document).ready(async () => {
    const datos = await obtenerDatos();
    const velas = datos.filter(productos => productos.category === "velas")
    Header();
    tituloPagina('Velas');
    printProducts(velas);
    Footer();
})







/*
const print = document.getElementById('printVelas')
const cardTemplate = document.getElementById('card-template').content
const fragment = document.createDocumentFragment()


document.addEventListener("DOMContentLoaded", () => {
    fetchData ()
})


const fetchData = async () => {

  try {
        const res = await fetch('/json/data.json')
        const data = await res.json()
        printCard(data)
        //console.log(data)
  } catch (error) {
       console.log(error)
  }

}

const printCard = data => {
    console.log(data)
    data.forEach(element => {
        cardTemplate.querySelector('h5').textContent = element.title
        cardTemplate.querySelector("#precio").textContent = element.precio
        cardTemplate.querySelector("img").setAttribute("src", element.thumbnailUrl)
        cardTemplate.querySelector("#buy").dataset.id = element.id
        

        const print = cardTemplate.cloneNode(true)
        fragment.appendChild(print)
    });
    print.appendChild(fragment)
}

let listaObjetos;
const comprar = (index) => {
    let carrito;
    if(localStorage.getItem("carrito") == null) {
        carrito = []
    } else {
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }

    carrito.push(listaObjetos[index]);
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

document.getElementById("buy").addEventListener("click", () => {
    comprar ($index)
});
*/