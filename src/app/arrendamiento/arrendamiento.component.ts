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
