window.onload = function(){
    cargarUsuarios();
}

function cargarUsuarios(){
    let lista = document.getElementById("listaUsuarios")
    let usuarioHTML = "";
    $.ajax({
        url: '/user',
        type: 'GET',
        success: function(response){
            for(let usuario of response){
                usuarioHTML += `<tr>
                                    <td class="text-center">${usuario.id}</td>
                                    <td>${usuario.nombre}</td>
                                    <td>${usuario.correo}</td>
                                    <td>${usuario.telefono}</td>
                                    <td class="text-center">
                                        <a href='#' onclick="getUsuario('${usuario.id}')" data-toggle="modal" data-target="#modalCrearNuevo" class='btn btn-warning btn-circle btn-sm' >
                                            Editar
                                        </a>
                                        <a href='#' onclick="eliminarUsuario('${usuario.id}')" class='btn btn-danger btn-circle btn-sm'>
                                            Borrar
                                        </a>
                                    </td>
                                </tr>`;
            }
            lista.innerHTML = usuarioHTML
        },
        error: function(error){
            lista.innerHTML = "<h1>Error al cargar los usuarios</h1>"
        }
    })
}

function crearNuevoUsuario(){
    var nombre = document.getElementById("txtNombre").value;
    var correo = document.getElementById("txtCorreo").value;
    var telefono = document.getElementById("txtTelefono").value;

    if(cadenaNula(nombre) || cadenaNula(correo) || cadenaNula(telefono)){
        Swal.fire({
            title: 'Atención!',
            text: 'Debes llenar todos los campos',
            icon: 'warning',
            confirmButtonText: 'Cool'
        })
    }else{
        $.ajax({
            url: '/user/create',
            type: 'POST',
            data: {
                nombre: nombre,
                correo: correo,
                telefono: telefono
            },
            success: function(response){
                Swal.fire({
                    title: 'Atención!',
                    text: 'Usuario creado correctamente',
                    icon: 'success'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload();
                    }
                })
            },
            error: function(error){
                Swal.fire({
                    title: 'Atención!',
                    text: 'Error al crear el usuario',
                    icon: 'error'
                })
            }
        })
    }
}

function cadenaNula(valor){
    if (valor == null) { return true; }
    for (var i = 0; i < valor.length; i++) {
        if ((valor.charAt(i) != ' ') && (valor.charAt(i) != "\t") && (valor.charAt(i) != "\n") && (valor.charAt(i) != "\r")) { return false; }
    }
    return true;
}

function changeModal(){
    document.getElementById("idUser").value = ""
    document.getElementById("txtNombre").value = ""
    document.getElementById("txtCorreo").value = ""
    document.getElementById("txtTelefono").value = ""
    document.getElementById("modalCrearNuevoLabel").innerHTML = "Crear nuevo usuario"
    document.getElementById("btnGuardar").setAttribute( "onClick", "crearNuevoUsuario();" );
}

function actualizarUsuario(){
    let id = document.getElementById("idUser").value;
    let nombre = document.getElementById("txtNombre").value;
    let correo = document.getElementById("txtCorreo").value;
    let telefono = document.getElementById("txtTelefono").value;

    if(cadenaNula(nombre) || cadenaNula(correo) || cadenaNula(telefono)){
        Swal.fire({
            title: 'Atención!',
            text: 'Debes llenar todos los campos',
            icon: 'warning',
            confirmButtonText: 'Cool'
        })
    }else{
        $.ajax({
            url: '/user/'+id,
            type: 'PUT',
            data: {
                nombre: nombre,
                correo: correo,
                telefono: telefono
            },
            success: function(response){
                Swal.fire({
                    title: 'Atención!',
                    text: 'Usuario modificado correctamente',
                    icon: 'success'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload();
                    }
                })
            },
            error: function(error){
                Swal.fire({
                    title: 'Atención!',
                    text: 'Error al modificar el usuario',
                    icon: 'error'
                })
            }
        })
    }
}

function eliminarUsuario(id){
    Swal.fire({
        title: 'Atención!',
        text: '¿Estas seguro de eliminar el usuario?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'No, cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: '/user/'+id,
                type: 'DELETE',
                success: function(response){
                    Swal.fire({
                        title: 'Atención!',
                        text: 'Usuario eliminado correctamente',
                        icon: 'success'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.reload();
                        }
                    })
                },
                error: function(error){
                    Swal.fire({
                        title: 'Atención!',
                        text: 'Error al eliminar el usuario',
                        icon: 'error'
                    })
                }
            })
        }
    })
}
function getUsuario(id){
    $.ajax({
        url: '/user/' + id,
        type: 'GET',
        success: function(response){
            document.getElementById("idUser").value = response.id
            document.getElementById("txtNombre").value = response.nombre
            document.getElementById("txtCorreo").value = response.correo
            document.getElementById("txtTelefono").value = response.telefono
            document.getElementById("modalCrearNuevoLabel").innerHTML = "Actualizar usuario"
            document.getElementById("btnGuardar").setAttribute( "onClick", "actualizarUsuario();" );
        },
        error: function(error){
            lista.innerHTML = "<h1>Error al cargar los usuarios</h1>"
        }
    })
}