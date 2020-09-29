import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditoSimpleComponent } from './credito-simple/credito-simple.component';
import { CreditoCuentaCorrienteComponent } from './credito-cuenta-corriente/credito-cuenta-corriente.component';
import { FactorajeComponent } from './factoraje/factoraje.component';
import { PrendarioComponent } from './prendario/prendario.component';
import { ArrendamientoComponent } from './arrendamiento/arrendamiento.component';
import { ContigenciaComponent } from './contigencia/contigencia.component';
import { ReconocimientoAdeudoComponent } from './reconocimiento-adeudo/reconocimiento-adeudo.component';

const routes: Routes = [
    //{ path: '', component: AppComponent},
    { path: 'Credito_Cuneta_Corriente', component: CreditoCuentaCorrienteComponent},
    { path: 'Credito_Simple', component: CreditoSimpleComponent},
    { path: 'Factoraje', component: FactorajeComponent},
    { path: 'Prendario', component: PrendarioComponent},
    { path: 'Arrendamiento', component: ArrendamientoComponent},
    { path: 'Contigencia', component: ContigenciaComponent},
    { path: 'Reconocimiento_Adeudo', component: ReconocimientoAdeudoComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }