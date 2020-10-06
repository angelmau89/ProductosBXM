import { Component, OnInit } from '@angular/core';


class struccomision {
  comsion: string;
  porcentaje: number;
}

class mercaAforo {
  merca: string;
  aforo: number;
}

@Component({
  selector: 'app-prendario',
  templateUrl: './prendario.component.html',
  styleUrls: ['./prendario.component.css']
})
export class PrendarioComponent implements OnInit {
  tasaMora;
  lista: struccomision[] = [];
  lista2: mercaAforo[] = [];
  comision;
  porComision;
  merca;
  aforo;
  llamaAforo="1.00";
  modalidad;
  moneda;
  formaDispo;
  plazoMaxi;
  plazContra;
  FormaCapital;
  armoti;
  pagointres;
  Tasa;
  tasabase;
  tasaMorafija="T.O X 2 PP";
  modalidadTasa;
  tasa;
  margen;
  aux=0;
  aux2=0;

  constructor() { }
  ngOnInit() {
  }

  pptos() {
    let valor = this.tasaMora;
    this.tasaMora = "T.O x " + valor + " pp"
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

    let obj = new mercaAforo();
    obj.aforo = this.aforo;
    obj.merca = this.merca;
    let i = 0;
    let r = true;
    if (this.lista2.length<4) {
      for (i = 0; i < this.lista2.length; i++) {
        if (this.lista2[i].merca == this.merca) {
          r = false;
          break;
        }
      }
      if (r) {
        this.lista2.push(obj);
        this.merca = "";
        this.aforo = 0;
      }
      else {
        alert("Mercancia ya fue agregada")
      }
    }
    else {
      alert("Solo se permite agregar 4 mercancias")
    }


  }

  formato(){
    this.llamaAforo;
  }
  Limpia(){
    this.llamaAforo="";
  }

  limpiarComociones(){
    this.porComision=null;
  }
  
  limpiarComociones2(){
    this.margen=null;
  }

  funcioneRevision(){
  

    if(this.porComision<=99.99)
    { 
     
      console.log((this.porComision+'').length);
  
      if((this.porComision+'').length<=5){
        this.aux=this.porComision;
      }else{
        this.porComision=this.aux;
      }
      
    }
    else{
     this.porComision=this.aux;
    }
    
  }

  funcioneRevision2(){
  

    if(this.margen<=99.99)
    { 
     
      console.log((this.margen+'').length);
  
      if((this.margen+'').length<=5){
        this.aux2=this.margen;
      }else{
        this.margen=this.aux2;
      }
      
    }
    else{
     this.margen=this.aux2;
    }
    
  }


}
