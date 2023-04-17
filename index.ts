import {Serie} from './serie.js';
import { series } from './data.js';

const seriesTable: HTMLElement = document.getElementById('series')!;
const averageSeasons: HTMLElement = document.getElementById('averageSeasons')!;
averageSeasons.style.color = "white";
averageSeasons.style.fontWeight = "bold";
averageSeasons.style.fontSize = "20px";

renderSeriesInTable(series);
averageSeasons.innerHTML = `Average seasons: ${getAverageSeasons(series)}`;

function renderSeriesInTable(seriesList: Serie[]): void {
    seriesList.forEach(serie => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td style = "color: white;">${serie.id}</td>
                              <td style = "color: white;hover;">${serie.name}</td>
                              <td style = "color: white;">${serie.channel}</td>
                              <td style = "color: white;">${serie.seasons}</td>`; 
                              seriesTable.appendChild(trElement);
                            });
}

function getAverageSeasons(seriesList: Serie[]): number {
    let totalSeasons: number = 0;
    seriesList.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    return totalSeasons / seriesList.length;
  }