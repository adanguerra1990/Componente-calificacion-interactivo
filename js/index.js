let calificacionObtenida;
const mostarCalificacion = document.querySelector('.mostrar-calificacion');
const tituloModal = document.querySelector('.titulo-modal');
let mySpans = document.querySelectorAll(".calificador");
const contendorPrincipal = document.querySelector('.container')
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const botonEnviar = document.getElementById("boton");

document.addEventListener("DOMContentLoaded", function () {
    iniciarApp();
});

function iniciarApp() {
    botonSubmit();
}

botonEnviar.addEventListener("click", (evento) => {
    evento.preventDefault();
    abrirModal();
    setTimeout(cerrarModal, 2500)
});

function seleccionarCalificacion() {
    for (let i = 0; i < mySpans.length; i++) {
        mySpans[i].addEventListener("click", (evento) => {
            let valorTexto = mySpans[i].textContent;
            let valorNumero = Number(valorTexto);
            calificacionObtenida = valorNumero;
        });
    }
    claseActiva();
}

function claseActiva() {
    mySpans.forEach((span) => {
        span.addEventListener("click", () => {
            mySpans.forEach((span) => {
                span.classList.remove("active");
            });
            span.classList.add("active");
        });

    });
}

function abrirModal() {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
    botonSubmit();
}

function cerrarModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    resetModal();
}

function resetModal() {
    tituloModal.innerHTML = 'Sorry!';
    mostarCalificacion.innerHTML = `Select a rating`;
    calificacionObtenida = null;
    mySpans.forEach((span) => {
        span.classList.remove('active');
    })
}

function botonSubmit() {
    if (calificacionObtenida) {
        let calificacionFinal = calificacionObtenida;
        tituloModal.innerHTML = 'Thank you!';
        mostarCalificacion.innerHTML = `You Selected ${calificacionFinal} out of 5`;
    } else {
        resetModal();
    }
    seleccionarCalificacion();
    
}