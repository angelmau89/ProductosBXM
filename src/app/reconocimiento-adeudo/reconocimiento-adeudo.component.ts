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

  constructor() { }

  ngOnInit() {
  }

}
