const productos = [
    {nombre: 'Esmalte sintético 3en1 x 1 lt', precio: 1500},
    {nombre: 'Aerosol negro mate x 350 cc', precio: 2300},
    {nombre: 'Membrana líquida Blanco x 5 Kg', precio: 9500},
    {nombre: 'Sellador de grietas Cartucho x 230 gr', precio: 3200},
    {nombre: 'Barniz x 1 lt', precio: 4200},
];

const carrito = [];

function sumarIva (valor) {
    return valor * 1.21
};

function totalizar() {
    subTotal = 0;
    for (const item of carrito){
        subTotal = subTotal + (item.precio * item.cantidad);
    }
    return subTotal;
};

function principal() {
    let seguir = confirm('Desea iniciar la compra?');
    while (seguir) {                
        productoElegido = parseInt(prompt('Seleccione un producto\n\n [1] Esmalte sintético 3en1 x 1 lt \n [2] Aerosol negro mate x 350 cc \n [3] Membrana líquida Blanco x 5 Kg \n [4] Sellador de grietas Cartucho x 230 gr \n [5] Barniz x 1 lt'))        
        let nombreEleg = productos[(productoElegido-1)].nombre;
        let precioEleg = productos[(productoElegido-1)].precio;
        let precioElegIva = sumarIva(productos[(productoElegido-1)].precio);        
        cantidad = prompt
            ('El producto seleccionado es ' + nombreEleg + '\nPrecio $ ' + precioEleg
            + '\nPrecio final, IVA incluído $ ' + precioElegIva + '\n\nIngrese cantidad:');
        agregarProducto = confirm
            ('Cantidad: ' + cantidad + '\nSub Total para el producto: ' + cantidad * precioElegIva + '\nConfirma?')
        if (agregarProducto) {
            carrito.push ({nombre:nombreEleg, cantidad:cantidad, precio:precioElegIva})
        };
        seguir = confirm('Desea seguir comprando?\n\nPresione \'Aceptar\' para agregar más productos.\n\nO \'Cancelar\' para finalizar la compra.');
    }    
    console.table(carrito);
    total = totalizar();
       
    document.write('El total de su compra es: $ ' + total);

    };

principal();
