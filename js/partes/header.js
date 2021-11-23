export default function Header () {

    $('.header-container').append(
        `
        <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid"> <!--logo-->
          <a class="navbar-brand" href="index.html"><img class="mb-0" src="../../img/logosusten.png" width="80px"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
          </button> <!--menu de navegacion-->
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="/index.html">Home</a></li>
                  <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="producto_susten.html">Tienda</a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a class="dropdown-item" href='/categorias/velas.html'>Velas</a></li>
                      <li><a class="dropdown-item" href='/categorias/espejos.html'>Espejos</a></li>
                      <li><a class="dropdown-item" href='/categorias/nube.html'>Linea Nube</a></li>
                    </ul>
                  </li>
                  <li class="nav-item"><a class="nav-link" href="./../../carrito.html">Carrito</a></li>
                </ul>
                </div>
            </div>
        </div>
      </nav>
      
        `
    )



}