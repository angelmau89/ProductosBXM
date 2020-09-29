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


  constructor() { }

  ngOnInit() {
  }

}
