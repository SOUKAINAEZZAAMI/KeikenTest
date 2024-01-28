import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { user } from '../Model/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   url: string = "http://localhost:8080/Keiken_test/user";
   user: any = {};
   public client!:user;

  constructor(private http: HttpClient,private router:Router) {}

  VerifierLogin(): void {
    const queryParams = `?nom=${this.user.nom}&pass=${this.user.password}`;
    const verificationObservable: Observable<any> = this.http.get<any>(this.url + queryParams);

    verificationObservable.subscribe(
      (isValidUser) => {
        if (isValidUser) {
          console.log("ha howa : ");
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
  
}
  
    
 
