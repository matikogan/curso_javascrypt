export const tituloPagina = titulo => {
    $('#tituloProductos').append(

        `
        <h2 class="tituloProductos margin-2">
        ${titulo}
        </h2>
        
        `
    )
}