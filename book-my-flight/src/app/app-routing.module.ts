import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateFlightComponent } from './component/generate-flight/generate-flight.component';
import { LoginComponent } from './component/login/login.component';
import { SearchFlightComponent } from './component/search-flight/search-flight.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'generate', component: GenerateFlightComponent},
  {path: 'search', component: SearchFlightComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
