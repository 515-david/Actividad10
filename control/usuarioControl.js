const Usuario = require('../modelo/usuario')


// CREAR USUARIO
function crearUsuario(req, res){
    var usuario = new Usuario();
    var parametros = req.body;

    usuario.nombreUsuario = parametros.nombreUsuario;
    usuario.apellidoUsuario = parametros.apellidoUsuario;
    usuario.celularUsuario = parametros.celularUsuario;
    usuario.emailUsuario = parametros.emailUsuario;
    usuario.direccionUsuario = parametros.direccionUsuario;
    usuario.usuarioUsuario= parametros.usuarioUsuario;
    usuario.contraseñaUsuario = parametros.contraseñaUsuario;

    usuario.save((err, usuarioNuevo)=>{
        if(err){
            res.status(500).send({message:"Error del servidor"});
        }else{
            if(!usuarioNuevo){
                res.status(200).send({message:"No fue posible realizar el registro del usuario"});
            }else{
                res.status(200).send({
                    status:'Usuario Creado',
                    usuarios: usuarioNuevo
                });
            }
        }
    })
}


// OBTENER USUARIO
function obtenerUsuario(req, res){
    Usuario.find((err, usuariosEncontrados)=>{
        if(err){
            res.status(500).send({message:"Error del servidor"});
        }else{
            if(!usuariosEncontrados){
                res.status(200).send({message:"No fue posible encontrar el usuario"});
            }else{
                res.status(200).send({
                    status:'Usuario Encontrado',
                    usuarios: usuariosEncontrados
                });
            }
        }
    })
}



// ACTUALIZAR USUARIO 
function actualizarUsuario(req, res){
    var UsuarioId = req.params.id;
    var nuevosDatosUsuario = req.body;

    Usuario.findByIdAndUpdate(UsuarioId, nuevosDatosUsuario,(err, UsuarioActualizado)=>{
        if(err){
            res.status(500).send({message:"Error del servidor"});
        }else{
            if(!UsuarioActualizado){
                res.status(200).send({message:"No fue posible actualizar el usuario"});
            }else{
                res.status(200).send({
                    status:'Usuario Actualizado',
                    usuarios: nuevosDatosUsuario
                });
            }
        }
    })
}



// ELIMINAR USUARIO 
function eliminarUsuario(req, res){
    var usuariorId = req.params.id;

    Usuario.findByIdAndDelete(usuariorId, (err, usuarioEliminado)=>{
        if(err){
            res.status(500).send({message:"Error del servidor"});
        }else{
            if(!usuarioEliminado){
                res.status(404).send({message:"No fue posible eliminar el usaurio"});
            }else{
                res.status(200).send({
                    status:'Usuario Eliminado',
                    usuarios: usuarioEliminado
                });
            }
        }
    })
}




// exportamos las funciones
module.exports = {
    crearUsuario,
    obtenerUsuario,
    actualizarUsuario,
    eliminarUsuario,
}