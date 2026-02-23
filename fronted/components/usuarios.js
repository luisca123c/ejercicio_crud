export const armarUsuarios = (elemento, datos) =>{
    elemento.innerHTML ='';
    const fragmento = document.createDocumentFragment();
    for(const usuario in datos){
        const div = document.createElement('div');
        for(const elemento in datos[usuario])
        {            
            
            const p = document.createElement('p');
            p.textContent = datos[usuario][elemento];
            div.append(p);
            fragmento.append(div)
        }
    }
    elemento.append(fragmento)
}