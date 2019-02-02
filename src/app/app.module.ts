import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { MainModule } from './main/main.module';
import { FooterModule } from './footer/footer.module';
import { StudentsModule } from './students/students.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HeaderModule,
    MainModule,
    FooterModule,
    BrowserModule,
    StudentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
