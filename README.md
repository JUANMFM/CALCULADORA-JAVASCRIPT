## Funciones Principales

### `agregarALaPantalla(value)`

Esta función se encarga de agregar el valor proporcionado a la pantalla de la calculadora. Recibe un parámetro `value` que representa el valor que se debe agregar. Utiliza `document.getElementById('pantalla')` para obtener el elemento de la pantalla por su identificador y luego actualiza el valor del campo `value` concatenando el nuevo valor.

    function agregar(valor){
    //esto agrega a la pantalla el valor del boton de la calculadora que toquemos
    document.getElementById('pantalla').value += valor
}

### `calcular()`

La función `calcular()` se ejecuta cuando se presiona el botón de igual (=) en la calculadora. Primero, obtiene el valor actual de la pantalla utilizando `document.getElementById('pantalla').value`. Luego, utiliza la función `eval()` para evaluar la expresión matemática representada por el valor de la pantalla. El resultado se almacena en la variable `result`. Finalmente, se actualiza el valor de la pantalla con el resultado calculado.

    //esta accion toma el valor de la pantalla y ejecuta los calculos
    function calcular(){
        const valorPantalla = document.getElementById('pantalla').value
        const resultado = eval(valorPantalla)
        document.getElementById('pantalla').value = resultado
}

Es importante tener en cuenta que el uso de `eval()` puede presentar riesgos de seguridad si se permite que los usuarios ingresen código arbitrario. En este caso, asumimos que el código solo se ejecutará en un entorno seguro.

### `limpiarPantalla()`

La función `limpiarPantalla()` se utiliza para borrar el contenido de la pantalla de la calculadora. Simplemente asigna una cadena vacía al campo `value` del elemento de la pantalla.

    //esto vacia la pantalla
    function borrar(){
        document.getElementById('pantalla').value = ''
}

## Integración con HTML y CSS

Para utilizar estas funciones, asegúrate de tener un elemento HTML con el id "pantalla" que represente la pantalla de la calculadora. Puedes ver el código HTML y CSS correspondiente en los archivos proporcionados en el repositorio.


