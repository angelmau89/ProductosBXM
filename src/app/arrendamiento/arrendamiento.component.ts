import { Component, OnInit } from '@angular/core';

class struccomision {
  comsion: string;
  porcentaje: number;
}

@Component({
  selector: 'app-arrendamiento',
  templateUrl: './arrendamiento.component.html',
  styleUrls: ['./arrendamiento.component.css']
})
export class ArrendamientoComponent implements OnInit {
  tasaMora;
  lista: struccomision[] = [];
  comision;
  porComision;
  modalidad;
  destino;
  modoArre;
  moneda;
  formaCapita;
  Tasa;
  tasabase;

  constructor() { }

  ngOnInit() {
  }

  pptos(){
    let valor= this.tasaMora;
    this.tasaMora="T.O x "+valor+" pp"
  }

  addlista() {

    let obj = new struccomision();
    obj.comsion = this.comision;
    obj.porcentaje = this.porComision;
    let i = 0;
    let r = true;
    for (i = 0; i < this.lista.length; i++) {
      if (this.lista[i].comsion == this.comision) {
        r = false;
        break;
      }
    }
    if (r) {
      this.lista.push(obj);
      this.comision = "";
      this.porComision = 0;
    }
    else {
      alert("Comision Agregada")
    }

    
  }

}
