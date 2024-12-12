const input = document.getElementById('input-de-texto')
input.addEventListener("input", validarInput)

function validarInput() {

    if (input.value === '') {
        input.classList.add('campo-nao-preenchido')
        input.classList.remove('campo-preenchido')
    } else {
        input.classList.add('campo-preenchido')
        input.classList.remove('campo-nao-preenchido')
    }

}



