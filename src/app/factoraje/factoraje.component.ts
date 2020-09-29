import { Component, OnInit } from '@angular/core';

class struccomision {
  comsion: string;
  porcentaje: number;
}

class nombreClien {
  name: string;
}

@Component({
  selector: 'app-factoraje',
  templateUrl: './factoraje.component.html',
  styleUrls: ['./factoraje.component.css']
})
export class FactorajeComponent implements OnInit {
  tasaMora;
  lista: struccomision[] = [];
  listacli: nombreClien[] = [];
  comision;
  porComision;
  nombreclien;
  modalidad;
  destino;
  moneda;
  plazContra;
  fromaCapital;
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

  addlista2() {

    let obj = new nombreClien();
    obj.name=this.nombreclien;

    let i = 0;
    let r = true;
    for (i = 0; i < this.listacli.length; i++) {
      if (this.listacli[i].name == this.nombreclien) {
        r = false;
        break;
      }
    }
    if (r) {
      this.listacli.push(obj);
      this.nombreclien="";
    }
    else {
      alert("Nombre ya agregado")
    }

  }

}
