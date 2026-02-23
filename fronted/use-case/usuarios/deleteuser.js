export const eliminarUsuario = async (id) =>{
    console.log(id);
    
    await fetch(`http://localhost:3001/usuarios/${id}`,{
        method: "DELETE"
    })
}