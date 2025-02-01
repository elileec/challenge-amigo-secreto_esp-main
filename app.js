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
        alert("Por favor ingrese un nombre");
    }
   
}

function sortearAmigo(){
    let resultado1 = document.getElementById('resultado');
    resultado1.innerHTML = '';
    let elementos = amigos.length;
    if(elementos>0){
        let padre = document.getElementById('resultado');
        let item = document.createElement('li');
        item.innerText=("El amigo ganador es: "+amigos[1]);
        padre.appendChild(item);

     
        
    }else{
        alert("Lista de amigos vacia");
    }
   
}