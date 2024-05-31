# Superhero Information Display

'Este proyecto es una aplicación web que permite a los usuarios buscar superhéroes y mostrar información detallada sobre ellos. La aplicación utiliza la Superhero API para obtener datos de superhéroes basados en la entrada del usuario y los muestra de manera formateada junto con un gráfico circular de las estadísticas de poder del superhéroe.'

## Características

'Buscar superhéroes por ID.
Mostrar detalles del superhéroe, incluyendo imagen, nombre, conexiones, editor, ocupación, primera aparición, altura, peso y alias.
Mostrar un gráfico circular de las estadísticas de poder del superhéroe.'

## Explicación de Componentes Clave

' $(document).ready(function() { ... }): Asegura que el DOM esté completamente cargado antes de ejecutar el código dentro.
$('form').submit(function(event) { ... }): Adjunta un manejador de eventos de envío al formulario para interceptar los envíos del formulario.
event.preventDefault(): Previene el comportamiento predeterminado del formulario.
let input = $("heroInput").val();: Obtiene el valor introducido por el usuario.
$.ajax({ ... }): Realiza una solicitud AJAX a la Superhero API.
$("heroInfo").html(...);: Actualiza el contenido HTML del div #heroInfo con los datos del superhéroe obtenidos.
CanvasJS.Chart: Crea y renderiza un gráfico circular usando la biblioteca CanvasJS.'

## Dependencias

'jQuery
CanvasJS (para gráficos)'
