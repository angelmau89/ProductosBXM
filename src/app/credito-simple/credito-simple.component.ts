import { Component, OnInit } from '@angular/core';


class struccomision {
  comsion: string;
  porcentaje: number;
}


@Component({
  selector: 'app-credito-simple',
  templateUrl: './credito-simple.component.html',
  styleUrls: ['./credito-simple.component.css']
})
export class CreditoSimpleComponent implements OnInit {

  plazContra;
  PlazoMaxi;
  PlazoMaxidispo;
  tasaMora;
  lista: struccomision[] = [];
  comision;
  porComision;
  Destino;
  moneda;
  formaDispo;
  amortizacion;
  formaInteres;
  gracia;
  Tasa;
  tasabase;
  fondeo;
  Capitaliza;
  margen;
  aux2=0;
  aux=0;
  formaPago;

  constructor() { }

  ngOnInit() {
  }

  superPlazo(){
    if(this.PlazoMaxi>this.plazContra){
      alert("Plazo máximo de disposición no debe exceder el placo del contrato");
      this.PlazoMaxi=0
    }
    if(this.PlazoMaxi<0){
      alert("Plazo máximo de disposición no debe ser menor a 1 mes");
      this.PlazoMaxi=0
    }
  }

  superPlazoDispo(){
    if(this.PlazoMaxidispo>6){
      alert("Plazo máximo para disponer no debe exceder 6 meses");
      this.PlazoMaxidispo=0
    }
    if(this.PlazoMaxidispo<0){
      alert("Plazo máximo para disponer no debe ser menor a 1 mes");
      this.PlazoMaxidispo=0
    }
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

  limpiarComociones2(){
    this.margen=null;
  }
  limpiarComociones(){
    this.porComision=null;
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

  plazoSinContrato(){
    this.plazContra
  }

}
