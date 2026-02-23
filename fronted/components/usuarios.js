export const armarUsuarios = (elemento, datos) =>{
    elemento.innerHTML ='';
    const fragmento = document.createDocumentFragment();
    for(const usuario in datos){
        const div = document.createElement('div');
        const btnEliminar = document.createElement('button');
        const btnEditar = document.createElement('button');
        const i = document.createElement('i');
        btnEliminar.setAttribute("class", "btnEliminar")
        div.setAttribute("class", "card");
        i.setAttribute("class","bi bi-trash");
        btnEliminar.append(i);
        div.append(btnEliminar);
        for(const elemento in datos[usuario])
        {            
            if (elemento == "id")
            {           
                const p = document.createElement('p');
                p.setAttribute("class", "id");
                p.textContent = datos[usuario][elemento];
                div.append(p);
            }
            else{
                const p = document.createElement('p');
                p.textContent = `${elemento}: ${datos[usuario][elemento]}`;
                div.append(p);  
            }

        }
        btnEditar.setAttribute("class", "btnEditar")
        btnEditar.textContent = "editar"
        div.append(btnEditar)
        fragmento.append(div)
    }
    elemento.append(fragmento)
}