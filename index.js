/* Imagen de perfil completo*/
const fulImgBox = document.getElementById('fulImgBox');
const fulImg = document.getElementById('fulImg');

openFulImg = () => {
    fulImgBox.style.display = 'flex';
}
closeImg = () =>{
    fulImgBox.style.display = "none";
}

/*validaciones de furmulario*/
const datos = {
    nombre: document.getElementById('nombre'),
    email: document.getElementById('email'),
    telefono: document.getElementById('telefono'),
    mensaje: document.getElementById('mensaje')
}
const validarCampos = (menssage, e) =>{
        const campo = e.target.value;
        const inp = e.target;
        if(campo.trim().length ===0 ){
            inp.style.border = 'red solid 1px';
            inp.nextElementSibling.classList.add('fail');
            inp.nextElementSibling.innerText = menssage;
        }else{
            inp.style.border = 'green solid 1px';
            inp.nextElementSibling.classList.remove('fail')
            inp.nextElementSibling.innerText = '';
        }
}   
datos.nombre.addEventListener('blur', (e) => validarCampos("Favor completar su Nombre y Apellido",e));
datos.email.addEventListener('blur', (e) => validarCampos("Favor completar su Correo electronico",e));
datos.telefono.addEventListener('blur', (e) => validarCampos("Favor completar su Numero de Telefono",e));
datos.mensaje.addEventListener('blur', (e) => validarCampos("Favor agragar el mensaje que quiere enviar",e));
/*Experiencia Laboral*/
const fulExperiencia1 = document.getElementById('fulExperiencia1');
const fulExperiencia2 = document.getElementById('fulExperiencia2');
const fulExperiencia3 = document.getElementById('fulExperiencia3');

openExperiencia1 = () => {
    fulExperiencia1.style.display = 'flex';
}
closeExperiencia1 = () =>{
    fulExperiencia1.style.display = "none";
}
openExperiencia2 = () => {
    fulExperiencia2.style.display = 'flex';
}
closeExperiencia2 = () =>{
    fulExperiencia2.style.display = "none";
}
openExperiencia3 = () => {
    fulExperiencia3.style.display = 'flex';
}
closeExperiencia3 = () =>{
    fulExperiencia3.style.display = "none";
}