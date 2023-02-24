let edad = parseInt(prompt('Ingresa tu edad'));
const edadMinima = 18;
if (edad >= edadMinima) {
    alert('Puede seguir navegando en nuestra pagina')
    let nombre = prompt('Ingrese su nombre');
    let apellido = prompt('Ingrese su apellido')

    alert('Bienvenido/a ' + nombre + ' ' + apellido + '.' + ' A continuacion, selecciona los articulos que te gustaria comprar!')

    let precio = 0;
    let continuar = true;
    while (continuar) {
        let opcion = prompt('Elegí una opción: \n1 - Remera \n2 - Pantalon \n3 - Zapatilla \n4 - Finalizar compra');
        switch (opcion) {
            case '1':
                alert('Elegiste una Remera');
                precio += 8500;
                break;
            case '2':
                alert('Elegiste un Pantalon');
                precio += 26000;
                break;
            case '3':
                alert('Elegiste unas Zapatillas');
                precio += 54000;
                break;
            case '4':
                alert('Gracias por tu compra!');
                continuar = false;
                break;
            default:
                alert('Elegiste una opción inválida');
                break;
        }
        if (continuar) {
            alert('El precio parcial de la compra es: $' + precio);
        }
    }
    alert('El precio total de la compra es: $' + precio);
} else {
    alert('No puede seguir su compra')
}
