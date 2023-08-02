import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-grafico-lineas',
  templateUrl: './grafico-lineas.component.html',
  styleUrls: ['./grafico-lineas.component.css']
})
export class GraficoLineasComponent implements OnInit {

  chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
  
    this.chart = new Chart("grafica-lineal", {
      type: 'line',
      data: { // Valores en el eje X
        labels: ['Hora 1', 'Hora 2', 'Hora 3','Hora 4',
								 'Hora 5', 'Hora 6', 'Hora 7','Hora 8', ], 
	       datasets: [
          {
            label: "Aprobados por hora",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }
    });
  }

}
