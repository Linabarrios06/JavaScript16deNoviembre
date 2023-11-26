// Iniciamos el contedo de los valores en 0 
let cantidadLibroPhp = 0;
let cantidadLibroHtml = 0;
let totalLibroPhp = 0;
let totalLibroHtml = 0;
let total = 0;

// creamos la función incremento que se encarga de sumar la cantidad y el valor del libro elegido 
function incremento(producto, precio) {
    if (producto === 'LibroPhp') {
        cantidadLibroPhp += 1;
        document.getElementById('cantidadLibroPhp').innerHTML = cantidadLibroPhp;
        totalLibroPhp = cantidadLibroPhp * precio; //Aqui multiplicamos la cantidad por el valor del libro
        document.getElementById('totalLibroPhp').innerHTML = totalLibroPhp;
    } else if (producto === 'LibroHtml') {
        cantidadLibroHtml += 1;
        document.getElementById('cantidadLibroHtml').innerHTML = cantidadLibroHtml;
        totalLibroHtml = cantidadLibroHtml * precio;//Aqui multiplicamos la cantidad por el valor del libro
        document.getElementById('totalLibroHtml').innerHTML = totalLibroHtml;
    }

    total = totalLibroPhp + totalLibroHtml; //aqui sumamos el total de los precios dados para dar el precio final
    document.getElementById('total').innerHTML = total;
}

// creamos la función decremento 
function decremento(producto, precio) {
    if (producto === 'LibroPhp' && cantidadLibroPhp > 0) {//solo se va a decrementar si la cantidad es mayor a 0
        cantidadLibroPhp -= 1;  
        document.getElementById('cantidadLibroPhp').innerHTML = cantidadLibroPhp;
        totalLibroPhp = cantidadLibroPhp * precio;//multiplicamos la cantidad por el precio de este
        document.getElementById('totalLibroPhp').innerHTML = totalLibroPhp;
    } else if (producto === 'LibroHtml' && cantidadLibroHtml > 0) {
        cantidadLibroHtml -= 1;
        document.getElementById('cantidadLibroHtml').innerHTML = cantidadLibroHtml;
        totalLibroHtml = cantidadLibroHtml * precio;
        document.getElementById('totalLibroHtml').innerHTML = totalLibroHtml;
    }

    total = totalLibroPhp + totalLibroHtml; //Sacamos el precio final a pagar con la suma de los precios 
    document.getElementById('total').innerHTML = total;
}

// creamos la funcion resetear que inmediatamenta al dar click se bora todo y quedan los precios en o nuevamente
function resetear() {
    cantidadLibroPhp = 0;
    cantidadLibroHtml = 0;
    totalLibroPhp = 0;
    totalLibroHtml = 0;
    total = 0;

    document.getElementById('cantidadLibroPhp').innerHTML = cantidadLibroPhp;
    document.getElementById('cantidadLibroHtml').innerHTML = cantidadLibroHtml;
    document.getElementById('totalLibroPhp').innerHTML = totalLibroPhp;
    document.getElementById('totalLibroHtml').innerHTML = totalLibroHtml;
    document.getElementById('total').innerHTML = total;
}