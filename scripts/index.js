import { series } from './data.js';
var seriesTable = document.getElementById('series');
var averageSeasons = document.getElementById('averageSeasons');
averageSeasons.style.color = "white";
averageSeasons.style.fontWeight = "bold";
averageSeasons.style.fontSize = "20px";
renderSeriesInTable(series);
averageSeasons.innerHTML = "Average seasons: ".concat(getAverageSeasons(series));
function renderSeriesInTable(seriesList) {
    seriesList.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td style = \"color: white;\">".concat(serie.id, "</td>\n                              <td style = \"color: white;hover;\">").concat(serie.name, "</td>\n                              <td style = \"color: white;\">").concat(serie.channel, "</td>\n                              <td style = \"color: white;\">").concat(serie.seasons, "</td>");
        seriesTable.appendChild(trElement);
    });
}
function getAverageSeasons(seriesList) {
    var totalSeasons = 0;
    seriesList.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    return totalSeasons / seriesList.length;
}
