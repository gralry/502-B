# Introducción a JavaScript y su Entorno de Ejecución


## 1.1. Características y Usos de JavaScript

### Propósito
Comprender qué es JavaScript, dónde se ejecuta, cuál es su rol en el ecosistema web y de software moderno, y qué lo distingue de otros lenguajes conocidos como C, Java o Python.

---

### Conceptos Clave

#### 1. Definición y Evolución
JavaScript (JS) es un lenguaje de programación ligero, interpretado o compilado *Just-In-Time* (JIT), dinámico, basado en prototipos y multiparadigma (admite programación imperativa, funcional y orientada a objetos). JavaScript es un lenguaje de tipado dinámico, lo que significa que una variable puede almacenar valores de diferentes tipos durante la ejecución del programa.

Fue creado originalmente para otorgar dinamismo a las páginas web dentro del navegador. Sin embargo, su especificación estándar —denominada **ECMAScript** (estándar ECMA-262)— ha evolucionado de forma continua. Hoy en día, JavaScript se utiliza tanto en el cliente (navegadores) como en servidores (Node.js), bases de datos NoSQL (CouchDB), aplicaciones de escritorio (Electron/GNOME) y dispositivos embebidos.

Es utilizado principalmente para desarrollar aplicaciones web interactivas. Permite modificar el contenido de una página, responder a las acciones de los usuarios, validar formularios, procesar información y comunicarse con servicios web. 

> **Nota:** JavaScript **no es "Java Interpretado"**. Salvo la semejanza de nombre por motivos comerciales históricos y una sintaxis inspirada en la familia C/Java, ambos lenguajes tienen modelos de memoria, semántica y ejecución completamente diferentes.



#### 2. Relación entre HTML, CSS y JavaScript en la Web

En una aplicación web moderna, las tres tecnologías principales trabajan en conjunto:
- **HTML (Estructura):** Define el contenido y los elementos semánticos de la página (títulos, párrafos, formularios, botones).
- **CSS (Presentación):** Modela el diseño visual, colores, fuentes, diagramación y animaciones de los elementos.
- **JavaScript (Comportamiento):** Proporciona dinamismo e interactividad (respuesta a eventos del usuario, validación de datos sin recargar la página, solicitudes asíncronas al servidor y modificación en tiempo real del DOM).

#### 3. Ejecución en el Navegador vs. Node.js
JavaScript necesita un entorno que proporcione los mecanismos necesarios para ejecutar el código. Los dos entornos que se utilizarán en este material son el navegador web y Node.js.

- **Navegador (Entorno Cliente):** El código JS se ejecuta dentro del motor del navegador (como V8 en Chrome/Edge, SpiderMonkey en Firefox o JavaScriptCore en Safari). El navegador le otorga al lenguaje acceso a las **Web APIs**, como el arbol del DOM (`document`), APIs de almacenamiento (`localStorage`), eventos de la interfaz (`window`) y peticiones HTTP (`fetch`).
- **Node.js (Entorno Servidor):** Es un entorno de ejecución independiente del navegador basado en el motor V8 y la librería de E/S asíncrona `libuv`. Node.js le otorga a JavaScript capacidades de backend a través de APIs de sistema operativo: lectura y escritura de archivos (`fs`), sockets de red (`net`, `http`), gestión de procesos (`process`) y módulos nativos, sin la presencia del objeto `window` ni del DOM.

#### 4. Diferencias Generales con C, Java y Python

Esta tabla comparativa sintetiza las particularidades de JavaScript:

| Característica | C | Java | Python | JavaScript |
| :--- | :--- | :--- | :--- | :--- |
| **Tipado** | Estático e implícito/explícito | Estático y explícito | Dinámico e implícito | **Dinámico e implícito**  |
| **Compilación / Ejecución** | Compilado a código máquina | Compilado a Bytecode (JVM) | Interpretado | **JIT (Just-In-Time) por el motor**  |
| **Orientación a Objetos** | No nativa (Estructurado) | Basada en Clases explícitas | Basada en Clases | **Basada en Prototipos** (con sintaxis `class` sugar)  |
| **Funciones** | Subrutinas / Punteros a función | Métodos ligados a clases | Ciudadanos de 1ª clase | **Ciudadanos de 1ª clase (son objetos)**  |
| **Modelo Concurrencia** | Multihilo explícito | Multihilo con memoria compartida | Multihilo (GIL) / Asíncrono | **Monohilo con Event Loop asíncrono**  |

Que las funciones sean **"ciudadanos de primera clase"** (*First-Class Citizens* o *First-Class Functions*) significa que el lenguaje las trata **exactamente con las mismas propiedades, capacidades y derechos que a cualquier otro valor o tipo de dato** (como un número, una cadena de texto o un objeto). 
En JavaScript y Python, las funciones son literalmente **objetos en memoria**. Por ello, pueden poseer sus propias propiedades y métodos, en **JavaScript** y **Python**, **una función es un objeto real que se puede manipular dinámicamente**

---

Para comprobar si las funciones son ciudadanos de primera clase en un lenguaje, deben poder cumplir con tres operaciones fundamentales [ [A re-introduction to JavaScript (JS tutorial)] ](https://mdn2.netlify.app/en-us/docs/web/javascript/a_re-introduction_to_javascript/):

#### (1) Asignar una función a una variable

Se puede almacenar una función dentro de una variable o constante como si fuera cualquier valor.

* **JavaScript:**

```js
const saludar = function(nombre) {
  return `Hola, ${nombre}`;
};

console.log(saludar("Carlos")); // Se ejecuta invocando la variable
```

* **Python:**

```js
def saludar(nombre):
    return f"Hola, {nombre}"

mi_funcion = saludar  # Asignamos la referencia de la función
print(mi_funcion("Carlos"))

```



#### (2) Pasar una función como argumento a otra función (*Callbacks*)

Puedes enviar una función como parámetro hacia otra función[1]. Esto da origen a las **Funciones de Orden Superior** (*Higher-Order Functions*).

* **JavaScript:**

```js
function procesarUsuario(nombre, funcionCallback) {
  return funcionCallback(nombre);
}

// Pasamos 'saludar' como argumento
console.log(procesarUsuario("Ana", saludar));
```

* **Python:**

```py
def procesar_usuario(nombre, funcion_callback):
    return funcion_callback(nombre)

# Pasamos 'saludar' como argumento
print(procesar_usuario("Ana", saludar))
```

---

#### (3) Retornar una función desde otra función

Una función puede construir y devolver una nueva función como su resultado. 

* **JavaScript:**

```js
function crearMultiplicador(factor) {
  return function(numero) {
    return numero * factor; // La función devuelta recuerda el parámetro 'factor'
  };
}

const duplicar = crearMultiplicador(2);
console.log(duplicar(5)); // Resultado: 10
```

* **Python:**

```py
def crear_multiplicador(factor):
    def multiplicar(numero):
        return numero * factor
    return multiplicar

duplicar = crear_multiplicador(2)
print(duplicar(5))  # Resultado: 10
```


#### 5. Características Clave del Lenguaje

JavaScript posee características que lo distinguen de otros lenguajes de programación como C, C++ y Java. Conocerlas permite comprender por qué su sintaxis, la forma de manejar los datos y el comportamiento de sus programas presentan algunas diferencias respecto a los lenguajes que los estudiantes ya conocen.

- **Tipado Dinámico:** Las variables no están atadas a un tipo de dato estático. Una misma variable puede almacenar un número, luego una cadena y posteriormente un objeto. 
  > En lenguajes como C o Java, normalmente es necesario declarar el tipo de dato de una variable. En JavaScript, por el contrario, se puede declarar una variable sin especificar explícitamente si almacenará un número, una cadena de texto o un objeto.
- **Funciones de Primera Clase (*First-Class Functions*):** Las funciones en JS son objetos. Pueden asignarse a variables, pasarse como argumentos a otras funciones y ser retornadas por otra función.
- **Compilación JIT (Just-In-Time):** Aunque tradicionalmente se le considera un lenguaje interpretado, los motores modernos parsean el código JS y lo compilan en tiempo de ejecución a código máquina altamente optimizado.

---

### Código Práctico: Inspección de Tipos y Funciones como Valores

Prueba el siguiente código para identificar el tipado dinámico y el comportamiento de las funciones en JS:

```javascript
// 1. Tipado dinámico
let dato = 42;
console.log("Tipo inicial:", typeof dato, "| Valor:", dato); // number

dato = "Hola, JavaScript";
console.log("Nuevo tipo:", typeof dato, "| Valor:", dato); // string

dato = { lenguaje: "JS", version: "ES6+" };
console.log("Tipo objeto:", typeof dato, "| Valor:", dato); // object

// 2. Funciones como ciudadanos de primera clase
function saludar(nombre) {
  return `¡Hola, ${nombre}! Bienvenido a JS.`;
}

// Asignamos la función a una variable
const miFuncion = saludar;
console.log(miFuncion("Estudiante")); // Ejecuta la función asignada

// Pasamos una función como argumento
function procesarUsuario(nombre, callback) {
  console.log("Procesando registro...");
  return callback(nombre);
}

// Llamando a procesarUsuario
procesarUsuario("María", saludar);
```

#### Una variable con diferentes tipos de datos

En este ejemplo, la variable dato almacena primero un número, después una cadena y finalmente un objeto. JavaScript permite estas reasignaciones porque el tipo no está declarado de manera estática para la variable.

```js
let dato = 25;

console.log(dato);        // 25
console.log(typeof dato); // "number"

dato = "Hola JavaScript";

console.log(dato);        // Hola JavaScript
console.log(typeof dato); // "string"

dato = { nombre: "Ana", edad: 20 };

console.log(dato);        // { nombre: "Ana", edad: 20 }
console.log(typeof dato); // "object"
```
---


> Hay dos particularidades importantes: typeof null devuelve "object" por razones históricas del lenguaje, y los arreglos también producen "object". Por ello, typeof no siempre es suficiente para distinguir todas las estructuras de datos.

La expresión **typeof** permite consultar el tipo que JavaScript identifica para un valor. Algunos de sus resultados más frecuentes son:

|Valor	| Resultado de typeof |
| :---  | :--- |
|42	            |  "number" |
|"Hola"	            |  "string" |
|true	            |  "boolean" |
|undefined	            |  "undefined" |
|123n	            |  "bigint" |
|{}	            |  "object" |
|function() {}	            |  "function" |



#### Tipado dinámico y declaración de variables

Aunque JavaScript permite cambiar el tipo de los valores asignados a una variable, esto no significa que todas las variables puedan reasignarse. En este caso, precio está declarado con const, por lo que no se puede asignar un nuevo valor a esa variable; cantidad, declarada con let, sí admite reasignación.


```js
const precio = 150;
let cantidad = 3;

console.log(precio * cantidad); // 450

cantidad = 5;

console.log(precio * cantidad); // 750
```

En este caso, **precio** está declarado con `const`, por lo que **no** se puede asignar un nuevo valor a esa variable; **cantidad**, declarada con `let`, **sí** admite reasignación.

Es importante distinguir entre dos conceptos:
- **Tipado dinámico**: el tipo del valor de una variable puede cambiar durante la ejecución.
- **Mutabilidad o reasignación**: determina si un valor puede modificarse o si una variable puede recibir otra asignación.

| Ventajas del tipado dinámico | Consideraciones y precauciones |
| :---  | :--- |
| Permite escribir código de forma concisa.	|  Algunos errores relacionados con los tipos pueden aparecer durante la ejecución. |
| Facilita la creación de funciones que trabajan con diferentes tipos de datos.	|  Es necesario prestar atención a las conversiones automáticas entre tipos. |
| Reduce la necesidad de declarar tipos explícitamente en cada variable.	|  Conviene validar los datos recibidos de formularios, archivos o servicios web. |


#### operador de concatenación

El operador `+` puede realizar una suma numérica o una concatenación de cadenas, según los operandos:
```js
console.log(10 + 5);     // 15
console.log("10" + 5);   // "105"
console.log(Number("10") + 5); // 15
```

Esta característica hace importante comprender la conversión de tipos y el comportamiento de los operadores.


#### Funciones de primera clase (First-Class Functions)

En JavaScript, las funciones son valores que pueden almacenarse en variables, pasarse como argumentos a otras funciones y devolverse como resultado de una función. A esta característica se le conoce como **funciones de primera clase**.

Esta propiedad permite construir programas flexibles, reutilizar operaciones y desarrollar técnicas de programación funcional.

#####  Asignar una función a una variable
JavaScript permite definir una función y almacenarla en una variable. Por ejemplo:
```js
const saludar = function () {
    console.log("Hola, estudiante");
};

saludar();
```
En este caso, la variable saludar contiene una referencia a una función. Al escribir saludar(), se invoca esa función.

--- 

También es posible utilizar una función flecha (arrow function):
```js
const sumar = (a, b) => a + b;

console.log(sumar(10, 20)); // 30
```

Las funciones flecha constituyen una sintaxis para definir funciones y se utilizan ampliamente en JavaScript moderno.


#####  Pasar una función como argumento
Una función puede recibir otra función como parámetro. Esto permite indicar qué operación debe realizarse sin tener que definir toda la operación dentro de la función principal.
```js
function procesarOperacion(a, b, operacion) {
    return operacion(a, b);
}

const sumar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

console.log(procesarOperacion(4, 3, sumar));       // 7
console.log(procesarOperacion(4, 3, multiplicar)); // 12
```


La función procesarOperacion recibe dos números y una función llamada operacion. De acuerdo con la función recibida, realiza una suma o una multiplicación.

Este mecanismo permite separar el proceso general de la operación específica que se desea ejecutar.
##### Devolver una función como resultado

Una función también puede crear y devolver otra función.

```js
function crearMultiplicador(factor) {
    return function (numero) {
        return numero * factor;
    };
}

const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);

console.log(duplicar(5));  // 10
console.log(triplicar(5)); // 15
```

La función crearMultiplicador devuelve una función que conserva acceso al parámetro factor de su entorno original. Este comportamiento se relaciona con los closures o clausuras, un concepto que se puede estudiar con mayor profundidad en una unidad posterior.

##### Aplicación en métodos de arreglos

Las funciones de primera clase se utilizan con frecuencia en métodos como map(), filter() y forEach().
```js
const precios = [100, 200, 300, 400];

const preciosConIVA = precios.map(
    precio => precio * 1.16
);

console.log(preciosConIVA);
// [116, 232, 348, 464]
```

El método `map()` recibe una función que se aplica a cada elemento del arreglo y produce un nuevo arreglo con los resultados.


---

## 1.2. Entornos de Ejecución y Herramientas



### Conceptos Clave

#### 1. Motor de JavaScript vs. Entorno de Ejecución (*Runtime Environment*)
- **Motor de JavaScript (*Engine*):** Componente encargada de parsear, compilar JIT y ejecutar el código JS puro (ej. V8, SpiderMonkey) .
- **Entorno de Ejecución (*Runtime*):** La infraestructura completa que rodea al motor y le provee un *Call Stack* (pila de ejecución), un *Memory Heap* (memoria de objetos), un *Event Loop* (bucle de eventos), colas de tareas y las APIs necesarias para comunicarse con el exterior.

```
+-------------------------------------------------------------------+
|                  ENTORNO DE EJECUCIÓN (RUNTIME)                  |
|                                                                   |
|   +-----------------------------------------------------------+   |
|   |                  MOTOR JAVASCRIPT (ENGINE)                |   |
|   |  +-----------------------+    +------------------------+  |   |
|   |  |     Memory Heap       |    |       Call Stack       |  |   |
|   |  | (Objetos en memoria)  |    |  (Pila de ejecución)   |  |   |
|   |  +-----------------------+    +------------------------+  |   |
|   +-----------------------------------------------------------+   |
|                                                                   |
|   +-----------------------------------------------------------+   |
|   |  APIs del Entorno Anfitrión (Web APIs / Node.js APIs)    |   |
|   |  (DOM, fetch, setTimeout, fs, http, process)              |   |
|   +-----------------------------------------------------------+   |
|                                                                   |
|   +--------------------------+    +---------------------------+   |
|   |  Cola de Microtareas     |    |   Cola de Macrotareas     |   |
|   |  (Promises, queueMicro)  |    |   (Timers, I/O, Events)   |   |
|   +--------------------------+    +---------------------------+   |
|                                                                   |
|                          BUCLE DE EVENTOS                         |
|                            (EVENT LOOP)                           |
+-------------------------------------------------------------------+
```

<img src="images/motorJS.png">

### Compilación Just-In-Time (JIT)
La compilación Just-In-Time (JIT), o compilación en tiempo de ejecución, es una técnica utilizada por los motores modernos de JavaScript para mejorar el rendimiento de los programas.

Tradicionalmente, JavaScript se ha descrito como un lenguaje interpretado. Sin embargo, esta descripción es incompleta para los motores actuales: estos analizan el código fuente, lo convierten en representaciones internas y pueden compilar partes del programa a código máquina durante la ejecución. El proceso exacto depende del motor utilizado.

<img src="images/JIT_ compilacion_optimizacion.png">


