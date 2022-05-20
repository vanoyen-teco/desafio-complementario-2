/*
Declaracion inicial
*/
let totalIteration;
let inicio;
let totalBill = 0;
const productos = new Array();
/*
Funciones
*/
function setCantidad(){
    totalIteration = prompt('Ingrese cantidad de productos')
    return validateNumber(totalIteration);
}
function validateNumber(number){
    if(number === "" || number === undefined || number === null || isNaN(number)){
        return false;
    }else{
        return true;
    }
}

do{
    inicio = setCantidad();
}while(!inicio);

for(let i = 1; i <= parseInt(totalIteration); i++){
    let number;
    let producto = prompt(`Ingrese nombre del producto Nº ${i}`);
    producto = producto.toLowerCase();
    let itemIndex = productos.findIndex( item => item.nombre === producto); 
    if(itemIndex == -1){
        // primer ingreso del item, solicito el precio.
        do{
            number = prompt(`Ingrese precio del producto ${i}`);        
        }while(!validateNumber(number));
        // agrego el producto.
        productos.push({nombre: `${producto}`, cantidad: 1, precio: number});
    }else{
        // sumo uno ya que el item se encuentra en el "carro";
        productos[itemIndex].cantidad = productos[itemIndex].cantidad + 1;
    }
};

// calculo final
productos.forEach(item => {
    totalBill += item.cantidad * item.precio;
});

alert(`El total es: ${totalBill}`);