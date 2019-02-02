import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'Home',component: MainComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule {}
