import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contigencia',
  templateUrl: './contigencia.component.html',
  styleUrls: ['./contigencia.component.css']
})
export class ContigenciaComponent implements OnInit {

  modalidad;
  programa;
  moneda;
  plazoinMax;
  sobregiro;


  constructor() { }

  ngOnInit() {
  }

  plazoin(){
    if(this.plazoinMax<1){
      alert("Plazo no menor a 1 Hrs");
      this.plazoinMax="";
    }
    if(this.plazoinMax>24){
      alert("Plazo no mayor a 24 Hrs");
      this.plazoinMax="";
    }
  }

  plazosobre(){
    if(this.sobregiro<1){
      alert("Plazo no menor a 1 díaz");
      this.sobregiro="";
    }
    if(this.sobregiro>7){
      alert("Plazo no mayor a 7 días");
      this.sobregiro="";
    }
    
  }

}
