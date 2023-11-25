//addEventListener: Registra un evento a un objeto en específico.
window.addEventListener("keydown",(e)=>{ //funcion flecha es un objeto de tipo evento. Cuando el evento load sea ejecutado, llamara a la función iniciar con un argumento de tipo evento en el cual estara toda la informacion relacionada con el evento y el elemento.
    //Si el usuario preciona la tecla "+" o da en el boton de "Like" inmediataente se llama la funcion incremento 
    if(e.key=="+"){
        incremento()
    }
    //Si el usuario preciona la tecla "-" o da en el boton de "Dislike" inmediataente se llama la funcion decremento
    else if(e.key=="-"){
        decremento()
    }
} )

//creamos un contador 
let contador=0;
const valor=document.getElementById("valor") //getElementById: nos ayuda a llamar un elemento que tenga como Id 
//creamos la funcion incremento 
function incremento(){
    
    contador+=1;
    //localStorage.setItem("Contador",contador)
    //alert("Incremento"+contador) //este alert es para que cada que se sume un like bote un anuncio o alerta de que se sumo un like 
    valor.innerHTML=contador;  //devuelve o establece la sintaxis HTML describiendo los descendientes del elemento
}
//Creamos la funcion decremento para ir borando uno a uno los likes 
function decremento(){
    //alert("Incremento")
    if(contador>0){ //Si el contador esta mayor a 0 al dar click al boton se decrementa
        contador-=1;
        valor.innerHTML=contador;
    }else{
        contador=0;
        valor.innerHTML=contador
    }
}
//creamos la funcion resetear para borrar los likes 
function resetear() {
    contador = 0; //al dar click al boton 
    valor.innerHTML = contador;
}