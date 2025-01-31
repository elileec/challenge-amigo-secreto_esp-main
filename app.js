// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// constante amigo corresponde al arreglo donde se almacena la lista de los amigos ingresados.
const amigos = [];

//funcion agregaramigo: variable amigo guarda el amigo ingresado y el método push lo agrega al arreglo amigos
// la condición if else establece si dejaron el campo nombre vacío 
// el ciclo for of agrega elementos tipo lista li y cada elemento almacenado en el arreglo amigos 
//variable resultado1 almacena la etiqueta ul resultado 

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