<h1 align="center"><a href="https://logodownload.org/wp-content/uploads/2021/06/google-cloud-logo-1.png" target="Google Cloud">
  <img src="https://uploads-ssl.webflow.com/5f5097f276b52f2a32f9c27a/627cbadb07e34fb8432b0c8e_google-cloud-platform-logo.png" alt="Google Cloud"
       style="width: 120px; height: 44px;" width="120" height="44" /xcv cvx></a> Google cloud with Python
  <a href="https://colombia.marialuisa.foundation/wp-content/uploads/sites/19/2022/09/Python-Symbol.png" target="_blank">
    <img src="https://colombia.marialuisa.foundation/wp-content/uploads/sites/19/2022/09/Python-Symbol.png" 
         style="width: 200px; height: 44px;" width="200" height="44" /></a></h1>
<div align="center">
  <img src="https://img.shields.io/static/v1?label=Plataforma&message=Gcloud&color=%234285F4&logo=Google+Cloud&logoColor=%234285F4" alt="GCloud"/>
  <img src="https://img.shields.io/static/v1?label=Lenguaje&message=Python&color=%230098FF&logo=Python&logoColor=%230098FF)](https://cloud.google.com/?hl=es" alt="Python"/>
  <img src="https://img.shields.io/static/v1?label=Licencia&message=creative+commons&color=%23EF9421&logo=creativecommons&logoColor=%23EF9421)](https://cloud.google.com/?hl=es" alt="CC"/>
</div>
<br>
¡Hola bienvenido!, durante el presente repositorio encontrara un CRUD sencillo usando Python como lenguaje de programacion como tambien utilizamos Google Cloud Platform para alojar nuestra base de datos, Este repositorio es ideal para aquellos que están interesados en aprender cómo crear una aplicación sencilla con Python y GCP. También es perfecto para aquellos que desean mejorar sus habilidades en el manejo de bases de datos y el desarrollo de aplicaciones.
Esperamos que encuentren útil este repositorio y lo disfruten. a continuacion encontrara el contenido jerarquico del repositorio

# Interactua con nuestro proyecto
<p align="center">
  <img src="https://s11.gifyu.com/images/ezgif-5-ece5846f8e.gif" alt="animated" />
</p>

> Puedes probar nuestro proyecto desplegado en la nube a traves de este [link directo](https://leafy-valor-314300.ue.r.appspot.com/)
# Tabla de Contenido

- [Instalacion](#instalacion)
- [Ejecucion](#ejecucion)
- [Funcionamiento](#funcionamiento)
    + [Crear un Usuario](#crear_usuario)
    + [Visualizar los  Usuarios](#visualizar_usuario)
    + [Modificar un Usuario](#modificar_usuario)
    + [Eliminar un Usuario](#eliminar_usuario)
- [arquitectura](#arquitectura)
    + [Arquitectura](#definicion)
    + [Ventajas](#ventajas)
    + [¿Cuando implementar esta arquitectura?](#recomendaciones)
 - [Despliegue](#despliegue)
 - [licencia & autores](#creditos)
 
# Instalacion

# Ejecucion

# funcionamiento
Este proyecto es un CRUD cuyo acrónimo significa Create, Read, Update y Delete (Crear, Leer, Actualizar y Eliminar). El objetivo principal de la aplicacion es la capacidad de crear, leer, actualizar y eliminar los usuarios en una base de datos. A continuacion se evidencia una breve descripcion y flujo de actividades de cada uno de los diferentes metodos en el software:

## crear_usuario
Envia una peticion al servidor para la creacion de un usuario, el flujo de pasos es el siguiente:
1. El usuario toca el boton de "crear nuevo"
2. El sistema renderiza una vista de formulario de 3 campos requeridos (correo, nombre y telefono)
3. El usuario completa los campos requeridos y envia peticion al servidor
4. El sistema responde con una notificacion de registro exitoso

![registro](https://i.ibb.co/hHQrHpC/crear.png)
> Registro de usuario

## visualizar_usuario
El Sistema muestra los usuarios registrados en la base de datos, el flujo es relativamente sencillo:
1. El usuario ingresa a la url del proyecto
2. El sistema retorna en una tabla respecto a todos los usuarios registrados en el sistema, ademas de los campos anteriores, abarcan el id y la seccion de acciones (botones de editar/eliminar)

![consulta](https://i.ibb.co/D4cnn8n/guardar.png)
> Consulta de usuario en la base de datos

## modificar_usuario
El usuario elije un registro en especifico del listado de usuario para su posterior modificacion:
1. El usuario consulta el listado de usuario
2. El usuario acciona el boton de editar
3. El sistema retorna en una ventana modal, el formulario de actualizacion donde trae los campos completos con la informacion registrada donde el usuario podra editar a su gusto
4. El usuario envia peticion al servidor de actualizacion del usuario
5. El Sistema retorna un mensaje de actualizacion de manera exitosa 
![ediccion](https://i.ibb.co/M9n8Ws0/editar.png)
> Ediccion de un usuario en la base de datos

## eliminar_usuario
El Sistema muestra los usuarios registrados en la base de datos, el flujo es relativamente sencillo:
1. El usuario ingresa a la url del proyecto
2. El sistema retorna en una tabla respecto a todos los usuarios registrados en el sistema, ademas de los campos anteriores, abarcan el id y la seccion de acciones (botones de editar/eliminar)
3. El usuario clickea el boton de eliminar en base a un registro en especifico
4. El sistema envia peticion al usuario para la confirmacion de eliminacion del usuario
5. El usuario confirma la accion de elimincacion permanente del registro
6. El sistema retorna una ventana modal de confirmacion de eliminacion exitosa

![eliminacion](https://i.ibb.co/0qNJWBj/eliminar.png)
> Eliminacion de un usuario
