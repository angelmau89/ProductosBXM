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
  aux=0;
  aux2=0;
  margen=1.01;
  tasa;
  modalidadTasa;
  aforo=80;
  plazomin;
  margen2=1.01;
  tasa2;
  tasabase2;
  libor;
  libor2;
  tasaMorafija="T.O X 2";
  tasaMorafija2="T.O X 2";
  newTasa;
  fondeo;
  pagoInteres;

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

  

  limpiarComociones(){
    this.porComision=null;
  }
  
  limpiarComociones2(item){
    this.margen=null;
  }

  funcionAforo(){
  //alert(this.aforo);
    if(this.aforo<=100 && this.aforo>80)
    { 
     
      console.log((this.aforo+'').length);
  
      if((this.aforo+'').length<=5){
        this.aux2=this.aforo;
      }else{
        this.aforo=this.aux2;
      }
      
    }
    else{
     this.aforo=80;
    }
    
  }

  vali30(){
    if(this.plazomin>=30)
    {
     
    }else{
      alert("El valor minimo es de 30 días")
      this.plazomin="";
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


  modalidadTasa22(value) {
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
  modalidadTasa222(value) {
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

}
