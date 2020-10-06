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
  tasaMorafija="T.O X 2 PP";
  aux=0;
  aux2=0;
  margen;
  tasa;
  modalidadTasa;

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

  limpiarComociones(){
    this.porComision=null;
  }
  
  limpiarComociones2(item){
    this.margen=null;
  }

}
