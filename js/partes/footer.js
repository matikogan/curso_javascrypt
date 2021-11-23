export default function Footer () {

$('footer').append(

`
<ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href="index.html" class="a_footer">Home</a>
            </li>
            <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="producto_susten.html">Tienda</a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="./categorias/velas.html">Velas</a></li>
              <li><a class="dropdown-item" href="./categorias/espejos.html">Espejos</a></li>
              <li><a class="dropdown-item" href="./categorias/nube.html">Linea Nube</a></li>
            </ul>
            </li>
            <li><a href="../carrito.js" class="a_footer">Carrito</a>
        </ul>

        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href="https://www.instagram.com/sustenart_/" target="_blank" class="a_footer"><img src="./../img/instagram.png" id="redes"></a></li>
            <li class="nav-item"><a href="https://www.facebook.com/SustenartOficial" target="_blank" class="a_footer"><img src="./../img/facebook.png" id="redes"></a></li>
            <li class="nav-item"><a href="https://api.whatsapp.com/send?phone=541156354244" target="_blank" class="a_footer"><img src="./../img/whatsapp.png" id="redes"></a></li>
        </ul>

`

)

}