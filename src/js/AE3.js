//crear elemento con nombre de tag "div"
const element = document.createElement('div');
console.log('element: ',element);

const element3 = document.createElement('a');
console.log('element: ',element3);

const element2 = document.createTextNode('contenido de elemento');
console.log('element2: ',element2);


//insertar elementos
//appenChild 1era forma de insertar en elemento, deja al elemento 
//al ultimo de todos los elementos hijos que ya posea el elemento padre
const elementoPadre = document.getElementById('elemento_padre');
elementoPadre.appendChild(element);
elementoPadre.appendChild(element3);

const referencia = document.getElementById("insertar");
const padre = referencia.parentNode;

//insertBefore que inserta un elemento por encima del elemento de referencia
padre.insertBefore(element3, referencia);
console.log('padre', padre);

//reemplazar elementos
 let reemplazo = document.getElementById('reemplazo');
padre.replaceChild(reemplazo, referencia)

//eliminar elemento
const eliminar = document.getElementById('eliminar');

//EVENTOS
//evento para el click en un boton, aumenta una variable de uno en uno, se visualiza la variable aumentada en un elemento

setTimeout(function(){
    padre.removeChild(eliminar);
    const texto_boton = `<div>
                    <button id="boton">Hazme Click!</button>
                    <div id="contador_clicks">0</div>
                    </div>`;
    let contador = 0;
    element.innerHTML = texto_boton;
    const boton = document.getElementById('boton');
    padre.appendChild(element);
    const contador_click = document.getElementById('contador_clicks');
    boton.addEventListener('click', function(){
        contador++;
        contador_click.innerHTML = contador;
    });

}, 6000);

//style cambia el diseño de la pagina
reemplazo.style.backgroundColor = "rgb(255,0,0)";









