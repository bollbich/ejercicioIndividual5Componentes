import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pagina1Component } from '../components/pagina1/pagina1.component';
import { Pagina2Component } from '../components/pagina2/pagina2.component';
import { Pagina3Component } from '../components/pagina3/pagina3.component';
import { Pagina4Component } from '../components/pagina4/pagina4.component';
import { Pagina5Component } from '../components/pagina5/pagina5.component';
import { FormsModule } from '@angular/forms';
import { MostrarResultadoComponent } from '../components/mostrar-resultado/mostrar-resultado.component';



@NgModule({
  declarations: [
    Pagina1Component,
    Pagina2Component,
    Pagina3Component,
    Pagina4Component,
    Pagina5Component,
    MostrarResultadoComponent
  ],
  exports:[
    Pagina1Component,
    Pagina2Component,
    Pagina3Component,
    Pagina4Component,
    Pagina5Component,
    MostrarResultadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PaginasModule { }
