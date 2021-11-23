import Header from '../partes/header.js'
import obtenerDatos from '../funciones/getData.js';
import { tituloPagina } from '../partes/tituloPagina.js';
import { printProducts } from '../funciones/printProductos.js';
import Footer from '../partes/footer.js'



$(document).ready(async () => {
    const datos = await obtenerDatos();
    const espejos = datos.filter(productos => productos.category === "espejos")
    Header();
    tituloPagina('Espejos');
    printProducts(espejos);
    Footer();
})
