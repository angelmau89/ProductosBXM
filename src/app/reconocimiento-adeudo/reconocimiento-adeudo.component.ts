import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reconocimiento-adeudo',
  templateUrl: './reconocimiento-adeudo.component.html',
  styleUrls: ['./reconocimiento-adeudo.component.css']
})
export class ReconocimientoAdeudoComponent implements OnInit {
  Destino;
  moneda;
  formaCapi;
  amortizacion;
  forInteres;
  gracia;
  Tasa;
  tasabase;
  tasaMora;
  comision;
  lista;
  porComision;
  destino;
  pptos;
  addlista;
  tasaMorafija = "T.O X 2";
  tasaMorafija2 = "T.O X 2";
  tasa;
  newTasa;
  libor;
  tasa2;
  tasabase2;
  libor2;

  constructor() { }

  ngOnInit() {
  }

  modalidadTasa(value) {
    if (this.tasa == this.tasa2) {
      alert("No se puede seleccionar la misma tasa dos veces.");
      this.tasa = "";
      this.tasabase = 0;
      this.libor = 0;
    } else {
      this.tasabase = 0;
      this.libor = 0;
    }
  }
  modalidadTasa2(value) {
    if (this.tasa == this.tasa2) {
      alert("No se puede seleccionar la misma tasa dos veces.");
      this.tasa2 = "";
      this.tasabase2 = 0;
      this.libor2 = 0;
    } else {
      this.tasabase2 = 0;
      this.libor2 = 0;
    }
  }

}
