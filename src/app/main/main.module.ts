import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { StudentsComponent } from '../students/students.component';
import { StudentsModule } from '../students/students.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    StudentsModule
],
  exports:[
MainComponent

  ]
})
export class MainModule { }
