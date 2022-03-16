import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pagina1Component } from '../components/pagina1/pagina1.component';
import { Pagina2Component } from '../components/pagina2/pagina2.component';
import { Pagina3Component } from '../components/pagina3/pagina3.component';
import { Pagina4Component } from '../components/pagina4/pagina4.component';
import { Pagina5Component } from '../components/pagina5/pagina5.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'pagina1',
    component:Pagina1Component
  },
  {
    path:'pagina2',
    component:Pagina2Component
  },
  {
    path:'pagina3',
    component:Pagina3Component
  },
  {
    path:'pagina4',
    component:Pagina4Component
  },
  {
    path:'pagina5',
    component:Pagina5Component
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  declarations: [],
  exports:[
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
