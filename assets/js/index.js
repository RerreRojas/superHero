$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    let input = $("#heroInput").val();
    $.ajax({
      type: "GET",
      url: "https://superheroapi.com/api.php/3033707663582647/" + input,
      dataType: "json",
      success: function (data) {
        console.log(data);

        // Verificar que las propiedades existen antes de usarlas
        let connections =
          data.connections["group-affiliation"] || "No disponible";
        let publisher = data.biography.publisher || "No disponible";
        let occupation = data.work.occupation || "No disponible";
        let firstAppearance =
          data.biography["first-appearance"] || "No disponible";
        let height = data.appearance.height.join(", ") || "No disponible";
        let weight = data.appearance.weight.join(", ") || "No disponible";
        let aliases = data.biography.aliases.join(", ") || "No disponible";

        $("#heroInfo").html(`
                    <div class="row">
                        <div class="col-md-4 my-auto text-center">
                            <img id="heroImg" src="${data.image.url}" height="350px" alt="${data.name}" />
                        </div>
                        <div class="col-md-4">
                            <div class="card-body">
                                <h5 class="card-text"><b>NOMBRE:</b></h5>
                                <h4 class="card-title"><b>${data.name}</b></h4>
                                <p class="card-text"><b>CONEXIONES:</b> ${connections}</p>
                                <p class="card-text"><b>FECHA DE PUBLICACION:</b> ${publisher}</p>
                                <p class="card-text"><b>OCUPACION:</b> ${occupation}</p>
                                <p class="card-text"><b>PRIMERA APARICION:</b> ${firstAppearance}</p>
                                <p class="card-text"><b>ALTURA:</b> ${height}</p>
                                <p class="card-text"><b>PESO:</b> ${weight}</p>
                                <p class="card-text"><b>ALIAS:</b> ${aliases}</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div id="heroStats" style="height: 360px; width: 100%"></div>
                        </div>
                    </div>
                `);

        // Generar gráfico de estadísticas
        let estadisticas = [
          { y: data.powerstats.intelligence, label: "Inteligencia" },
          { y: data.powerstats.strength, label: "Fuerza" },
          { y: data.powerstats.speed, label: "Velocidad" },
          { y: data.powerstats.durability, label: "Resistencia" },
          { y: data.powerstats.power, label: "Poder" },
          { y: data.powerstats.combat, label: "Combate" },
        ];

        let config = {
          theme: "light1",
          animationEnabled: true,
          title: {
            text: "Estadísticas de Poder para " + data.name,
          },
          data: [
            {
              type: "pie",
              startAngle: 25,
              toolTipContent: "<b>{label}</b>: {y}",
              showInLegend: true,
              legendText: "{label} - {y}",
              indexLabelFontSize: 16,
              indexLabel: "{label} - {y}",
              dataPoints: estadisticas,
            },
          ],
        };

        let chart = new CanvasJS.Chart("heroStats", config);
        chart.render();
      },
      error: function (error) {
        console.error("Ocurrió un error:", error);
      },
    });
  });
});
