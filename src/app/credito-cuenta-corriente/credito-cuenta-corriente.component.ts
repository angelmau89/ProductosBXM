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
  porComision;
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
  tasaMorafija="T.O X 2 PP";
  aux=0;
  aux2=0;
  margen;
  

  constructor() { }

  ngOnInit() {
  }

  
  modalidadCambio(value) {
    console.log(value)
    this.programa = 0;
    this.Destino = 0;
  }
  modalidadTasa(value) {
    this.tasabase = 0;
    this.libor = 0;
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


  vali120(){
    if(this.tasaMaxi>120)
    {
      alert("El valor es máximo es de 120 días")
      this.tasaMaxi=0;
    }
    if(this.tasaMaxi<0){
      alert("El valor es máximo es de 1 días")
      this.tasaMaxi=0;
    }
  }
  
  vali90(){
    if(this.plazaMaxidispo>90)
    {
      alert("El valor es máximo es de 90 días")
      this.plazaMaxidispo=0;
    }
    if(this.plazaMaxidispo<0){
      alert("El valor es máximo es de 1 días")
      this.plazaMaxidispo=0;
    }
  }

  vali300(){
    if(this.tasaMaxi>300)
    {
      alert("El valor es máximo es de 300 días")
      this.tasaMaxi=0;
    }
    if(this.tasaMaxi<0){
      alert("El valor es máximo es de 1 días")
      this.tasaMaxi=0;
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
