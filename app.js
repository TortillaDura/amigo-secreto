let amigos = [];


function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    
    if (nombre == "") {
        alert("Por favor, agrega un nombre valido")
    } else {
        amigos.push(nombre);
    }
    
    console.log(amigos)
    
    document.getElementById("amigo").value = "";

    lista();

    return;
}


// creamos la funcion
function lista() {
    const listaAmigos = document.getElementById('listaAmigos');    //Seleccionamos la cajita html
    listaAmigos.innerHTML = "";                                    //Borramos los datos que se encuentran en la lista para que no se dubpliquen    
    amigos.forEach(amigos => {                                      
        const li = document.createElement('li');                   //por cada dato creamos elemento <li>
        li.textContent = amigos;                                   //Asigna el nombre del amigo al contenido del <li>
        listaAmigos.appendChild(li);                               //Agrega el elemento <li> a la lista <ul>
      });
    return;
}



function sortearAmigo() {
    if (amigos == "") {
        alert("Aun no has escrito ningun nombre :c");

    } else {
        const cantidadAmigos = amigos.length;
        const indice = Math.floor(Math.random()*cantidadAmigos)+1;
        console.log(indice);
        listaAmigos.innerHTML = "";


        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `El amigo secreto sorteado es: ${amigos[indice-1]}`;
    }
    return;
}