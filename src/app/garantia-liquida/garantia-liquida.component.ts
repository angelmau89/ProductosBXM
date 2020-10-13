import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-garantia-liquida',
  templateUrl: './garantia-liquida.component.html',
  styleUrls: ['./garantia-liquida.component.css']
})
export class GarantiaLiquidaComponent implements OnInit {

  panelOpenState = false;
  panelOpenState1 = false;  
  panelOpenState2 = false; 
  panelOpenState3 = false; 
  tipoGarantia;
  subTipoGarantia;
  subSubTipoGarantia;
  programa;
  aforo;
  aux2;
  constructor() { }


  funcioneRevision(){
  

    if(this.aforo<=99.99)
    { 
     
      console.log((this.aforo+'').length);
  
      if((this.aforo+'').length<=5){
        this.aux2=this.aforo;
      }else{
        this.aforo=this.aux2;
      }
      
    }
    else{
     this.aforo=this.aux2;
    }
    
  }

  limpiarComociones(){
    this.aforo=null;
  }

  ngOnInit() {
  }

  modalidadCambio(){
  
    this.panelOpenState = true;
    this.panelOpenState1 = true;  
    this.panelOpenState2 = true; 
    this.panelOpenState3 = true; 

  }
  modalidadCambio2(){
    this.panelOpenState = false;
    this.panelOpenState1 = false;  
    this.panelOpenState2 = false; 
    this.panelOpenState3 = false; 

  }
  modalidadCambio3(){
    this.panelOpenState = false;
    this.panelOpenState1 = false;  
    this.panelOpenState2 = false; 
    this.panelOpenState3 = false; 

  }

  tipoGarantiaJSON=[ 
    {"ID": 1,"Name": "Líquida",},
    {"ID": 2,"Name": "Hipotecaría",},
    {"ID": 3,"Name": "Fondos de Fomento",},
    {"ID": 4,"Name": "Banca de Desarrollo",},
    {"ID": 5,"Name": "Certificados",},
    {"ID": 6,"Name": "Prendaria",},
    {"ID": 7,"Name": "Derechos Fiduciarios",},
    {"ID": 8,"Name": "Cesión de Derechos",},
    {"ID": 9,"Name": "Aval u Obligado Solidario",},
    {"ID": 10,"Name": "Seguro de crédito",}
  ]

  subTipoGarantiaJSON=[ 
    //liquida
    {"type":1, "ID": 1,"Name": "1610 Mandato",},
    {"type":1, "ID": 2,"Name": "1620 Carta de Crédito a la Vista",},
    {"type":1, "ID": 3,"Name": "1640 Fondo de reserva",},
    {"type":1, "ID": 4,"Name": "Certificados Fiduciarios",},
    //hipoteca
    {"type":2, "ID": 1,"Name": "1110 Inmuebles",},
    {"type":2, "ID": 2,"Name": "1120 Muebles",},
    //Fondos de Fomento
    {"type":3, "ID": 1,"Name": "1830 Fega",},
    {"type":3, "ID": 2,"Name": "1850 Fonaga",},
    {"type":3, "ID": 3,"Name": "1890 Fonagua",},
    //Banca de Desarrollo
    {"type":4, "ID": 1,"Name": "1810 Nafin Pari passu",},
    {"type":4, "ID": 2,"Name": "1840 Bancomext",},
    {"type":4, "ID": 3,"Name": "1870 SHF",},
    //Certificados
    {"type":5, "ID": 1,"Name": "1410 C. Depósito y Bono de Prenda",},
    //Prendaria
    {"type":6, "ID": 1,"Name": "1210 Bienes Tangibles",},
    {"type":6, "ID": 2,"Name": "1220 Bienes Intangibles",},
    {"type":6, "ID": 3,"Name": "1230 Prenda Bursátil",},
    //Derechos Fiduciarios
    {"type":7, "ID": 1,"Name": "1510 Hipotecarios",},
    {"type":7, "ID": 2,"Name": "1520 Prendarios",},
    {"type":7, "ID": 3,"Name": "1530 Líquidos",},
    {"type":7, "ID": 4,"Name": "1540 Bursátiles",},
    {"type":7, "ID": 5,"Name": "1550 Cesión de Derechos",},
    {"type":7, "ID": 6,"Name": "Patrimonio del fideicomiso",},
    //Cesión de Derechos
    {"type":8, "ID": 1,"Name": "1310 Contratos Mercantiles",},
    {"type":8, "ID": 2,"Name": "1320 Documentos de Crédito",},
    //Aval u Obligado Solidario
    {"type":9, "ID": 1,"Name": "1710 Persona Física",},
    {"type":9, "ID": 2,"Name": "1720 Persona Moral",},
    //Aval u Obligado Solidario
    {"type":10, "ID": 1,"Name": "2100 Seguro Euler",},
    
  ]

  subSubTipoGarantiaJSON=[ 
    //liquida
    {"type":1, "type2":1, "ID": 1,"Name": "1612 Pagaré a Plazo",},
    {"type":1, "type2":1, "ID": 2,"Name": "1613 Cta. Depósito Bancario",},
    {"type":1, "type2":1, "ID": 3,"Name": "1615 Inversiones",},
    {"type":1, "type2":3, "ID": 4,"Name": "1641 Proyectos",},
    {"type":1, "type2":3, "ID": 5,"Name": "1642 Programas",},
    //liquida
    {"type":2, "type2":1, "ID": 1,"Name": "1111 Habitacional",},
    {"type":2, "type2":1, "ID": 2,"Name": "1112 Comercial",},
    {"type":2, "type2":1, "ID": 3,"Name": "1113 Industrial",},
    {"type":2, "type2":1, "ID": 4,"Name": "1114 Oficinas",},
    {"type":2, "type2":1, "ID": 5,"Name": "1115 Terrenos Urbanos",},
    {"type":2, "type2":1, "ID": 6,"Name": "1116 Terrenos Rurales",},
    {"type":2, "type2":1, "ID": 7,"Name": "1118 Unidad Industrial",},
    {"type":2, "type2":1, "ID": 8,"Name": "Mixto",},
    {"type":2, "type2":2, "ID": 1,"Name": "1121 Barcos",},
    {"type":2, "type2":2, "ID": 2,"Name": "1122 Aviones",},
    //Fondos de Fomento
    {"type":3, "type2":2, "ID": 1,"Name": "1851 Avio General",},
    {"type":3, "type2":2, "ID": 2,"Name": "1852 Refaccionario General",},
    {"type":3, "type2":2, "ID": 3,"Name": "1853 PROFERTIL",},
    //Banca de Desarrollo
    {"type":4, "type2":1, "ID": 1,"Name": "1816 Selectiva",},
    {"type":4, "type2":1, "ID": 2,"Name": "Tradicional",},
    {"type":4, "type2":1, "ID": 3,"Name": "1817 Sectorial",},
    {"type":4, "type2":2, "ID": 1,"Name": "1841 Selectiva",},
    {"type":4, "type2":2, "ID": 2,"Name": "1842 Tradicional",},
    {"type":4, "type2":2, "ID": 3,"Name": "Sectorial",},
    {"type":4, "type2":3, "ID": 1,"Name": "1871 Paso y Medida",},
    {"type":4, "type2":3, "ID": 2,"Name": "1872 GPO",},
    //Certificados
    {"type":5, "type2":1, "ID": 1,"Name": "1411 Sorgo",},
    {"type":5, "type2":1, "ID": 2,"Name": "1412 Frijol",},
    {"type":5, "type2":1, "ID": 3,"Name": "1413 Maiz",},
    {"type":5, "type2":1, "ID": 4,"Name": "1414 Trigo",},
    {"type":5, "type2":1, "ID": 5,"Name": "1415 Azúcar",},
    {"type":5, "type2":1, "ID": 6,"Name": "1416 Ganado",},
    {"type":5, "type2":1, "ID": 7,"Name": "1417 Fertilizantes",},
    {"type":5, "type2":1, "ID": 8,"Name": "1418 Acero",},
    {"type":5, "type2":1, "ID": 9,"Name": "1419 Algodón",},
    {"type":5, "type2":1, "ID": 10,"Name": "1420 Otros",},
    //Prendaria
    {"type":6, "type2":1, "ID": 1,"Name": "1211 Maquinaria",},
    {"type":6, "type2":1, "ID": 2,"Name": "1212 Equipo o Mobiliario",},
    {"type":6, "type2":1, "ID": 3,"Name": "1213 Equipo de Transporte",},
    {"type":6, "type2":1, "ID": 4,"Name": "1214 Inventario de Bienes",},
    {"type":6, "type2":1, "ID": 5,"Name": "1215 Inventario de Animales",},
    {"type":6, "type2":1, "ID": 6,"Name": "1216 Inventario de Materia prima",},
    {"type":6, "type2":2, "ID": 5,"Name": "1221 Cuentas por cobrar",},
    {"type":6, "type2":2, "ID": 5,"Name": "1222 Acciones privadas",},
    //Cesión de Derechos
    {"type":8, "type2":1, "ID": 1,"Name": "1311 Con Notificación",},
    {"type":8, "type2":1, "ID": 2,"Name": "1312 Sin Notificación",},
    {"type":8, "type2":2, "ID": 1,"Name": "1321 Con Notificación con hipoteca",},
    {"type":8, "type2":2, "ID": 2,"Name": "1322 Sin Notificación con hipoteca",},
    {"type":8, "type2":2, "ID": 3,"Name": "1323 Con Notificación sin hipoteca",},
    {"type":8, "type2":2, "ID": 4,"Name": "1324 Sin Notificación sin hipoteca",},

  ]

}
