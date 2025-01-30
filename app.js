// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigos = [];

function agregarAmigo(){
    var amigo = document.getElementById("amigo").value;
    if(amigo!=""){
        amigos.push(amigo);
        amigos.forEach(function(valor){
           // document.getElementById("resultado").innerHTML=valor+"<br>"; 
            const mostraramigos = document.createElement('li');
            const elementopadre = document.getElementById("listaAmigos");
            elementopadre.appendChild(mostraramigos);
        });
        
        document.getElementById("amigo").value="";
    }else{
        alert("Por favor ingrese un nombre");
    }
   
}