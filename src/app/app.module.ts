import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoModule } from './curso/curso.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    CommonModule, 
    CursoModule, 
    HttpClientModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule{ }
