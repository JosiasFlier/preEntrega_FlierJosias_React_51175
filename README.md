# APLICACION DE REACT JS
![Badge en Desarollo](https://img.shields.io/badge/ESTADO-EN%20DESAROLLO-green)

## E-COMERCE DE CAMISETAS DE FUTBOL

TODO CAMISETAS es una aplicación de venta de camisetas de fútbol que utiliza Firebase como base de datos para almacenar su catálogo de productos. 

## EXPERIENCIA DEL USUARIO

En la página principal, los productos se presentan en tarjetas que se pueden filtrar por categoría. Al hacer clic en una tarjeta o en el botón "Detalles", el usuario accede a una breve descripción del producto y la posibilidad de agregar hasta tres unidades al carrito de compras. 


Una vez que el usuario decide finalizar la compra, puede completar un formulario con sus datos en el carrito de compras.


Al hacer clic en el botón "Finalizar compra", se genera una orden de compra que se almacena en la base de datos de Firebase bajo la colección "orders" y se le asigna un ID único. 
Este ID se muestra al usuario en una alerta generada mediante la librería SweetAlert2, confirmando la compra y mostrando el monto total pagado.

## LIBRERIAS UTILIZADAS

>**SweetAlert2 React Content**: se utiliza para mostrar una alerta cuando se agrega un producto al carrito y cuando se finaliza la compra.

>**Bootstrap**: se utiliza para dar estilo a la aplicación.

## EXTRAS
>**Componente Loader**: se muestra una pequeña animación de una pelota de fútbol en movimiento que indica al usuario que la página está cargando los productos.

>**Carrito vacio**: se muestra una imagen con un carrito vacio, y le da la posibilidad mediante un botón de volver a la pagina principal.


## DEPLOY

La aplicación ha sido deployada en Vercel. 

[TODO CAMISETAS](https://proyecto-final-reactjs-flier-josias-51175.vercel.app/)