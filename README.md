# Servidores proxy con balance de carga
## proyecto de servidores



✨[Deploy BeerScript](https://loquacious-peony-72758e.netlify.app/)✨

-  [Netlify]( https://www.netlify.com/  )  | Me brinda la posibilidad de observar la SPA en funcionamiento
## Conceptos
- Utiliza hooks (useState, useEffect, useContext y useParams from eact-router-dom)
-   Maquetado responsive con React Bootstrap (Current version: 2.3.1)
-   Se aplicaron varios metodos de rendering con loading manejados con useState
-   Utiliza fireBase: firestore Database para gentionar los productos y generar ordenes de compra (collection, getDocs, getFirestore) y el Store de imagenes
## Componentes

- La interfaz de usuario esta separada por diferentes componentes para ser reutilizables, de facil mantenimiento y con potencial de escalabilidad 
- Fueron separados en funcionales y contenedores
- Se tiene en cuenta el flujo de datos unilaterales para construir la logica, ademas de aplicarse context para funcionalidad
- Cada uno esta estilado por separado con css
- Pensados para generar una interfaz intuitiva, limpia y simple


BeerScript es un proyecto al cual le dedique muchas horas, cariño y dedicacion.



## Instalacion

Primero necesitamos tener instalado [Node.js](https://nodejs.org/) para instalar y gestionar dependencias
- version 16.15.0 LTS



```sh
Abrimos la terminal 
cd "nombre de la carpeta" donde nos paramos para instalar reactJs
npx create-react "nombre del proyecto"
```

Dependencias y librerias

```sh
npm install react-router-dom  ===> Con react router dom podemos construir el routing en el browser, de forma ordenada y dinamica (BrowserRouter,Routes,Route y Link)
npm install firebase  ===> Utilizo firestore Database para gentionar los productos y generar ordenes de compra y el Store de imagenes para mejorar el rendimientonpm npm install react-icons --save   ===> React icons me proporciona los iconos ideales para mejorar la visibilidad de items. Utiliza importaciones de ES6

```
## Framework
-  [React-Bootstrap](https://react-bootstrap.github.io/) ==> Uno de los mejores framework y mas populares para react, lo utilizo en toda la pagina, para construir un layout ordenado y generar componentes responsive como el navBar o footer.
-  Current version: 2.3.1
