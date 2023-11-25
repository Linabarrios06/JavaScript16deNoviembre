 window.addEventListener("keydown",(e)=>{
     if(e.key=="+"){
         incremento()
     }
     else if(e.key=="-"){
         decremento()
     }
     else (e.key=="*");{
         multiplicar()
     }
 } )


let cantidadLibroPhp=0;
let cantidadLibroPhyton=0;
let total=0;


function incremento(producto,precio){
    if(producto ===   "Libro PHP"){
        cantidadLibroPhp +=1;
    document.getElementById("cantidad")
    }

    
    carrito+=1;
    localStorage.setItem("Contador",carrito)
    alert("Incremento"+carrito)
    valor.innerHTML=carrito;
}
function decremento(){
    alert("Incremento")
    if(carrito>0){
        carrito-=1;
        valor.innerHTML=carrito;
    }else{
        carrito=0;
        valor.innerHTML=carrito
    }
}
function multiplicar(){
    carrito=0;
    valor.innerHTML=carrito;
}
function resetear(){
    alert("Eliminó"+carrito)
    carrito=0;
    valor.innerHTML=carrito;
}