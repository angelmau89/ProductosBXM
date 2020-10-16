import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CreditoSimpleComponent } from './credito-simple/credito-simple.component';
import { CreditoCuentaCorrienteComponent } from './credito-cuenta-corriente/credito-cuenta-corriente.component';
import { FactorajeComponent } from './factoraje/factoraje.component';
import { PrendarioComponent } from './prendario/prendario.component';
import { ArrendamientoComponent } from './arrendamiento/arrendamiento.component';
import { ContigenciaComponent } from './contigencia/contigencia.component';
import { ReconocimientoAdeudoComponent } from './reconocimiento-adeudo/reconocimiento-adeudo.component';
import { GarantiaLiquidaComponent } from './garantia-liquida/garantia-liquida.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatDatepickerModule,MatNativeDateModule,MatSlideToggleModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CreditoSimpleComponent,
    CreditoCuentaCorrienteComponent,
    FactorajeComponent,
    PrendarioComponent,
    ArrendamientoComponent,
    ContigenciaComponent,
    ReconocimientoAdeudoComponent,
    GarantiaLiquidaComponent
  ],
  imports: [
    MatSlideToggleModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatExpansionModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,    
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
