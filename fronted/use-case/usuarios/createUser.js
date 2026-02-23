export const createUser = async (documento, nombre, genero, ciudad, correo) => {
  const post = await fetch(`http://localhost:3001/usuarios`, {
    method: `POST`,
    body: JSON.stringify({
      nombre: nombre,
      documento: documento,
      genero_id: genero,
      ciudad_id: ciudad,
      correo: correo
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  console.log(documento, nombre, genero, ciudad, correo);
}