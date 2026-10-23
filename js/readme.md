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

```
function procesarUsuario(nombre, funcionCallback) {
  return funcionCallback(nombre);
}

// Pasamos 'saludar' como argumento
console.log(procesarUsuario("Ana", saludar));
```

* **Python:**

```
def procesar_usuario(nombre, funcion_callback):
    return funcion_callback(nombre)

# Pasamos 'saludar' como argumento
print(procesar_usuario("Ana", saludar))
```

---

#### (3) Retornar una función desde otra función

Una función puede construir y devolver una nueva función como su resultado. 

* **JavaScript:**

```
function crearMultiplicador(factor) {
  return function(numero) {
    return numero * factor; // La función devuelta recuerda el parámetro 'factor'
  };
}

const duplicar = crearMultiplicador(2);
console.log(duplicar(5)); // Resultado: 10
```

* **Python:**

```
def crear_multiplicador(factor):
    def multiplicar(numero):
        return numero * factor
    return multiplicar

duplicar = crear_multiplicador(2)
print(duplicar(5))  # Resultado: 10
```# Introducción a JavaScript y su Entorno de Ejecución


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

```
function procesarUsuario(nombre, funcionCallback) {
  return funcionCallback(nombre);
}

// Pasamos 'saludar' como argumento
console.log(procesarUsuario("Ana", saludar));
```

* **Python:**

```
def procesar_usuario(nombre, funcion_callback):
    return funcion_callback(nombre)

# Pasamos 'saludar' como argumento
print(procesar_usuario("Ana", saludar))
```

---

#### (3) Retornar una función desde otra función

Una función puede construir y devolver una nueva función como su resultado. 

* **JavaScript:**

```
function crearMultiplicador(factor) {
  return function(numero) {
    return numero * factor; // La función devuelta recuerda el parámetro 'factor'
  };
}

const duplicar = crearMultiplicador(2);
console.log(duplicar(5)); // Resultado: 10
```

* **Python:**

```
def crear_multiplicador(factor):
    def multiplicar(numero):
        return numero * factor
    return multiplicar

duplicar = crear_multiplicador(2)
print(duplicar(5))  # Resultado: 10
```
