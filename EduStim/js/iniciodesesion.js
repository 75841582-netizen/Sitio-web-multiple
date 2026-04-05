function validarFormulario(){

    const nombre=document.getElementById('nombre').value.trim()//elimina espacios
    const email=document.getElementById('email').value.trim()//elimina espacios
    const password=document.getElementById('password').value.trim()//elimina espacios
    const confirmar=document.getElementById('confirmar').value.trim()//elimina espacios

    if(nombre.length < 3){
        alert("El nombre debe tener al menos 3 caracteres");
        return false;
    }

    if(!email.includes("@")){
        alert("Correo inválido.");
        return false;
    }

    if(password.length < 12){
        alert("La contraseña debe tener al menos 12 caracteres");
            return false;
    }

    if(password !== confirmar){
        alert("Las contraseñas no coinciden");
        return false;
    }

    alert("Formulario Valido ✅");
    return true;
}