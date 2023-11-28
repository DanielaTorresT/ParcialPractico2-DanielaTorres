import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso.component';

import { CursoListarComponent } from './curso-listar/curso-listar.component';

@NgModule({
  
 
  imports: [    CommonModule  ], 
 
  declarations: [ CursoListarComponent],
  exports: [CursoListarComponent]
})
export class CursoModule { }
