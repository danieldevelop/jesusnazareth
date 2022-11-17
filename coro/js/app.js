/**
 * It shows a message with a custom icon, custom buttons, and a custom location.
 * @param mensaje - The message you want to display.
 * @param icono - icon to show
 * @param buttonCancel - true or false
 * @param buttonConfirm - true or false
 * @param ubicacion - top-end, top-start, bottom-end, bottom-start
 */
function mostrarMensaje(mensaje, icono, buttonCancel, buttonConfirm, ubicacion) {
    const Toast = Swal.mixin({
        toast: true,
        position: ubicacion,
        showConfirmButton: buttonConfirm,
        showCancelButton: buttonCancel,
        timer: 3000
    });

    Toast.fire({
        icon: icono,
        title: mensaje
    });
}

/**
 * It returns a string with the current date in the format YYYY-MM-DD.
 * @returns A string with the current date in the format YYYY-MM-DD.
 * TODO Warning: this value date require formart yyyy-MM-dd
 */
function fechaActual() {
    const meses = new Array("01","02","03","04","05","06","07","08","09","10","11","12");
    let fchActual = new Date();

    let fecha = `${fchActual.getFullYear()}-${meses[fchActual.getMonth()]}-${fchActual.getDate()}`;
    console.log(fecha);
    return fecha;
}



const buscarLectura = document.querySelector("#enviar");

window.addEventListener('load', function(event) {
    event.preventDefault();
    document.getElementById("fechaLectura").value = fechaActual();
});

buscarLectura.addEventListener('click', function(e) {
    e.preventDefault();
    
    let fechaLectura = document.getElementById("fechaLectura").value.trim();

    if (fechaLectura == "") {
        mostrarMensaje("Debe ingresar fecha a buscar", "warning", false, false, "top-end");
        return false;
    } else {
        url = `http://www.eucaristiadiaria.cl/dia_cal.php?fecha=${fechaLectura}`;
        window.open(url, '_blank');
    }
});