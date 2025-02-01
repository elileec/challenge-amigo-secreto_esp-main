// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// constante amigo corresponde al arreglo donde se almacena la lista de los amigos ingresados.


//funcion agregaramigo: variable amigo guarda el amigo ingresado y el método push lo agrega al arreglo amigos
// la condición if else establece si dejaron el campo nombre vacío 
// el ciclo for of agrega etiquetas tipo lista li y cada elemento almacenado en el arreglo amigos 
//Se crea una etiqueta li y se agrega al valor almacenado en el arreglo 
//la variable resultado1 se utiliza para limpiar la etiqueta ul antes de mostrar el contenido del arreglo

const amigos = [];
 

function agregarAmigo(){
    
    var amigo = document.getElementById('amigo').value;
    //convertir el nombre ingresado a mayúsculas
    amigo = amigo.toUpperCase();
    if(amigo!=""){
        amigos.push(amigo);
        let resultado1 = document.getElementById('resultado');
        resultado1.innerHTML = '';
        
       for(const amigo of amigos){
            let padre = document.getElementById('resultado');
            let item = document.createElement('li');
            item.innerText = amigo;
            padre.appendChild(item);
       }

        document.getElementById("amigo").value="";
    }else{
        alert("Debes ingresar un nombre de amigo");
    }
   
}
//variable resultado1 se utiliza para limpiar la etiqueta ul y el contenido de los amigos listados

function sortearAmigo(){
   
   //resultado1 borra el listado de amigos que se muestran en la etiqueta ul resultaado, para mostrar solo el amigo elegido del sorteo 
    let resultado1 = document.getElementById('resultado');
    resultado1.innerHTML = '';
    // variable elementos toma la cantidad de elememtos del arreglo diminuido en 1 para iniciar desde la posición 0
    let elementos = (amigos.length)-1;
    
    if(elementos>0){
        //variable indiceAleatorio crea un indice aleatorio del arreglo amigos para seleccionar un elemento de la lista amigos
        let indiceAleatorio = Math.floor(Math.random()*elementos);
        let padre = document.getElementById('resultado');
        // item crea una etiqueta para mostrar el elemento amigo seleccionado aleatoriamente del arreglo  amigos
        let item = document.createElement('li');
        item.innerText=("El amigo ganador es: "+amigos[indiceAleatorio]);
        padre.appendChild(item);
        //reinicia el arreglo amigos con el valor 0, para volver a ingresar nuevo listado de amigos 
        amigos.length = 0;
        
    }else{
        alert("No ha ingresado ningún amigo");
    }
   
}