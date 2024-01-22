import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DesviosListComponent } from './desvios/desvios-list/desvios-list.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'desvios-list', component: DesviosListComponent },
];
