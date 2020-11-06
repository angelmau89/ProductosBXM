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
  tasa;
  tasabase;
  fondeo;
  Capitaliza;
  margen=1.01;;
  aux2=0;
  aux=0;
  formaPago;
  aforo;
  tasaMorafija="T.O X 2";
  tasaMorafija2="T.O X 2";
  margen2=1.01;
  newTasa=false;
  tasabase2;
  libor2;
  tasa2;
  libor;



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

  inputAforo(){
    if(this.aforo>=80){
      if(this.aforo<=100){

      }else{
        alert("Aforo de 80 A 100")
        this.aforo=80;
      }

    }else{
      alert("Aforo de 80 A 100")
      this.aforo=80;
    }
  }

  limpiarAforo(){
    this.aforo=null;
  }

  //Nuevas de tasa 2
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


  modalidadTasa(value) {
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


}
