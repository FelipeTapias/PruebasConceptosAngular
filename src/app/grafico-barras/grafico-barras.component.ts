import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { graficaDeBarras } from '../data/grafica-barra.config';

@Component({
  selector: 'app-grafico-barras',
  templateUrl: './grafico-barras.component.html',
  styleUrls: ['./grafico-barras.component.css']
})
export class GraficoBarrasComponent implements OnInit {

  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    this.chart = new Chart("grafica-barras", graficaDeBarras);
  }

}
