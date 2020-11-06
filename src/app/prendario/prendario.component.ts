import { Component, OnInit } from '@angular/core';


class struccomision {
  comsion: string;
  porcentaje: number;
}

class mercaAforo {
  merca: string;
  aforo: number;
  unidad:string;
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
  porComision=1.01;
  merca;
  aforo=80;
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
  tasaMorafija2="T.O X 2";
  modalidadTasa;
  tasa;
  margen=1.01;
  margen2=1.01;
  aux=0;
  aux2=0;
  libor;
  libor2;
  tasabase2;
  tasa2;
  pagoInteres;
  newTasa;
  unidad;
  diasmax;

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

  funcioneRevision80(){
  
    if(this.aforo>=80 && this.aforo<=100)
    { 
     
      console.log((this.aforo+'').length);
  
      if((this.aforo+'').length<=5){
        this.aux=this.aforo;
      }else{
        this.aforo=this.aux;
      }
      
    }
    else{
     this.aforo=80;
     alert("Aforo mayor a 80%");
    }
    
  }

  addlista2() {

    let obj = new mercaAforo();
    obj.aforo = this.aforo;
    obj.merca = this.merca;
    obj.unidad=this.unidad;
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
  

    if(this.porComision<=1.59)
    { 
     
      console.log((this.porComision+'').length);
  
      if((this.porComision+'').length<=5){
        this.aux=this.porComision;
      }else{
        this.porComision=this.aux;
      }
      
    }
    else{
     this.porComision=1.01;
    }
    
  }

  funcioneRevision2(){
  

    if(this.margen<=1.99)
    { 
     
      console.log((this.margen+'').length);
  
      if((this.margen+'').length<=5){
        this.aux2=this.margen;
      }else{
        this.margen=this.aux2;
      }
      
    }
    else{
     this.margen=1.01;
    }
    
  }

  funcioneRevision22(){
  

    if(this.margen2<=1.99)
    { 
     
      console.log((this.margen2+'').length);
  
      if((this.margen2+'').length<=5){
        this.aux2=this.margen2;
      }else{
        this.margen2=this.aux2;
      }
      
    }
    else{
     this.margen2=1.01;
    }
    
  }


  modalidadTasa1(value) {
    if(this.tasa==this.tasa2){
      alert("No se puede seleccionar la misma tasa dos veces.");
      this.tasa="";
      this.tasabase = 0;
      this.libor = 0;
      }else{
        this.tasabase = 0;
        this.libor = 0;
      }
  }
  modalidadTasa2(value) {
    if(this.tasa==this.tasa2){
    alert("No se puede seleccionar la misma tasa dos veces.");
    this.tasa2="";
    this.tasabase2 = 0;
    this.libor2 = 0;
    }else{
      this.tasabase2 = 0;
      this.libor2 = 0;
    }
  }
  validar30a180(){
    if(this.diasmax<30){
      alert("El plazo minimo es 30 días ");
      this.diasmax=null;
    }
    if(this.diasmax>180){
      alert("El plazo máximo es 180 días");
      this.diasmax=null;
    }
  }

}
