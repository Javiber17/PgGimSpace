
const apellido=document.getElementById("apellido");
const nombre=document.getElementById("nombre");
const email=document.getElementById("email");
const telefono=document.getElementById("telefono");
const comentario=document.getElementById("comentario");
const formulario=document.getElementById("formulario")



formulario.addEventListener("submit", e=>{
    e.preventDefault()
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/;

    if(!(regexEmail.test(email.value))){
        alert("El correo no es válido")
    }
    if(apellido.value.length <2){
        alert("El apellido es muy corto")
    }
    if(nombre.value.length <2){
        alert("El nombre es muy corto")
    }
})