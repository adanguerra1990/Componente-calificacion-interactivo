### Screenshot
### Pantalla Principal
![](./design/principal.jpg)
### Ventana Modal
![](./design/modal1.jpg)
![](./design/modal2.jpg)


## Codigo Javascript
1. El código comienza declarando algunas variables:
   - `calificacionObtenida` es una variable que almacenará la calificación seleccionada.
   - `mostarCalificacion` es una constante que hace referencia a un elemento HTML con la clase "mostrar-calificacion".
   - `tituloModal` es una constante que hace referencia a un elemento HTML con la clase "titulo-modal".
   - `mySpans` es una variable que almacena una colección de elementos HTML con la clase "calificador".
   - `contendorPrincipal` es una constante que hace referencia a un elemento HTML con la clase "container".
   - `modal` es una constante que hace referencia a un elemento HTML con la clase "modal".
   - `overlay` es una constante que hace referencia a un elemento HTML con la clase "overlay".
   - `botonEnviar` es una constante que hace referencia a un elemento HTML con el id "boton".

2. El código agrega un event listener al evento "DOMContentLoaded", que activa la función `iniciarApp` cuando la página termina de cargar.

3. Se llama a la función `iniciarApp`, que a su vez llama a la función `botonSubmit`.

4. El código agrega un event listener al evento "click" del elemento `botonEnviar`. Cuando se hace clic, evita el comportamiento de envío de formulario predeterminado, llama a la función `abrirModal` y establece un temporizador para llamar a la función `cerrarModal` después de 2500 milisegundos (2.5 segundos).

5. Se define la función `seleccionarCalificacion`. Itera sobre cada elemento en la colección `mySpans` y agrega un event listener al evento "click". Cuando se hace clic en un span, se obtiene el contenido de texto del span, se convierte a un número y se asigna a la variable `calificacionObtenida`.

6. Se define la función `claseActiva`. Agrega un event listener al evento "click" a cada elemento en la colección `mySpans`. Cuando se hace clic en un span, se elimina la clase "active" de todos los spans y se agrega la clase "active" al span clickeado.

7. Se define la función `abrirModal`. Elimina la clase "hidden" de los elementos `modal` y `overlay` y llama a la función `botonSubmit`.

8. Se define la función `cerrarModal`. Agrega la clase "hidden" a los elementos `modal` y `overlay` y llama a la función `resetModal`.

9. Se define la función `resetModal`. Restablece el contenido de los elementos `tituloModal` y `mostarCalificacion`, establece la variable `calificacionObtenida` en null y elimina la clase "active" de todos los spans.

10. Se define la función `botonSubmit`. Si se ha seleccionado una calificación (`calificacionObtenida` no es null), se asigna la calificación seleccionada a la variable `calificacionFinal` y se actualiza el contenido de los elementos `tituloModal` y `mostarCalificacion` en consecuencia. Si no se ha seleccionado ninguna calificación, se llama a la función `resetModal`. Finalmente, se llama a la función `seleccionarCalificacion`.
