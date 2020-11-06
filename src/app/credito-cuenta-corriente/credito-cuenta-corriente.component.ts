import { Component, OnInit } from '@angular/core';

class struccomision {
  comsion: string;
  porcentaje: number;
}

class strucFile {
  name: string;
  porfile: number;
}


@Component({
  selector: 'app-credito-cuenta-corriente',
  templateUrl: './credito-cuenta-corriente.component.html',
  styleUrls: ['./credito-cuenta-corriente.component.css']
})
export class CreditoCuentaCorrienteComponent implements OnInit {

  title = 'Productos';
  modalidad;
  programa;
  Destino;
  listDoc = [];
  tasabase;
  libor;
  lista: struccomision[] = [];
  listaFile: strucFile[] = [];
  comision;
  porComision=1.01;
  archivo:string;
  porfile;
  tasaMora="";
  tasaMaxi;
  plazaMaxidispo;
  Destino_Profertil;
  moneda;
  dispo;
  plazo;
  forcapital;
  pagoInteres;
  tasa;
  fondeo;
  capitaliza
  tasaMorafija="T.O X 2";
  tasaMorafija2="T.O X 2";
  aux=0;
  aux2=0;
  margen=1.01;
  tasaMaxi2;
  plazoMniDisponer;
  plazoMaxiDispo;
  aforo;
  Destino_Avio;
  Destino_Comer;
  margen2=1.01;
  newTasa=false;
  tasabase2;
  libor2;
  tasa2;

  constructor() { }

  ngOnInit() {
  }

  
  modalidadCambio(value) {
    this.programa = 0;
    this.Destino = 0;
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


  pptos(){
    let valor= this.tasaMora;
    if(parseInt(valor)>0){
      let elemento :any = document.getElementById('tasamora');
      elemento.type = "text";
      this.tasaMora="T.O x "+valor+" PP";
    }else{
      this.tasaMora="";
    }
  }

  vali30(){
    if(this.plazoMniDisponer>30)
    {
      alert("El valor es máximo es de 30 días")
      this.plazoMniDisponer="";
    }
    if(this.plazoMniDisponer<0){
      alert("El valor es máximo es de 1 días")
      this.plazoMniDisponer="";
    }
  }

  vali120(){
    if(this.tasaMaxi>120)
    {
      alert("El valor es máximo es de 120 días")
      this.tasaMaxi="";
    }
    if(this.tasaMaxi<0){
      alert("El valor es máximo es de 1 días")
      this.tasaMaxi="";
    }
  }

  vali1202(){
    if(this.tasaMaxi2>120)
    {
      alert("El valor es máximo es de 120 días")
      this.tasaMaxi="";
    }
    if(this.tasaMaxi2<0){
      alert("El valor es máximo es de 1 días")
      this.tasaMaxi2="";
    }
  }
  
  vali90(){
    if(this.plazaMaxidispo>90)
    {
      alert("El valor es máximo es de 90 días")
      this.plazaMaxidispo="";
    }
    if(this.plazaMaxidispo<0){
      alert("El valor es máximo es de 1 días")
      this.plazaMaxidispo="";
    }
  }

  vali300(){
    if(this.tasaMaxi>300)
    {
      alert("El valor es máximo es de 300 días")
      this.tasaMaxi="";
    }
    if(this.tasaMaxi<0){
      alert("El valor es máximo es de 1 días")
      this.tasaMaxi="";
    }
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


  addFile() {
    let array:string[]=[];
    let obj= new strucFile();
    array=this.archivo.split('\\');
    obj.name=array[array.length-1];
    obj.porfile=this.porfile;
    //this.listaFile.push(obj);
    let i = 0;
    let r = true;
    for (i = 0; i < this.listaFile.length; i++) {
      if (this.listaFile[i].name == array[array.length-1]) {
        r = false;
        break;
      }
    }
    if (r) {
  
      this.listaFile.push(obj);
      this.archivo = "";
      this.porfile = 0;
    }
    else {
      alert("Archivo ya fue cargado")
    }
    

  }

  limpiar(){
    this.tasaMora="";
    let elemento :any = document.getElementById('tasamora');
    elemento.type = "number";
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

  limpiarComociones(){
    this.porComision=1.01;
  }
  
  limpiarElemento(){
    this.plazoMniDisponer="";
  }

  limpiarElemento2(){
    this.plazoMaxiDispo="";
  }

  vali120PlazoMaxDispo(){
    if(this.plazoMaxiDispo>=120)
    {
      alert("El valor es máximo es de 120 días")
      this.plazoMaxiDispo="";
    }else{
      if(this.plazoMaxiDispo<30){
        alert("El valor es mínimo es de 30 días")
        this.plazoMaxiDispo="";
      }
    }
  }

  vali120PlazoMaxDispoMni1(){
    if(this.plazoMaxiDispo>=120)
    {
      alert("El valor es máximo es de 120 días")
      this.plazoMaxiDispo="";
    }else{
      if(this.plazoMaxiDispo<1){
        alert("El valor es mínimo es de 1 días")
        this.plazoMaxiDispo="";
      }
    }
  }

  limpiarmargen(){
    this.margen=1.01;
  }
  limpiarmargen2(){
    this.margen2=1.01;
  }

  funcioneRevision80(){
  
    if(this.aforo<=80)
    { 
     
      console.log((this.aforo+'').length);
  
      if((this.aforo+'').length<=5){
        this.aux=this.aforo;
      }else{
        this.aforo=this.aux;
      }
      
    }
    else{
     this.aforo="";
     alert("Aforo no mayor a 80%");
    }
    
  }


  limpiarAforo(){
    this.aforo="";
  }

}
