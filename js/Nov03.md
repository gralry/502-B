# Arreglos (*arrays*)

## Creación e índices

``` js
const frutas = ["manzana", "pera", "uva"];
console.log(frutas[0]); // manzana
console.log(frutas.length); // 3
```

Los índices comienzan en cero. Un arreglo puede almacenar valores de
distintos tipos, aunque suele ser conveniente (recomendado) mantener una estructura
consistente.


---

##  Modificación y métodos básicos

``` js
const tareas = ["leer", "practicar"];
tareas.push("repasar"); // agrega al final
tareas.pop();           // quita el último
tareas.unshift("planear"); // agrega al inicio
tareas.shift();            // quita el primero
```

`const` evita reasignar la variable `tareas`, pero no impide modificar
el contenido del arreglo.


---

##  Recorrido

``` js
const numeros = [3, 6, 9];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

for (const numero of numeros) {
  console.log(numero);
}

numeros.forEach(numero => console.log(numero));
```
true debugger eval code:8:9
El número 92 se encuentra en el índice: -1 debugger eval code:19:9
undefined  18, 25];

console.log(edades.includes(21));
console.log(edades.indexOf(18));

const dobles = edades.map(edad => edad * 2);
const mayores = edades.filter(edad => edad >= 18);
const primeraMayor = edades.find(edad => edad > 20);

console.log(dobles, mayores, primeraMayor);
```


---

## funciones relevantes con arreglos
true debugger eval code:8:9
El número 92 se encuentra en el índice: -1 debugger eval code:19:9
undefined 
-   `map()` crea un arreglo transformado.
-   `filter()` devuelve los elementos que cumplen una condición.
-   `find()` devuelve el primer elemento que cumple la condición, o
    `undefined` si no existe.
-   `forEach()` ejecuta una función por cada elemento y no está pensado
    para crear un nuevo arreglo de resultados.


---

## Ejercicio 1. Lista de elementos

Crear un arreglo con seis asignaturas. Mostrar el primer elemento, el
último y la cantidad de elementos.


---

```js
// 1. Crear un arreglo con seis asignaturas
const asignaturas = ["Matemáticas", "Historia", "Física", "Química", "Literatura", "Biología"];

// 2. Mostrar el primer elemento
// los arreglos en JavaScript empiezan en el índice 0
console.log("Primer elemento:", asignaturas[0]); 

// 3. Mostrar el último elemento
// Usamos .length - 1 para obtener de forma dinámica el último índice
console.log("Último elemento:", asignaturas[asignaturas.length - 1]); 

// 4. Mostrar la cantidad de elementos
// La propiedad .length nos da el tamaño total del arreglo
console.log("Cantidad de elementos:", asignaturas.length);
```

---

## Ejercicio 2. Modificación

Agregar dos asignaturas, eliminar una del final y otra del inicio.
Mostrar el arreglo después de cada operación.



---

```js
// arreglo inicial
let asignaturas = ["Matemáticas", "Historia", "Física", "Química", "Literatura", "Biología"];
console.log("Arreglo inicial:", asignaturas);

// 1. Agregar dos asignaturas (al final usando .push o al inicio usando .unshift)
// Usaremos .push() para agregarlas al final
asignaturas.push("Geografía");
asignaturas.unshift("Arte");
console.log("Después de agregar dos asignaturas:", asignaturas);

// 2. Eliminar una asignatura del final
// El método .pop() elimina el último elemento y lo devuelve
let ultimo = asignaturas.pop();
console.log("Después de eliminar la del final:", asignaturas);
console.log("Valor eliminado: ", ultimo);

// 3. Eliminar una asignatura del inicio
// El método .shift() elimina el primer elemento y desplaza los demás, regresa el elemento eliminado
let primero = asignaturas.shift();
console.log("Después de eliminar la del inicio:", asignaturas);
console.log("Valor eliminado: ", primero);

```



---

## Ejercicio 3. Recorridos

Recorrer el mismo arreglo mediante `for`, `for...of` y `forEach()`.
Comparar la legibilidad de las soluciones.


---

```js
const asignaturas = ["Historia", "Física", "Química", "Literatura", "Biología", "Geografía"];

// 1. Usando el bucle tradicional 'for'
console.log("--- Bucle FOR tradicional ---");
for (let i = 0; i < asignaturas.length; i++) {
    console.log(`Asignatura: ${asignaturas[i]}`);
}

// 2. Usando 'for...of'
console.log("\n--- Bucle FOR...OF ---");
for (const asignatura of asignaturas) {
    console.log(`Asignatura: ${asignatura}`);
}

// 3. Usando el método '.forEach()'
console.log("\n--- Método FOREACH ---");
asignaturas.forEach(asignatura => {
    console.log(`Asignatura: ${asignatura}`);
});

```




---

## Ejercicio 4. Búsqueda

Crear un arreglo de números. Comprobar si contiene un número específico
y localizar el índice de otro.


---

```js
// 1. Crear un arreglo de números
const numeros =[20, 15, 95, 19, -85];
console.log("Arreglo de números:", numeros);

// 2. Comprobar si contiene un número específico
// El método .includes() devuelve true o false
const numeroABuscar = 33;
const existeNumero = numeros.includes(numeroABuscar);

console.log(`¿El número ${numeroABuscar} está en el arreglo?:`, existeNumero);

// 3. Localizar el índice de otro número
// El método .indexOf() devuelve la posición (0, 1, 2...) o -1 si no lo encuentra
const numeroParaIndice = 92;
const indiceEncontrado = numeros.indexOf(numeroParaIndice);

if (indiceEncontrado !== -1) {
    console.log(`El número ${numeroParaIndice} se encuentra en el índice:`, indiceEncontrado);
} else {
    console.log(`El número ${numeroParaIndice} no existe en el arreglo.`);
}

```


---

## Filter

El método .filter() está diseñado para crear un nuevo arreglo con todos los elementos que cumplan una condición, 
por lo que usarlo para buscar un solo elemento o un índice no es lo más óptimo, 
pero lo usaremos para  entender cómo funciona.

```js
const numeros =[20, 15, 95, 19, -85, 33];
// 1. Comprobar si contiene un número específico (ej. 33)
// Filtramos el arreglo para dejar solo los elementos que sean iguales a 33
const resultadoBusqueda = numeros.filter(num => num === 33);
// Si el arreglo resultante tiene elementos (longitud mayor a 0), significa que sí existía
const existeNumero = resultadoBusqueda.length > 0;
console.log("¿El número 33 está en el arreglo?:", existeNumero);
// 2. Localizar el índice de otro número (ej. 92)
// El método .filter() también nos da acceso al índice en su función callback: (elemento, indice)
let indiceEncontrado = -1;
numeros.filter((num, index) => {
    if (num === 92) {
        indiceEncontrado = index; // Guardamos el índice cuando encontramos el número
        return true;
    }
    return false;
});
console.log("El número 92 se encuentra en el índice:", indiceEncontrado);
```





---

## Ejercicio 5. Transformación

Dado un arreglo de precios, crear otro arreglo con un impuesto del 16 %
aplicado a cada precio.



---

 A diferencia de .filter(), este método no descarta elementos, sino que los transforma uno a uno y genera un nuevo arreglo con los resultados.

 
```js
// 1. Arreglo original de precios (sin impuesto)
const preciosBase =[100, 500, 1600.30];
console.log("Precios base:", preciosBase);

// 2. Crear un nuevo arreglo con el 16% de impuesto aplicado
// Multiplicar por 1.16 suma el precio original más su 16% automáticamente
const preciosConImpuesto = preciosBase.map(precio => {
    const total = precio * 1.16;
    // Usamos .toFixed(2) para asegurar dos decimales (centavos) y lo convertimos a número con Number()
    return Number(total.toFixed(2));
});

console.log("Precios con el 16% de impuesto:", preciosConImpuesto);

```




---

## Ejercicio 6. Filtrado

Dado un arreglo de calificaciones, crear uno nuevo con las
calificaciones aprobatorias. Indicar cuál es el criterio utilizado.



---


El criterio utilizado en este ejercicio para considerar una calificación como aprobatoria es que sea mayor o igual a 6.0 ( >= 6)

```js
// 1. Arreglo original de calificaciones
const calificaciones = [4.5, 7.8, 5.9, 9.2, 6.0, 3.1, 8.5, 10.0];
console.log("Todas las calificaciones:", calificaciones);

// Criterio de aprobación: Calificación mayor o igual a 6.0
const CRITERIO_APROBATORIO = 6.0;

// 2. Crear un nuevo arreglo filtrando solo las aprobatorias
const aprobadas = calificaciones.filter(nota => nota >= CRITERIO_APROBATORIO);

console.log(`Calificaciones aprobatorias (Criterio >= ${CRITERIO_APROBATORIO}):`, aprobadas);

```



---

## Ejercicio 7. Estadísticas

Calcular la suma y el promedio de un arreglo numérico mediante un ciclo.
Comprobar qué ocurre cuando el arreglo está vacío.


---


```js
// Función para calcular suma y promedio utilizando un ciclo
function calcularEstadisticas(arreglo) {
    let suma = 0;

    // 1. Comprobar si el arreglo está vacío
    if (arreglo.length === 0) {
        console.log("El arreglo está vacío.");
        return { suma: 0, promedio: 0 };
    }

    // 2. Ciclo para sumar todos los elementos
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }

    // 3. Calcular el promedio
    let promedio = suma / arreglo.length;

    return { suma, promedio };
}
```


---


```js
// --- CASO 1: Arreglo con números ---
const calificaciones = [4.5, 7.8, 5.9, 9.2, 6.0, 3.1, 8.5, 10.0];
const resultadoOk = calcularEstadisticas(calificaciones);
console.log("Resultado con datos -> Suma:", resultadoOk.suma, "| Promedio:", resultadoOk.promedio);

// --- CASO 2: Arreglo vacío ---
const arregloVacio = [];
const resultadoVacio = calcularEstadisticas(arregloVacio);
console.log("Resultado vacío    -> Suma:", resultadoVacio.suma, "| Promedio:", resultadoVacio.promedio);

```


---

## Ejercicio de repaso

Crear una lista de pendientes que permita agregar tareas, buscar una
tarea y mostrar solo las tareas que contengan una palabra determinada.


---

```js
class ListaPendientes {
    constructor() {
        // Inicializamos nuestra lista de tareas vacía
        this.tareas = [];
    }

    // 1. Agregar una nueva tarea
    agregarTarea(textoTarea) {
        if (!textoTarea || textoTarea.trim() === "") {
            console.log("No se puede agregar una tarea vacía.");
            return;
        }
        this.tareas.push(textoTarea.trim());
        console.log(`Tarea agregada: "${textoTarea}"`);
    }

    // 2. Buscar si una tarea existe exactamente igual
    buscarTareaExacta(textoTarea) {
        const existe = this.tareas.includes(textoTarea.trim());
        console.log(`¿Existe la tarea exacta "${textoTarea}"?:`, existe ? "Sí" : "No");
        return existe;
    }

```



---

```js

    // 3. Mostrar solo las tareas que contengan una palabra determinada
    filtrarTareasPorPalabra(palabra) {
        console.log(`\nFiltrando tareas que contienen: "${palabra}"`);
        
        // Convertimos a minúsculas para que la búsqueda no dependa de mayúsculas/minúsculas
        const palabraMinuscula = palabra.toLowerCase();
        
        const tareasFiltradas = this.tareas.filter(tarea => 
            tarea.toLowerCase().includes(palabraMinuscula)
        );

        if (tareasFiltradas.length === 0) {
            console.log(`No se encontraron tareas con la palabra "${palabra}".`);
        } else {
            tareasFiltradas.forEach((tarea, index) => {
                console.log(`${index + 1}. ${tarea}`);
            });
        }
        return tareasFiltradas;
    }
```



---

```js

    // Método auxiliar para ver toda la lista
    mostrarTodas() {
        console.log("\n--- Todas las tareas ---");
        if (this.tareas.length === 0) {
            console.log("La lista está vacía.");
        } else {
            this.tareas.forEach((t, i) => console.log(`${i + 1}. ${t}`));
        }
    }
}
```



---

###  Prueba

```js
const misPendientes = new ListaPendientes();

// Probando: Agregar tareas
misPendientes.agregarTarea("Comprar leche y pan");
misPendientes.agregarTarea("Estudiar arreglos en JavaScript");
misPendientes.agregarTarea("Llamar al médico por la tarde");
misPendientes.agregarTarea("Comprar croquetas para el perro");

misPendientes.mostrarTodas();

// Probando: Buscar una tarea exacta
misPendientes.buscarTareaExacta("Estudiar arreglos en JavaScript"); // Devuelve Sí
misPendientes.buscarTareaExacta("Ir al gimnasio"); // Devuelve No

// Probando: Filtrar tareas por una palabra clave
misPendientes.filtrarTareasPorPalabra("Comprar"); 
// Mostrará: "Comprar leche y pan" y "Comprar croquetas para el perro"

misPendientes.filtrarTareasPorPalabra("JavaScript");
// Mostrará: "Estudiar arreglos en JavaScript"

```

