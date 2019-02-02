import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import {RouterModule, Routes} from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {path: 'Home',component: MainComponent},
  {path: 'AboutUs', component: AboutusComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule {}
