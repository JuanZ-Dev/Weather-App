# ⛅ Weather app
Prueba la aplicación: 

[![Weather app image](https://raw.githubusercontent.com/JuanZ-Dev/Weather-App/main/images/weatherApp.png "Weather app image")](https://raw.githubusercontent.com/JuanZ-Dev/Weather-App/main/images/weatherApp.png "Weather app image")

<div align="center" dir="auto">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</div>

### 📝 Descripción
Esta es un aplicación en la que se puede ver el clima de todas la ciudades que existen en cada país del mundo. Para poder visualizar los diferentes climas se tiene que realizar un solicitud a la API de OpenWeatherMap, que es la que se está utilzando.

La aplicación cuenta con una entrada de texto para que el usuario ingrese la ciudad de la cual quiere ver el clima, luego podrá seleccionar el botón con el icono de lupa para enviar la solicitud a la API y proceder con la busqueda. La respuesta recibida de la API se mostrará debajo del campo de texto, en la cual el usuario podrá visualizar diversos datos referidos al clima de la ciudad solicitada (nombre de la ciudad, temperatura, condición climática, porcentaje de humedad y la velocidad del viento), a parte de estos datos se muestra la hora de la ciudad y una imagen que hace referencia a la condición climática.

### 🤔 ¿Que necesitas?
- 🔹 Necesitas tener una api key de OpenWeatherMap. Para esto debes crear una cuenta en la pagina de [OpenWeather](https://openweathermap.org/ "OpenWeather"), luego debes dirigirte a [API keys](https://openweathermap.org/ "OpenWeather") y verás que ya se ha generado.
- 🔹 Reemplazar tu **api key** por el mensaje **"Your api key"** en el archivo weather.js, el cual se encuentra dentro de la carpeta js.

### ⚙ Funciones
- ✔️ Conectarse con la API de OpenWeatherMap mediante una api key.
- ✔️ Almacenar la última ciudad solicitada en el LocalStorage.
- ✔️ Detectar si el usuario no ha ingresado nada en el campo de texto.
- ✔️ Calcular la hora de la ciudad solicitada haciendo uso del formato UTC.
- ✔️ Colocar animaciones haciendo uso de la libreria Lottie (se muestra una animación diferente de acuerdo a la condición climática de la ciudad).
- ✔️ Detección del error 404, mostrando una imagen de error y un mensaje.
- ✔️ Cambio de color del contenedor del clima dependiendo si es de día o de noche en la ciudad solicitada.
- ✔️ Uso de keyframes para animar la respuesta de la API.
- ✔️ Modo responsivo para los diferentes dispositivos móviles.

### 👨‍💻 Autor
<div>
  <a href="https://github.com/JuanZ-Dev" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
  </a><br/>
  <a href="https://www.linkedin.com/in/juan-zapata-durand/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
  </a><br/>
  <a href="https://www.instagram.com/juanz_98/" target="_blank">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white">
  </a><br/>
</div>
