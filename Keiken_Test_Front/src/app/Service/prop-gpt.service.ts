import { Injectable } from '@angular/core';
import { propGPT } from '../Model/propGPT.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropGPTService {



constructor(private http: HttpClient, private route: ActivatedRoute) { }

url: string = "http://localhost:8080/Keiken_test/utilisateurs/utilisateur/{id}/propositions";
proposition?: propGPT;

postProposition(proposition: propGPT,id:number) {
  const apiUrl = this.url.replace('{id}', id.toString());

  this.http.post(apiUrl, proposition).subscribe(
    (response) => {
      console.log('Proposition postée avec succès :', response);
    },
    (error) => {
      console.error('Erreur lors de la tentative de poster la proposition :', error);
    }
  );
}

recupALLProposition(id: number): Observable<propGPT[]> {
  const apiUrl = this.url.replace('{id}', id.toString());

  return this.http.get<propGPT[]>(apiUrl);
}




}
