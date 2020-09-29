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
    this.tasaMora="T.O x "+valor+" pp"
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

}
