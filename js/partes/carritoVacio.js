export const CarritoVacio = () => {
    $('.resumen-compra').remove();
    $('.carrito').remove();
    $('#carrito-container').append(
        `
        <div class="carrito-vacio">
                <h2>Tu carrito está vacio</h2>
            </div>   

        `
    )
}