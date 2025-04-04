// Script 1: Validación del formulario y mensaje de confirmación
function validarFormulario(event) {
    // Prevenir el envío del formulario (esto es importante)
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    const consulta = document.getElementById('consulta').value;

    // Validación de los campos
    if (nombre === "" || email === "" || mensaje === "" || consulta === "") {
        alert("Todos los campos deben ser completados.");
        return false; // No enviamos el formulario
    }

    // Mostrar mensaje de confirmación
    document.getElementById('mensajeConfirmacion').style.display = 'block';

    // Retornar false para evitar que el formulario se envíe
    return false;
}

// Script 2: Modificación de estilo de un componente (por ejemplo, cambiar color de fondo al pasar el ratón)
document.getElementById('formulario').addEventListener('mouseover', function() {
    document.getElementById('formulario').style.backgroundColor = '#ffdafb';
});

document.getElementById('formulario').addEventListener('mouseout', function() {
    document.getElementById('formulario').style.backgroundColor = '';
});
