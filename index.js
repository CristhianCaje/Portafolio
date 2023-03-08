/*let enviarAlerta = enviarAlerta => {
    swal("","El mensaje fue enviado","success");
}*/
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const expresiones = {
    nombre:/^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email:/^[a-zA-Z-9_.+-]+@[a-zA-Z0-9-]+\[a-zA-Z0-9-.]+$/
}
const validarFormulario = (e) => {
    switch(e.target.name){
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('nom').classList.remove('incorrecto');
                document.getElementById('nom').classList.add('correcto');
            }else{
                document.getElementById('nom').classList.add('incorrecto');
            }
        break;  
        case"email":
        break;
        case"celular":
        break;
        case"descripcion":
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener('blur', validarFormulario);
});
/*formulario.addEventListener('submit',(e) =>{
    e.preventDefault();
})*/