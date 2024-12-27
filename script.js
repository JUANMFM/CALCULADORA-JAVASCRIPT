function agregar(valor){
    //esto agrega a la pantalla el valor del boton de la calculadora que toquemos
    document.getElementById('pantalla').value += valor
}


//hasta aqui el c y el = no funcionan


//esto vacia la pantalla
function borrar(){
    document.getElementById('pantalla').value = ''
}

//esta accion toma el valor de la pantalla y ejecuta los calculos
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}