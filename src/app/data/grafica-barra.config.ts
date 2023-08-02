import { ChartConfiguration } from "chart.js";

const dataBack = {
    "totalSolicitudes": 4,
    "solicitudesAprobadas": 3,
    "clientesSincronizados": 0,
    "totalMontosAprobados": 1500000,
    "totalSolicitudesFaltanDatos": 1,
    "solicitudesAprobadasPorElBot": 4,
    "estructuraGrafica": {
      "etiquetaValorMagnitudes": [
        "Hora 1",
        "Hora 2",
        "Hora 3",
        "Hora 4"
      ],
      "referencias": [
        {
          "etiquetaNombreReferencia": "Solicitudes aprobadas por hora",
          "valoresReferencia": [
            12,
            6,
            12,
            23
          ]
        }
      ]
    }
  }

  interface Referencia {
    label: string;
    data:  number[];
    backgroundColor: string;
  }

  var referenciasBack: Referencia[] = [];
  let referenciaObject: Referencia;
  dataBack.estructuraGrafica.referencias.forEach(referencia => {
    referenciaObject = {
        label: referencia.etiquetaNombreReferencia,
        data:  referencia.valoresReferencia,
        backgroundColor: 'green'
    }
    referenciasBack.push(referenciaObject)
  });

  

export const graficaDeBarras: ChartConfiguration = {
    type: 'bar',
    data: {
        labels: dataBack.estructuraGrafica.etiquetaValorMagnitudes,
        datasets: referenciasBack
    },
    options: {
        aspectRatio: 4
    }
}