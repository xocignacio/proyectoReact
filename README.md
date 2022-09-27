# Servidores proxy con balanceo de carga 

## Rutas
✨[Servidor 1](http://localhost:8080/)✨
✨[Servidor 2](http://localhost:8081/)✨

## Conceptos
-  utilizo pm2 unprocess manager simplifica la app para ejecutarla como cluster
-  con ecosystem genero varias instancias de un proceso , utilizando formato cjs
-  Con nginx (servidor web), orientado a eventos, que actúa como un proxy lo que nos permite redireccionar el tráfico entrante en función del dominio de dónde vienen,      hacia el proceso y puerto que nos interese.

## Balancear la carga
Un solo servidor de origen, en una página con millones de visitantes diarios, no puede manejar todo el tráfico entrante.
El proxy inverso puede recibir el tráfico entrante antes de que llegue al servidor de origen. Si este está sobrecargado o cae completamente, puede distribuir el tráfico a otros servidores sin afectar la funcionalidad del sitio. Es el principal uso de los servidores proxy inverso.
Seguridad mejorada: Al ocultar el proxy inverso la IP del servidor de origen de un sitio web, se puede mantener el anonimato del mismo, aumentando considerablemente su seguridad. Al tener al proxy como intermediario, cualquier atacante que llegue va a tener una traba más para llegar al servidor de origen.
