import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: "login", component: LoginComponent}, 
  {path: "register", component: RegisterComponent}, 
  {path: "main", component: MainComponent}, 
  {path: "", pathMatch: "full", redirectTo: "main"}, 
  {path: "**", component: Error404Component}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
