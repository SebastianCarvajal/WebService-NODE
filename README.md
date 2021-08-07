# WebService-NODE
Web Service REST 


Este proyecto es un ejemplo de una API REST Web Services Realizado en NodeJS

Antes de ejecutar se debe tener MySQL:
Y en ella creada la base de datos, utilizar el script que se encuentra aquí:
![Base de datos](https://github.com/SebastianCarvajal/WebService-NODE/blob/main/BD/web_service.sql)

Puede utilizar XAMPP para administrar su base de datos MySql

Abrir el proyecto en Visual Studio Code ....

Se debe cargar el proyecto en Visual Studio Code
Luego debe modificar el archivo user.js del proyecto que se encuentra en:
src/models/user.js
en el se debe modificar las credenciales de MySql para que el proyecto acceda a la base de datos:
(especificar el usuario, contraseña y el nombre de la base de datos)
  user: 'root',
  password: 'la_clave',
  database: 'web_service'

Luego iniciar el Web Service iniciando el archivo app.js ejecutando el siguiente comando en el terminal:

node src/app.js
Si en el terminal se muestra el siguiente mensaje:
server on port 3000
quiere decir que el Servicio se ha ejecutado y estará a la escucha de las peticiones


Una vez realizado lo anterior puede probar en el navegador colocando:

http://localhost:3000/contactos 
lo cual responderá a la petición GET retornando registros que se encuentran en la base de datos

Para utilizar las demas tipos de peticiones puede realizarlo con la aplicación que se encuentra en el siguiente enlace:

![Aplicacion cliente](https://github.com/MayraCevallosHaro/FrontEnd)
