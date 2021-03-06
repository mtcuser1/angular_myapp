import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { MainModule } from './main/main.module';
import { FooterModule } from './footer/footer.module';
import { StudentsModule } from './students/students.module';
import { StudentsComponent } from './students/students.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AboutUsmodule } from './aboutus/aboutus.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HeaderModule,
    MainModule,
    FooterModule,
    BrowserModule,
    StudentsModule,
    AppRoutingModule,
    AboutUsmodule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
