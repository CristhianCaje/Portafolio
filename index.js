const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s\s\s]{1,40}$/,
    email:/^[a-zA-Z-9_.+-]+@[a-zA-Z0-9-]+\[a-zA-Z0-9-.]+$/
}
const validarFormulario = (e) => {
    switch(e.target.name){
        case "nombre":
            validaCampo(expresiones.nombre, e.target,'nom');
        break;  
        case"email":
        validaCampo(expresiones.email,e.target, 'em');
        break;
        case"celular":
        break;
        case"descripcion":
        break;
    }
}

const validaCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(campo).classList.remove('incorrecto');
        document.getElementById(campo).classList.add('correcto');
        document.getElementById('mes').innerHTML=''
    }else{
        document.getElementById(campo).classList.add('incorrecto');
        document.getElementById('mes').innerHTML='Favor rellenar el campo del nombre';
        document.getElementById('mes').classList.add('mes');
        document.getElementById('mes').classList.remove('oculto');
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener('blur', validarFormulario);
});
/*formulario.addEventListener('submit',(e) =>{
    e.preventDefault();
})*/