import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './login-user/login-user.component';
import { EspaceUtilisateurComponent } from './espace-utilisateur/espace-utilisateur.component';

const routes: Routes = [

  {path: "Keiken_Test/authentification", component : LoginUserComponent},
  {path: "Keiken_Test/authentification/signin", component : LoginUserComponent},
  { path: "", redirectTo: "Keiken_Test/authentification", pathMatch: "full"},


  {path: "Keiken_Test/utilisateurs/utilisateur/:id", component : EspaceUtilisateurComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
