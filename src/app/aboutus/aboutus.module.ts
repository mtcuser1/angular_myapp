import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AboutusComponent],
  imports: [
     CommonModule,
     HttpClientModule
  ],
  exports:[
    AboutusComponent
]
})
export class AboutUsmodule { }
