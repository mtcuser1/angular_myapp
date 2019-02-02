import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus.component';



@NgModule({
  declarations: [AboutusComponent],
  imports: [
     CommonModule
  ],
  exports:[
    AboutusComponent
]
})
export class AboutUsmodule { }
