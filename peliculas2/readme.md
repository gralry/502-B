# Práctica Paso a Paso: Aplicación de Bootstrap 6 al Archivo del Cine Clásico Universal (v2)

Esta práctica muestra paso a paso  la transformación del fragmento HTML original del sitio **Archivo del Cine Clásico Universal** utilizando el sistema de diseño y componentes de **Bootstrap 6**.

---


# Paso 1: Configurar la Estructura Base, Temas y CDN

#### 1.1 Código HTML Original
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Archivo del Cine Clásico Universal</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-B/GM4XqrwHnWXNOWMbloTmrYXZg10cakYGmpfsR/bbzQ6JAJI4ihuyADKLnBgrCe" crossorigin="anonymous"></head>
<body>
    <!-- Contenido -->
</body>
</html>
```

#### 1.2 Cambios Aplicados
* **Enlace CDN CSS**: Se sustituye `styles.css` por la hoja de estilos oficial de Bootstrap 6 (`https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/css/bootstrap.min.css`).
* **Bundle JavaScript**: Se integra `bootstrap.bundle.min.js` antes del cierre del `</body>` para dar soporte a componentes dinámicos (como el menú desplegable en la navegación).
* **Gestión de Temas (`data-bs-theme`)**: Se agrega el atributo `data-bs-theme="light"` en `<html>` para configurar el tema global y las clases `.bg-light` y `.text-dark` en `<body>`.
* Para usar íconos agrega `<link  rel="stylesheet"       href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.2/font/bootstrap-icons.min.css"    />`

#### 1.3 Código HTML Transformado
```html
<!DOCTYPE html>
<html lang="es" data-bs-theme="auto">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Archivo del Cine Clásico Universal</title>
    <!-- CSS oficial de Bootstrap 6 desde CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-dark text-light">

    <!-- Contenido principal de la aplicación -->

    <!-- Bundle JS oficial de Bootstrap 6 -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

* `data-bs-theme="light"`: Fuerza al framework a renderizar su paleta clara predeterminada.
* `data-bs-theme="dark"`: Activa automáticamente el modo oscuro, invirtiendo las variables de color internas sin reescribir CSS.
* `data-bs-theme="auto"`: Utiliza las preferencias del sistema operativo del usuario gracias a las media queries de CSS (prefers-color-scheme).

---

# Paso 2: Transformar la Cabecera (`<header>`) en una Barra de Navegación Responsiva (`Navbar`)

#### 2.1 Código HTML Original
```html
<header>
    <div>
        <a href="#">CineClásico<span>.db</span></a>
        <nav>
            <ul>
                <li><a href="#hero">Inicio</a></li>
                <li><a href="#catalog">Catálogo</a></li>
                <li><a href="#featured">Destacadas</a></li>
                <li><a href="#about">Historia</a></li>
            </ul>
        </nav>
        <div>
            <button>Buscar</button>
            <button>Mi Colección</button>
        </div>
    </div>
</header>
```

#### 2.2 Cambios y Clases Aplicadas
* Se agrega `<nav>`, con las clases `.navbar`, `.lg:navbar-expand`, `.bg-dark`, `.navbar-dark`, `.shadow-sm`.
* `<div class="container">`: Delimita el ancho horizontal del menú adaptándolo según la resolución de la pantalla.
* `a.navbar-brand`: Aplica estilos de marca/logotipo mediante `.fw-bold` y `.fs-4`.
* `ul.navbar-nav`: Sustituye la lista por omisión por el componente de navegación de Bootstrap (`.navbar-nav`, `.nav-item`, `.nav-link`).
* `div.d-flex.gap-2`: Empaqueta los botones de búsqueda y colección utilizando flexbox y utilidades de botones (`.btn`, `.btn-outline-light`, `.btn-primary`).
* `fw-bold`: [font-weight bold](https://getbootstrap.com/docs/6.0/utilities/font-weight/)
* `fs-lg`: [font size large](https://getbootstrap.com/docs/6.0/utilities/font-size/)


#### 2.3 Código HTML Transformado

```html
   <header>
      <nav class="navbar lg:navbar-expand shadow-sm py-3"  data-bs-theme="light">
```

* `class="navbar"`: Clase base de Bootstrap que identifica y da estructura al componente de barra de navegación.
* `class="lg:navbar-expand"`: Controla el comportamiento responsivo. Indica que la barra de navegación se mostrará de forma extendida (menú completo de escritorio) a partir de pantallas grandes (lg, ≥992px). En pantallas más pequeñas, el contenido se colapsará automáticamente detrás del botón de menú (hamburguesa).
* `class="bg-dark navbar-dark"`: Clases para aplicar un fondo oscuro y ajustar automáticamente el contraste básico de los textos.
* `class="shadow-sm"`: Añade una sombra sutil (small shadow) debajo de la barra para darle profundidad.
* `class="py-3"`: Utilidad de espaciado que añade relleno (padding) vertical (arriba y abajo) de nivel 3 para hacer la barra más alta y limpia.
* `data-bs-theme="dark" data-bs-theme="ligth" `: El motor de temas de Bootstrap. Aplica de forma directa el modo oscuro nativo, reconfigurando todas las variables CSS internas del contenedor para que los textos, botones y subcomponentes adopten el esquema oscuro de forma armonizada.
* `class= "bg-primary"` si se agrega podría cambiar a fundo azul de la barra de navegación.


## container

```html
        <div class="container">
            <a class="navbar-brand fw-bold fs-lg" href="#">
                CineClásico
                    <span class="fg-primary">.db</span>
            </a>   
```

* `class="container" / class="container-fluid"`: Centra el contenido horizontalmente y le asigna un ancho máximo responsivo alineado con las cuadrículas del sitio web. La opción `*fluid` ajusta al ancho completo.
* `class="navbar-brand"`: Estiliza el enlace como el logotipo o identidad principal de la marca en la barra.
* `class="fw-bold"`: Aplica un peso de fuente en negrita (font-weight: bold).
* `class="fs-lg"`: Define el tamaño del texto como grande (font-size: large).
* `class="fg-primary"`: Modifica el color del texto utilizando el token de color principal (Primary). Reemplaza el antiguo `.text-primary` (Bootstrap 5) para alinearse con el nuevo sistema de temas de la versión 6.


## Botón hamburguesa

```html
 <button
    class="navbar-toggler btn-icon"
    type="button"
    data-bs-toggle="drawer"
    data-bs-target="#navbarDrawer"
    aria-controls="navbarDrawer"
    aria-expanded="false"
    aria-label="Toggle navigation"
    >
    <span class="navbar-toggler-icon" aria-hidden="true"></span>
</button>
```

Este botón solo se hace visible en pantallas medianas o pequeñas (menores a lg).
*  `class="navbar-toggler"`: Aplica los estilos por defecto para el botón de menú responsivo (bordes, alineación y padding).
*  `class="btn-icon"`: clase utilitaria para  botones que solo contienen un icono, optimizando sus proporciones.
*  `data-bs-toggle="drawer"`: Le dice al JavaScript de Bootstrap que este botón va a abrir un panel lateral deslizante tipo **Drawer**.
*  `data-bs-target="#navbarDrawer"`: El selector de CSS que apunta específicamente al ID del elemento que se debe abrir (en este caso, el `<dialog>` de abajo).
*  `Atributos aria-*` (aria-controls, aria-expanded, aria-label): Atributos fundamentales de accesibilidad web (A11y). Informan a los lectores de pantalla qué elemento controla el botón, si el menú está actualmente abierto o cerrado, y una etiqueta de texto alternativa.
*  `class="navbar-toggler-icon"`: Renderiza las famosas tres líneas horizontales de menú (icono de hamburguesa) usando una imagen de fondo SVG nativa de Bootstrap.



## Dialog

```html
<dialog
    class="drawer drawer-end"
    tabindex="-1"
    id="navbarDrawer"
    aria-labelledby="navbarDrawerLabel"
>
```
*  `<dialog>`: En lugar de usar contenedores <div> para menús persistentes B6 adopta la etiqueta nativa <dialog> de HTML5. Esto delega al navegador el control superior de las capas físicas del viewport (top-layer), el bloqueo del foco del teclado y el cierre automático con la tecla Esc.
*  `class="drawer"`: Sustituye a la clase .offcanvas de la versión 5. Define que el diálogo se comportará como una barra lateral oculta que se desliza a la vista. Anteriormente `<div class="offcanvas offcanvas-start" tabindex="-1" ...>`.
*  `class="lg:drawer"`: a partir de pantallas grandes (1024px en adelante) anule los estilos ocultos del componente de diálogo,  permitiendo que la lista interna (.navbar-nav) fluya de manera natural y visible en el encabezado de tu página.
*  `class="drawer-end"`: Especifica la dirección de la animación. Indica que el panel saldrá desde el extremo derecho de la pantalla.
*  `id="navbarDrawer"`: El identificador único que vincula este menú con el atributo data-bs-target del botón disparador analizado en el punto anterior.
*  `tabindex="-1"`: Remueve el elemento del orden común del foco de tabulación de la página mientras está cerrado, permitiendo que el script maneje el aislamiento del teclado de forma limpia una vez abierto



## drawer-header

```html
<h5 
    class="drawer-title" 
    id="navbarDrawerLabel"
>Menu</h5>
```

* `class="drawer-title"`: Estiliza el texto para que actúe como el encabezado oficial del panel lateral, asignándole un tamaño, peso visual y altura de línea armonizados con el diseño del framework.
* `id="navbarDrawerLabel"`: La etiqueta <dialog> tenía el atributo aria-labelledby="navbarDrawerLabel". Al coincidir ambos IDs, se indica  a los lectores de pantalla para personas con discapacidad visual que, cuando se abra el panel, lean el contenido del <h5> ("Menu") como el título oficial de la ventana flotante.



## Botón de cierre

```html
<button type="button" 
    class="btn-close" 
    data-bs-dismiss="drawer" 
    aria-label="Close"></button>
```

*  `type="button"`: Especifica que es un botón genérico y evita que, por error, intente enviar un formulario si estuviera dentro de uno (submit).
*  `class="btn-close"`: Renderiza de forma nativa la silueta de una "X" utilizando una imagen SVG de fondo optimizada. 
*  `data-bs-dismiss="drawer"`: Le indica al navegador que, al hacer clic en este botón, debe ocultar y cerrar el panel lateral animado. En Bootstrap 5 se utilizaba data-bs-dismiss="offcanvas".
*  `aria-label="Close"`: Un atributo esencial de accesibilidad. Como el botón visualmente solo es una "X" sin texto, los lectores de pantalla necesitan este parámetro para anunciarle verbalmente al usuario: "Botón, Cerrar".



## Cuerpo del dialog

```html
<div class="drawer-body mb-2 md:mb-0">
              <ul> ...
```

* `class="drawer-body"`: Define la zona de contenido del panel lateral. Por defecto, añade un relleno (padding) interno proporcional y activa propiedades Flexbox orientadas en columna vertical para que los elementos se apilen ordenadamente hacia abajo (columna).
* `class="mb-2"`: Aplica un margen inferior (margin-bottom) de nivel 2 de forma general. 
* `class="md:mb-0"` (¡Novedad de Bootstrap 6!): Esta sintaxis sustituye por completo a la antigua clase .mb-md-0. En la versión 6, Bootstrap abandona los infijos intermediarios y adopta el patrón breakpoint:clase. Esto indica que a partir de pantallas medianas (md, ≥768px) en adelante, el margen inferior se reinicia a cero (mb-0). Esto es vital porque, al expandirse la barra en pantallas de escritorio, los elementos dejan de estar apilados verticalmente y pasan a alinearse de forma horizontal



## La Lista de Navegación

```html
<ul class="nav navbar-nav me-auto">
```
* `class="nav"`: Clase utilitaria para eliminar los estilos predeterminados de las listas de HTML (como los puntos de viñeta iniciales y los márgenes de lista integrados). 
* `class="navbar-nav": Configura la lista específicamente para funcionar dentro de una barra de navegación. En dispositivos móviles (dentro del Drawer), obliga a los elementos de la lista a ocupar todo el ancho disponible y a estructurarse en vertical. En pantallas de escritorio (cuando se activa el navbar-expand-lg del contenedor raíz), el framework reconfigura automáticamente la lista para que se muestre en una sola fila horizontal con espacios balanceados.
* `class="me-auto"`: Significa Margin End Auto. Empuja automáticamente todo el espacio disponible hacia la derecha de este bloque. Al añadir otro elemento hermano después de esta lista (como un botón de "Iniciar Sesión" o una barra de búsqueda), esta clase provocará que los enlaces de navegación se queden alineados a la izquierda y el otro componente sea empujado magnéticamente hacia el extremo derecho de la barra de navegación.


## Elementos de la lista de navegación


```html
<li class="nav-item">
    <a class="nav-link active" href="#hero">Inicio</a>
</li>
```

* `class="nav-item"`: elemento componente de un menú de navegación. Su función principal es eliminar cualquier margen o viñeta por defecto del navegador y coordinar el espaciado interno si se encuentra dentro de un entorno Flexbox (como .navbar-nav o .nav).
* `class="nav-link"`:  Reinicia los estilos típicos de los enlaces web (elimina el subrayado azul predeterminado) y les aplica el diseño moderno del framework:
	* Asigna el color de texto correcto calculado dinámicamente por el tema de la página (claro u oscuro).
	* Añade rellenos (paddings) horizontales y verticales óptimos para que el área de clic sea amplia y cómoda, especialmente en dispositivos móviles y pantallas táctiles.
	* Configura estados de transición suaves (transition: color ...) para cuando el usuario pasa el cursor por encima (hover) o interactúa con el teclado (focus).
* `class="active"`: Clase de estado. Le indica visualmente al usuario en qué sección o página se encuentra actualmente. Bootstrap modifica el color del texto del enlace (por lo general, haciéndolo más brillante, blanco o resaltado en comparación con los otros enlaces inactivos) para denotar prioridad.





## Formulario


```html
 <form class="hstack gap-2" role="search">
    <input
        class="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
    />
```


* class="hstack": Clase de pila horizontal (Horizontal Stack). Es un componente utilitario basado en Flexbox que organiza todos sus elementos hijos en una sola línea horizontal. Añade automáticamente **display: flex, flex-direction: row y align-items: center** para que el campo de texto y su botón queden perfectamente alineados a la misma altura sin necesidad de escribir CSS manual.
* class="gap-2": Controla la separación entre los elementos dentro del hstack. El nivel 2 equivale a un espacio predeterminado de 0.5rem (aproximadamente 8px). 
* role="search": Un atributo de accesibilidad (A11y). Informa formalmente a los navegadores y lectores de pantalla que este formulario específico es un bloque de búsqueda de contenido en el sitio web.



## Botón de búsqueda
```html
<button
    class="btn-solid btn-icon theme-secondary"
    type="submit"
>
    <!--img
    src="icons-main/icons/search.svg"
    class="bi"
    width="16"
    height="16"
    alt="Search"
    /-->
    <i class="bi bi-search"></i>
</button>
```

* `class="bi"`: Aplica las propiedades CSS globales que Bootstrap Icons asigna a los iconos vectoriales. Como se puede ver en la hoja de estilos importada, la clase .bi establece propiedades clave como display: inline-block, line-height: 1 y un ajuste de alineación vertical (vertical-align: -.125em) para que el icono se alinee de forma natural a la misma altura que los textos adyacentes.
*  `alt="Search"`: Atributo obligatorio de accesibilidad (A11y). Transmite a los lectores de pantalla la descripción textual del gráfico si la imagen no se carga o si el usuario tiene una discapacidad visual.
* Las fuentes tipográficas (`<i class="bi">`) cambian de color automáticamente usando la propiedad color de CSS o las clases de texto de Bootstrap (como .text-white o el sistema de temas data-bs-theme). Al cargar un SVG dentro de una etiqueta <img>, el navegador lo aísla en un subárbol protegido. No es posible cambiar el color desde tu CSS principal ni responderá al modo oscuro de forma automática; el icono mantendrá permanentemente el color que venga codificado de fábrica dentro de su archivo (usualmente negro).


## botón secundario

```html
<button type="button" class="theme-primary btn-outline">
Mi Colección
</button>
```
* `theme-primary`: Es una clase de configuración semántica. En Bootstrap 6, la gestión de colores se apoya fuertemente en variables CSS aplicadas por contextos. Esta clase le indica al componente que debe adoptar la paleta de color catalogada como Primary (considerando el color de principal del sitio web (tema oscuro), usualmente un tono azul).
* `btn-outline`: Define la variante estética del botón. En lugar de ser un botón con un fondo de color sólido, un botón outline tiene un fondo transparente y un borde delgado. Al combinarse con theme-primary, el borde y el texto adoptan el color primario de la web.


## Código completo del header con el menú de navegación

```html
 <header>
    
    </header>
```

---

# Paso 3: Rediseñar la Sección Principal de Bienvenida (Hero Section)

#### 3.1 Código HTML Original
```html
<section>
    <div></div>
    <div>
        <span>Archivo Histórico Cinematográfico</span>
        <h1>Grandes Obras Maestras del Séptimo Arte</h1>
        <p>
            Una travesía visual por los filmes que definieron el lenguaje narrativo, la dirección de arte y la banda sonora de la historia del cine.
        </p>
        <p>
            Desde el expresionismo mudo de los años 20 hasta la revolución del color y la ciencia ficción de culto. Explora fichas técnicas, géneros y calificaciones verificadas.
        </p>
        <div>
            <a href="#catalog">Explorar Catálogo</a>
            <a href="#about">Saber Más</a>
        </div>
    </div>
</section>
```

#### 3.2 Cambios Puntuales y Clases Aplicadas
* `<section>`: Se le asigna `id="hero"` junto a las clases `.bg-dark`, `.text-white`, `.py-5`, `.mb-5` y `.border-bottom` para construir una cabecera de impacto con tema oscuro.
* `<div class="container text-center">`: Contenedor responsivo que centra el texto e imágenes.
* `<div class="row justify-content-center">` y `<div class="lg:col-8">`: Limita el ancho del texto a 8 columnas en pantallas grandes para evitar líneas excesivamente largas y mejorar la lectura.
* `<span>`: Convertido en distintivo redondeado con `.badge`, `.bg-primary`, `.text-uppercase` y `.rounded-pill`.
* `<h1>`: Aplicación de tipografía destacada `.display-5` y peso `.fw-bold`.
* `<p>`: El primer párrafo utiliza la clase de texto destacado `.lead`. El segundo aplica `.text-secondary` y `.small`.
* Botones `<a>`: Estilizados mediante `.btn`, `.btn-primary`, `.btn-outline-light` y `.btn-lg`.

#### 3.3 Código HTML Transformado
```html
<section
      id="hero"
      class="bg-dark fg-light py-5 mb-5 border-bottom border-secondary"
    >
      <div class="container text-center py-4">
        <div class="row justify-content-center">
          <div class="lg:col-8">
            <span
              class="badge bg-primary text-uppercase px-5 py-3 mb-3 rounded-pill"
              >Archivo Histórico Cinematográfico</span
            >
            <h1 class="fs-2xl fw-bold mb-3">
              Grandes Obras Maestras del Séptimo Arte
            </h1>
            <p class="lead text-light mb-3">
              Una travesía visual por los filmes que definieron el lenguaje
              narrativo, la dirección de arte y la banda sonora de la historia
              del cine.
            </p>
            <p class="fg-secondary small mb-4">
              Desde el expresionismo mudo de los años 20 hasta la revolución del
              color y la ciencia ficción de culto. Explora fichas técnicas,
              géneros y calificaciones verificadas.
            </p>
            <div class="d-flex justify-content-center gap-3">
              <a href="#catalog" class="btn btn-primary btn-lg px-4"
                >Explorar Catálogo</a
              >
              <a href="#about" class="btn btn-outline-light btn-lg px-4"
                >Saber Más</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
```

* `class="py-5"`: Añade un relleno (padding) vertical de nivel 5.
* `class="mb-5"`: Agrega un margen inferior (margin-bottom) de nivel 5 para empujar físicamente hacia abajo el siguiente componente.
* `class="border-bottom border-secondary"`: Dibuja una línea de borde delgada en la base de la sección usando el color secundario suavizado de la paleta, funcionando como un sutil separador visual.
* `class="text-center"`: Alinea absolutamente todo el contenido interno (textos, botones y badges) hacia el [centro horizontal](https://getbootstrap.com/docs/6.0/utilities/text-alignment/).
* `class="row justify-content-center"`: Activa el contenedor Flexbox de la cuadrícula de Bootstrap. La utilidad justify-content-center asegura que las columnas internas queden perfectamente centradas si no ocupan el ancho total de la fila.


### Zona de lectura

```html
<div class="container text-center py-4">
  <div class="row justify-content-center">
    <div class="lg:col-8">
```
* `class="lg:col-8"`: Define el ancho del bloque de lectura. En pantallas grandes (lg, ≥992px) en adelante, el contenido se encogerá para ocupar solo 8 de las 12 columnas disponibles de la cuadrícula de Bootstrap. Esto evita que las líneas de texto se estiren demasiado a lo ancho, mejorando drásticamente la legibilidad en monitores de escritorio. En móviles, se expande al 100% de forma automática.


### Zona de lectura

```html
<span class="badge bg-primary text-uppercase px-5 py-3 mb-3 rounded-pill">Archivo Histórico Cinematográfico</span>
```
* `class="badge"` : Aplica los estilos tipográficos básicos de una etiqueta.
* `class="bg-primary"`: Rellena el fondo del badge con el color de identidad principal.
* `class="text-uppercase"`: Transforma de forma automática todo el texto interno a letras MAYÚSCULAS.
* `class="px-5 py-3"`: Utilidades de espaciado que crean un badge amplio  aplicando relleno horizontal de nivel 5 y vertical de nivel 3.
* `class="rounded-pill"` : Aplica un radio de borde redondeado al 100% en los extremos laterales, dándole al badge un aspecto moderno en forma de píldora o cápsula. [otros ejemplos](https://getbootstrap.com/docs/6.0/utilities/border-radius/)


### Formato en textos

```html
<h1 class="fs-2xl fw-bold mb-3">Grandes Obras Maestras del Séptimo Arte</h1>
<p class="lead mb-3">Una travesía visual...</p>
<p class="fg-secondary small mb-4">Desde el expresionismo mudo...</p>

```
*  `class="fs-2xl"`:  asignar un tamaño de fuente extra grande y llamativo [más ejemplos](https://getbootstrap.com/docs/6.0/utilities/font-size/)
*  `class="fw-bold"`: Coloca el título en negrita pesada.
*  `class="lead":` Clase especial para párrafos introductorios. Incrementa sutilmente el tamaño de la fuente y reduce el peso visual del texto para hacerlo destacar como el resumen principal de la página.
*   `class="fg-secondary"`: El párrafo secundario usa fg-secondary para verse en un tono grisáceo más tenue, marcando jerarquía visual con respecto al párrafo principal.
*  `class="small"`: Reduce el tamaño de la fuente un paso por debajo del estándar del cuerpo, ideal para textos aclaratorios o contextuales.

### Centrado de los botones
```html
<div class="d-flex justify-content-center gap-3"
```
* `class="d-flex justify-content-center"`: Empaqueta los dos botones de acción en un contenedor Flexbox alineado al centro.
* `class="gap-3"`: Añade una separación física constante de nivel 3 (1rem o 16px) estrictamente entre ambos botones, evitando que choquen en cualquier resolución de pantalla.


---

### Paso 4: Reestructurar el Catálogo con Rejilla Responsiva (`Grid`) y Tarjetas (`Cards`)

#### Uso de container / row  / col
```html
<main class="container py-5">
      <section class="row p-4 g-4">
        <div class="lg:col-10">
          <h2 class="fs-2xl fw-bold">Catálogo Principal de Películas</h2>
          <p class="lead">Fichas de obras restauradas en alta definición</p>
        </div>
```



#### Uso de container / row  / col
```html
<main class="container py-5">
      <section class="row p-4 g-4">
        <div class="lg:col-10">
        ...
        </div>

        <!-- Uso de clase card-->
        <article
          class="card p-4 md:col-6 my-4 lg:col-4 d-flex justify-content-between"
        >
```

* ` md:col-6 my-4 lg:col-4` 2 columnas en pantallas medianas, 3 columnas en pantallas grandes.



#### Agregar una imagen responsiva
```html
<div class="p-4">
    <div>Clásico Imperdible</div>
    <img src="images/image.png" class="card-img" />
</div>
```





#### Clasificación y calificación de la película
```html
<div class="my-2 d-flex justify-content-between">
    <span class="fg-primary">Drama / Romance</span>
    <span class="fg-warning">★ 9.2</span>
</div>
```



#### Nombre de la película
```html
<h3 class="badge theme-success badge-outline fs-xl">Casablanca</h3>
```




#### Footer de cada película
```html
<div class="card-footer d-flex justify-content-between">
    <span class="px-5 py-2 border border-2 btn-outline">102 min</span>
    <button class="theme-primary btn-outline rounded-pill">
    Ver Ficha
    </button>
</div>
```

# Práctica Paso a Paso: Aplicación de Bootstrap 6 al Archivo del Cine Clásico Universal (v2)

Esta práctica muestra paso a paso  la transformación del fragmento HTML original del sitio **Archivo del Cine Clásico Universal** utilizando el sistema de diseño y componentes de **Bootstrap 6**.

---


# Paso 1: Configurar la Estructura Base, Temas y CDN

#### 1.1 Código HTML Original
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Archivo del Cine Clásico Universal</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Contenido -->
</body>
</html>
```

#### 1.2 Cambios Aplicados
* **Enlace CDN CSS**: Se sustituye `styles.css` por la hoja de estilos oficial de Bootstrap 6 (`https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/css/bootstrap.min.css`).
* **Bundle JavaScript**: Se integra `bootstrap.bundle.min.js` antes del cierre del `</body>` para dar soporte a componentes dinámicos (como el menú desplegable en la navegación).
* **Gestión de Temas (`data-bs-theme`)**: Se agrega el atributo `data-bs-theme="light"` en `<html>` para configurar el tema global y las clases `.bg-light` y `.text-dark` en `<body>`.
* Para usar íconos agrega `<link  rel="stylesheet"       href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.2/font/bootstrap-icons.min.css"    />`

#### 1.3 Código HTML Transformado
```html
<!DOCTYPE html>
<html lang="es" data-bs-theme="auto">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Archivo del Cine Clásico Universal</title>
    <!-- CSS oficial de Bootstrap 6 desde CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-dark text-light">

    <!-- Contenido principal de la aplicación -->

    <!-- Bundle JS oficial de Bootstrap 6 -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

* `data-bs-theme="light"`: Fuerza al framework a renderizar su paleta clara predeterminada.
* `data-bs-theme="dark"`: Activa automáticamente el modo oscuro, invirtiendo las variables de color internas sin reescribir CSS.
* `data-bs-theme="auto"`: Utiliza las preferencias del sistema operativo del usuario gracias a las media queries de CSS (prefers-color-scheme).

---

# Paso 2: Transformar la Cabecera (`<header>`) en una Barra de Navegación Responsiva (`Navbar`)

#### 2.1 Código HTML Original
```html
<header>
    <div>
        <a href="#">CineClásico<span>.db</span></a>
        <nav>
            <ul>
                <li><a href="#hero">Inicio</a></li>
                <li><a href="#catalog">Catálogo</a></li>
                <li><a href="#featured">Destacadas</a></li>
                <li><a href="#about">Historia</a></li>
            </ul>
        </nav>
        <div>
            <button>Buscar</button>
            <button>Mi Colección</button>
        </div>
    </div>
</header>
```

#### 2.2 Cambios y Clases Aplicadas
* Se agrega `<nav>`, con las clases `.navbar`, `.lg:navbar-expand`, `.bg-dark`, `.navbar-dark`, `.shadow-sm`.
* `<div class="container">`: Delimita el ancho horizontal del menú adaptándolo según la resolución de la pantalla.
* `a.navbar-brand`: Aplica estilos de marca/logotipo mediante `.fw-bold` y `.fs-4`.
* `ul.navbar-nav`: Sustituye la lista por omisión por el componente de navegación de Bootstrap (`.navbar-nav`, `.nav-item`, `.nav-link`).
* `div.d-flex.gap-2`: Empaqueta los botones de búsqueda y colección utilizando flexbox y utilidades de botones (`.btn`, `.btn-outline-light`, `.btn-primary`).
* `fw-bold`: [font-weight bold](https://getbootstrap.com/docs/6.0/utilities/font-weight/)
* `fs-lg`: [font size large](https://getbootstrap.com/docs/6.0/utilities/font-size/)


#### 2.3 Código HTML Transformado

```html
   <header>
      <nav class="navbar lg:navbar-expand shadow-sm py-3"  data-bs-theme="light">
```

* `class="navbar"`: Clase base de Bootstrap que identifica y da estructura al componente de barra de navegación.
* `class="lg:navbar-expand"`: Controla el comportamiento responsivo. Indica que la barra de navegación se mostrará de forma extendida (menú completo de escritorio) a partir de pantallas grandes (lg, ≥992px). En pantallas más pequeñas, el contenido se colapsará automáticamente detrás del botón de menú (hamburguesa).
* `class="bg-dark navbar-dark"`: Clases para aplicar un fondo oscuro y ajustar automáticamente el contraste básico de los textos.
* `class="shadow-sm"`: Añade una sombra sutil (small shadow) debajo de la barra para darle profundidad.
* `class="py-3"`: Utilidad de espaciado que añade relleno (padding) vertical (arriba y abajo) de nivel 3 para hacer la barra más alta y limpia.
* `data-bs-theme="dark" data-bs-theme="ligth" `: El motor de temas de Bootstrap. Aplica de forma directa el modo oscuro nativo, reconfigurando todas las variables CSS internas del contenedor para que los textos, botones y subcomponentes adopten el esquema oscuro de forma armonizada.
* `class= "bg-primary"` si se agrega podría cambiar a fundo azul de la barra de navegación.


## container

```html
        <div class="container">
            <a class="navbar-brand fw-bold fs-lg" href="#">
                CineClásico
                    <span class="fg-primary">.db</span>
            </a>   
```

* `class="container" / class="container-fluid"`: Centra el contenido horizontalmente y le asigna un ancho máximo responsivo alineado con las cuadrículas del sitio web. La opción `*fluid` ajusta al ancho completo.
* `class="navbar-brand"`: Estiliza el enlace como el logotipo o identidad principal de la marca en la barra.
* `class="fw-bold"`: Aplica un peso de fuente en negrita (font-weight: bold).
* `class="fs-lg"`: Define el tamaño del texto como grande (font-size: large).
* `class="fg-primary"`: Modifica el color del texto utilizando el token de color principal (Primary). Reemplaza el antiguo `.text-primary` (Bootstrap 5) para alinearse con el nuevo sistema de temas de la versión 6.


## Botón hamburguesa

```html
 <button
    class="navbar-toggler btn-icon"
    type="button"
    data-bs-toggle="drawer"
    data-bs-target="#navbarDrawer"
    aria-controls="navbarDrawer"
    aria-expanded="false"
    aria-label="Toggle navigation"
    >
    <span class="navbar-toggler-icon" aria-hidden="true"></span>
</button>
```

Este botón solo se hace visible en pantallas medianas o pequeñas (menores a lg).
*  `class="navbar-toggler"`: Aplica los estilos por defecto para el botón de menú responsivo (bordes, alineación y padding).
*  `class="btn-icon"`: clase utilitaria para  botones que solo contienen un icono, optimizando sus proporciones.
*  `data-bs-toggle="drawer"`: Le dice al JavaScript de Bootstrap que este botón va a abrir un panel lateral deslizante tipo **Drawer**.
*  `data-bs-target="#navbarDrawer"`: El selector de CSS que apunta específicamente al ID del elemento que se debe abrir (en este caso, el `<dialog>` de abajo).
*  `Atributos aria-*` (aria-controls, aria-expanded, aria-label): Atributos fundamentales de accesibilidad web (A11y). Informan a los lectores de pantalla qué elemento controla el botón, si el menú está actualmente abierto o cerrado, y una etiqueta de texto alternativa.
*  `class="navbar-toggler-icon"`: Renderiza las famosas tres líneas horizontales de menú (icono de hamburguesa) usando una imagen de fondo SVG nativa de Bootstrap.



## Dialog

```html
<dialog
    class="drawer drawer-end"
    tabindex="-1"
    id="navbarDrawer"
    aria-labelledby="navbarDrawerLabel"
>
```
*  `<dialog>`: En lugar de usar contenedores <div> para menús persistentes B6 adopta la etiqueta nativa <dialog> de HTML5. Esto delega al navegador el control superior de las capas físicas del viewport (top-layer), el bloqueo del foco del teclado y el cierre automático con la tecla Esc.
*  `class="drawer"`: Sustituye a la clase .offcanvas de la versión 5. Define que el diálogo se comportará como una barra lateral oculta que se desliza a la vista. Anteriormente `<div class="offcanvas offcanvas-start" tabindex="-1" ...>`.
*  `class="lg:drawer"`: a partir de pantallas grandes (1024px en adelante) anule los estilos ocultos del componente de diálogo,  permitiendo que la lista interna (.navbar-nav) fluya de manera natural y visible en el encabezado de tu página.
*  `class="drawer-end"`: Especifica la dirección de la animación. Indica que el panel saldrá desde el extremo derecho de la pantalla.
*  `id="navbarDrawer"`: El identificador único que vincula este menú con el atributo data-bs-target del botón disparador analizado en el punto anterior.
*  `tabindex="-1"`: Remueve el elemento del orden común del foco de tabulación de la página mientras está cerrado, permitiendo que el script maneje el aislamiento del teclado de forma limpia una vez abierto



## drawer-header

```html
<h5 
    class="drawer-title" 
    id="navbarDrawerLabel"
>Menu</h5>
```

* `class="drawer-title"`: Estiliza el texto para que actúe como el encabezado oficial del panel lateral, asignándole un tamaño, peso visual y altura de línea armonizados con el diseño del framework.
* `id="navbarDrawerLabel"`: La etiqueta <dialog> tenía el atributo aria-labelledby="navbarDrawerLabel". Al coincidir ambos IDs, se indica  a los lectores de pantalla para personas con discapacidad visual que, cuando se abra el panel, lean el contenido del <h5> ("Menu") como el título oficial de la ventana flotante.



## Botón de cierre

```html
<button type="button" 
    class="btn-close" 
    data-bs-dismiss="drawer" 
    aria-label="Close"></button>
```

*  `type="button"`: Especifica que es un botón genérico y evita que, por error, intente enviar un formulario si estuviera dentro de uno (submit).
*  `class="btn-close"`: Renderiza de forma nativa la silueta de una "X" utilizando una imagen SVG de fondo optimizada. 
*  `data-bs-dismiss="drawer"`: Le indica al navegador que, al hacer clic en este botón, debe ocultar y cerrar el panel lateral animado. En Bootstrap 5 se utilizaba data-bs-dismiss="offcanvas".
*  `aria-label="Close"`: Un atributo esencial de accesibilidad. Como el botón visualmente solo es una "X" sin texto, los lectores de pantalla necesitan este parámetro para anunciarle verbalmente al usuario: "Botón, Cerrar".



## Cuerpo del dialog

```html
<div class="drawer-body mb-2 md:mb-0">
              <ul> ...
```

* `class="drawer-body"`: Define la zona de contenido del panel lateral. Por defecto, añade un relleno (padding) interno proporcional y activa propiedades Flexbox orientadas en columna vertical para que los elementos se apilen ordenadamente hacia abajo (columna).
* `class="mb-2"`: Aplica un margen inferior (margin-bottom) de nivel 2 de forma general. 
* `class="md:mb-0"` (¡Novedad de Bootstrap 6!): Esta sintaxis sustituye por completo a la antigua clase .mb-md-0. En la versión 6, Bootstrap abandona los infijos intermediarios y adopta el patrón breakpoint:clase. Esto indica que a partir de pantallas medianas (md, ≥768px) en adelante, el margen inferior se reinicia a cero (mb-0). Esto es vital porque, al expandirse la barra en pantallas de escritorio, los elementos dejan de estar apilados verticalmente y pasan a alinearse de forma horizontal



## La Lista de Navegación

```html
<ul class="nav navbar-nav me-auto">
```
* `class="nav"`: Clase utilitaria para eliminar los estilos predeterminados de las listas de HTML (como los puntos de viñeta iniciales y los márgenes de lista integrados). 
* `class="navbar-nav": Configura la lista específicamente para funcionar dentro de una barra de navegación. En dispositivos móviles (dentro del Drawer), obliga a los elementos de la lista a ocupar todo el ancho disponible y a estructurarse en vertical. En pantallas de escritorio (cuando se activa el navbar-expand-lg del contenedor raíz), el framework reconfigura automáticamente la lista para que se muestre en una sola fila horizontal con espacios balanceados.
* `class="me-auto"`: Significa Margin End Auto. Empuja automáticamente todo el espacio disponible hacia la derecha de este bloque. Al añadir otro elemento hermano después de esta lista (como un botón de "Iniciar Sesión" o una barra de búsqueda), esta clase provocará que los enlaces de navegación se queden alineados a la izquierda y el otro componente sea empujado magnéticamente hacia el extremo derecho de la barra de navegación.


## Elementos de la lista de navegación


```html
<li class="nav-item">
    <a class="nav-link active" href="#hero">Inicio</a>
</li>
```

* `class="nav-item"`: elemento componente de un menú de navegación. Su función principal es eliminar cualquier margen o viñeta por defecto del navegador y coordinar el espaciado interno si se encuentra dentro de un entorno Flexbox (como .navbar-nav o .nav).
* `class="nav-link"`:  Reinicia los estilos típicos de los enlaces web (elimina el subrayado azul predeterminado) y les aplica el diseño moderno del framework:
	* Asigna el color de texto correcto calculado dinámicamente por el tema de la página (claro u oscuro).
	* Añade rellenos (paddings) horizontales y verticales óptimos para que el área de clic sea amplia y cómoda, especialmente en dispositivos móviles y pantallas táctiles.
	* Configura estados de transición suaves (transition: color ...) para cuando el usuario pasa el cursor por encima (hover) o interactúa con el teclado (focus).
* `class="active"`: Clase de estado. Le indica visualmente al usuario en qué sección o página se encuentra actualmente. Bootstrap modifica el color del texto del enlace (por lo general, haciéndolo más brillante, blanco o resaltado en comparación con los otros enlaces inactivos) para denotar prioridad.





## Formulario


```html
 <form class="hstack gap-2" role="search">
    <input
        class="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
    />
```


* class="hstack": Clase de pila horizontal (Horizontal Stack). Es un componente utilitario basado en Flexbox que organiza todos sus elementos hijos en una sola línea horizontal. Añade automáticamente **display: flex, flex-direction: row y align-items: center** para que el campo de texto y su botón queden perfectamente alineados a la misma altura sin necesidad de escribir CSS manual.
* class="gap-2": Controla la separación entre los elementos dentro del hstack. El nivel 2 equivale a un espacio predeterminado de 0.5rem (aproximadamente 8px). 
* role="search": Un atributo de accesibilidad (A11y). Informa formalmente a los navegadores y lectores de pantalla que este formulario específico es un bloque de búsqueda de contenido en el sitio web.



## Botón de búsqueda
```html
<button
    class="btn-solid btn-icon theme-secondary"
    type="submit"
>
    <!--img
    src="icons-main/icons/search.svg"
    class="bi"
    width="16"
    height="16"
    alt="Search"
    /-->
    <i class="bi bi-search"></i>
</button>
```

* `class="bi"`: Aplica las propiedades CSS globales que Bootstrap Icons asigna a los iconos vectoriales. Como se puede ver en la hoja de estilos importada, la clase .bi establece propiedades clave como display: inline-block, line-height: 1 y un ajuste de alineación vertical (vertical-align: -.125em) para que el icono se alinee de forma natural a la misma altura que los textos adyacentes.
*  `alt="Search"`: Atributo obligatorio de accesibilidad (A11y). Transmite a los lectores de pantalla la descripción textual del gráfico si la imagen no se carga o si el usuario tiene una discapacidad visual.
* Las fuentes tipográficas (`<i class="bi">`) cambian de color automáticamente usando la propiedad color de CSS o las clases de texto de Bootstrap (como .text-white o el sistema de temas data-bs-theme). Al cargar un SVG dentro de una etiqueta <img>, el navegador lo aísla en un subárbol protegido. No es posible cambiar el color desde tu CSS principal ni responderá al modo oscuro de forma automática; el icono mantendrá permanentemente el color que venga codificado de fábrica dentro de su archivo (usualmente negro).


## botón secundario

```html
<button type="button" class="theme-primary btn-outline">
Mi Colección
</button>
```
* `theme-primary`: Es una clase de configuración semántica. En Bootstrap 6, la gestión de colores se apoya fuertemente en variables CSS aplicadas por contextos. Esta clase le indica al componente que debe adoptar la paleta de color catalogada como Primary (considerando el color de principal del sitio web (tema oscuro), usualmente un tono azul).
* `btn-outline`: Define la variante estética del botón. En lugar de ser un botón con un fondo de color sólido, un botón outline tiene un fondo transparente y un borde delgado. Al combinarse con theme-primary, el borde y el texto adoptan el color primario de la web.


## Código completo del header con el menú de navegación

```html
 <header>
    
    </header>
```

---

# Paso 3: Rediseñar la Sección Principal de Bienvenida (Hero Section)

#### 3.1 Código HTML Original
```html
<section>
    <div></div>
    <div>
        <span>Archivo Histórico Cinematográfico</span>
        <h1>Grandes Obras Maestras del Séptimo Arte</h1>
        <p>
            Una travesía visual por los filmes que definieron el lenguaje narrativo, la dirección de arte y la banda sonora de la historia del cine.
        </p>
        <p>
            Desde el expresionismo mudo de los años 20 hasta la revolución del color y la ciencia ficción de culto. Explora fichas técnicas, géneros y calificaciones verificadas.
        </p>
        <div>
            <a href="#catalog">Explorar Catálogo</a>
            <a href="#about">Saber Más</a>
        </div>
    </div>
</section>
```

#### 3.2 Cambios Puntuales y Clases Aplicadas
* `<section>`: Se le asigna `id="hero"` junto a las clases `.bg-dark`, `.text-white`, `.py-5`, `.mb-5` y `.border-bottom` para construir una cabecera de impacto con tema oscuro.
* `<div class="container text-center">`: Contenedor responsivo que centra el texto e imágenes.
* `<div class="row justify-content-center">` y `<div class="lg:col-8">`: Limita el ancho del texto a 8 columnas en pantallas grandes para evitar líneas excesivamente largas y mejorar la lectura.
* `<span>`: Convertido en distintivo redondeado con `.badge`, `.bg-primary`, `.text-uppercase` y `.rounded-pill`.
* `<h1>`: Aplicación de tipografía destacada `.display-5` y peso `.fw-bold`.
* `<p>`: El primer párrafo utiliza la clase de texto destacado `.lead`. El segundo aplica `.text-secondary` y `.small`.
* Botones `<a>`: Estilizados mediante `.btn`, `.btn-primary`, `.btn-outline-light` y `.btn-lg`.

#### 3.3 Código HTML Transformado
```html
<section
      id="hero"
      class="bg-dark fg-light py-5 mb-5 border-bottom border-secondary"
    >
      <div class="container text-center py-4">
        <div class="row justify-content-center">
          <div class="lg:col-8">
            <span
              class="badge bg-primary text-uppercase px-5 py-3 mb-3 rounded-pill"
              >Archivo Histórico Cinematográfico</span
            >
            <h1 class="fs-2xl fw-bold mb-3">
              Grandes Obras Maestras del Séptimo Arte
            </h1>
            <p class="lead text-light mb-3">
              Una travesía visual por los filmes que definieron el lenguaje
              narrativo, la dirección de arte y la banda sonora de la historia
              del cine.
            </p>
            <p class="fg-secondary small mb-4">
              Desde el expresionismo mudo de los años 20 hasta la revolución del
              color y la ciencia ficción de culto. Explora fichas técnicas,
              géneros y calificaciones verificadas.
            </p>
            <div class="d-flex justify-content-center gap-3">
              <a href="#catalog" class="btn btn-primary btn-lg px-4"
                >Explorar Catálogo</a
              >
              <a href="#about" class="btn btn-outline-light btn-lg px-4"
                >Saber Más</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
```

* `class="py-5"`: Añade un relleno (padding) vertical de nivel 5.
* `class="mb-5"`: Agrega un margen inferior (margin-bottom) de nivel 5 para empujar físicamente hacia abajo el siguiente componente.
* `class="border-bottom border-secondary"`: Dibuja una línea de borde delgada en la base de la sección usando el color secundario suavizado de la paleta, funcionando como un sutil separador visual.
* `class="text-center"`: Alinea absolutamente todo el contenido interno (textos, botones y badges) hacia el [centro horizontal](https://getbootstrap.com/docs/6.0/utilities/text-alignment/).
* `class="row justify-content-center"`: Activa el contenedor Flexbox de la cuadrícula de Bootstrap. La utilidad justify-content-center asegura que las columnas internas queden perfectamente centradas si no ocupan el ancho total de la fila.


### Zona de lectura

```html
<div class="container text-center py-4">
  <div class="row justify-content-center">
    <div class="lg:col-8">
```
* `class="lg:col-8"`: Define el ancho del bloque de lectura. En pantallas grandes (lg, ≥992px) en adelante, el contenido se encogerá para ocupar solo 8 de las 12 columnas disponibles de la cuadrícula de Bootstrap. Esto evita que las líneas de texto se estiren demasiado a lo ancho, mejorando drásticamente la legibilidad en monitores de escritorio. En móviles, se expande al 100% de forma automática.


### Zona de lectura

```html
<span class="badge bg-primary text-uppercase px-5 py-3 mb-3 rounded-pill">Archivo Histórico Cinematográfico</span>
```
* `class="badge"` : Aplica los estilos tipográficos básicos de una etiqueta.
* `class="bg-primary"`: Rellena el fondo del badge con el color de identidad principal.
* `class="text-uppercase"`: Transforma de forma automática todo el texto interno a letras MAYÚSCULAS.
* `class="px-5 py-3"`: Utilidades de espaciado que crean un badge amplio  aplicando relleno horizontal de nivel 5 y vertical de nivel 3.
* `class="rounded-pill"` : Aplica un radio de borde redondeado al 100% en los extremos laterales, dándole al badge un aspecto moderno en forma de píldora o cápsula. [otros ejemplos](https://getbootstrap.com/docs/6.0/utilities/border-radius/)


### Formato en textos

```html
<h1 class="fs-2xl fw-bold mb-3">Grandes Obras Maestras del Séptimo Arte</h1>
<p class="lead mb-3">Una travesía visual...</p>
<p class="fg-secondary small mb-4">Desde el expresionismo mudo...</p>

```
*  `class="fs-2xl"`:  asignar un tamaño de fuente extra grande y llamativo [más ejemplos](https://getbootstrap.com/docs/6.0/utilities/font-size/)
*  `class="fw-bold"`: Coloca el título en negrita pesada.
*  `class="lead":` Clase especial para párrafos introductorios. Incrementa sutilmente el tamaño de la fuente y reduce el peso visual del texto para hacerlo destacar como el resumen principal de la página.
*   `class="fg-secondary"`: El párrafo secundario usa fg-secondary para verse en un tono grisáceo más tenue, marcando jerarquía visual con respecto al párrafo principal.
*  `class="small"`: Reduce el tamaño de la fuente un paso por debajo del estándar del cuerpo, ideal para textos aclaratorios o contextuales.

### Centrado de los botones
```html
<div class="d-flex justify-content-center gap-3"
```
* `class="d-flex justify-content-center"`: Empaqueta los dos botones de acción en un contenedor Flexbox alineado al centro.
* `class="gap-3"`: Añade una separación física constante de nivel 3 (1rem o 16px) estrictamente entre ambos botones, evitando que choquen en cualquier resolución de pantalla.


---

### Paso 4: Reestructurar el Catálogo con Rejilla Responsiva (`Grid`) y Tarjetas (`Cards`)

#### Uso de container / row  / col
```html
<main class="container py-5">
      <section class="row p-4 g-4">
        <div class="lg:col-10">
          <h2 class="fs-2xl fw-bold">Catálogo Principal de Películas</h2>
          <p class="lead">Fichas de obras restauradas en alta definición</p>
        </div>
```



#### Uso de container / row  / col
```html
<main class="container py-5">
      <section class="row p-4 g-4">
        <div class="lg:col-10">
        ...
        </div>

        <!-- Uso de clase card-->
        <article
          class="card p-4 md:col-6 my-4 lg:col-4 d-flex justify-content-between"
        >
```

* ` md:col-6 my-4 lg:col-4` 2 columnas en pantallas medianas, 3 columnas en pantallas grandes.



#### Agregar una imagen responsiva
```html
<div class="p-4">
    <div>Clásico Imperdible</div>
    <img src="images/image.png" class="card-img" />
</div>
```





#### Clasificación y calificación de la película
```html
<div class="my-2 d-flex justify-content-between">
    <span class="fg-primary">Drama / Romance</span>
    <span class="fg-warning">★ 9.2</span>
</div>
```



#### Nombre de la película
```html
<h3 class="badge theme-success badge-outline fs-xl">Casablanca</h3>
```




#### Footer de cada película
```html
<div class="card-footer d-flex justify-content-between">
    <span class="px-5 py-2 border border-2 btn-outline">102 min</span>
    <button class="theme-primary btn-outline rounded-pill">
    Ver Ficha
    </button>
</div>
```

