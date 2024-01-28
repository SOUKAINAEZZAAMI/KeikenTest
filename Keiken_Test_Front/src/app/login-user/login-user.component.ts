import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { user } from '../Model/user.model';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit{


  ngOnInit(): void {
    const container: HTMLElement | null = document.getElementById('container');
    const registerBtn: HTMLElement | null = document.getElementById('register');
    const loginBtn: HTMLElement | null = document.getElementById('login');

    if (container && registerBtn && loginBtn) {
      registerBtn.addEventListener('click', () => {
        container.classList.add("active");
      });

      loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
      });
    }
  }

  constructor(private authService: AuthService,private http:HttpClient,private router:Router){}
  ///////////////////////////////////////////////////////////////////////////////////////////////////////
  url: string = "http://localhost:8080/Keiken_test/user";
  user: any = {};
  iduser?:number;
 VerifierLogin(): void {
   const queryParams = `?nom=${this.user.nom}&pass=${this.user.password}`;
   const verificationObservable: Observable<any> = this.http.get<any>(this.url + queryParams);

   verificationObservable.subscribe(
     (isValidUser) => {
       if (isValidUser) {
        // console.log("ID: "+isValidUser.id);
        this.router.navigate(['/Keiken_Test/utilisateurs/utilisateur', isValidUser.id]);
        this.user= isValidUser.id

       } else {
         alert('Login ou mot de passe incorrect !');
       }
     },
     (error) => {
       console.error('Erreur lors de la vérification de connexion', error);
       alert('Une erreur s\'est produite lors de la vérification de connexion.');
     }
   );
 }
  ///////////////////////////////////////////////////////
  apiURL: string = 'http://localhost:8080/Keiken_test/addUser';

  ajouterutilisateur(user: any): Observable<any> {
    return this.http.post(this.apiURL, user);
  }

 
 
  addCitoyen() {
      this.ajouterutilisateur(this.user).subscribe(
        response => {
          console.log(response);
          alert("Inscription réussie, veuillez vous connecter 🌟");
          this.router.navigate(['/Keiken_Test/authentification/signin']);
          // Redirect or perform other actions on success
        },
        error => {
          console.error(error);
          alert("Compte existe Deja");

          // Display an error message or perform other actions on failure
        }
      );
    
  }
  
    

}
