import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map, mergeMap, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InformationWeatherService {

  weatherData: any;
  messages=[{role:"system", content:"You are a helpful assistant."}];
  constructor(private httpclient:HttpClient) { }


  getWeatherConditions(latitude: number, longitude: number): Observable<any> {
    const apiKey = 'b99ef17a3cae12c15801f8c08eb530fd';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  
    return this.httpclient.get(apiUrl).pipe(
      switchMap((data: any) => {
        const conditions = `Quelles sont cinq activités à faire dans ces conditions, chaque description en 6 mots ou plus, dans l'entête de la réponse mettez les conditions données : La température est : ${data.main.temp}, la description du météo : ${data.weather[0].description}`;
        console.log(data);
        this.messages.push({ role: 'user', content: conditions });
        return this.handle().pipe(
          map((result) => {
            // Vous pouvez retourner le résultat de handle() ou toute autre chose dont vous avez besoin
            return { data, result };
          })
        );
      })
    );
  }
 /* getWeatherConditions(latitude: number, longitude: number): Observable<any> {
    const apiKey = 'b99ef17a3cae12c15801f8c08eb530fd';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    return this.httpclient.get(apiUrl).pipe(
      map((data: any) => {
        const conditions = `Quelles sont cinq activités à faire dans ces conditions, chaque description en 6 mots ou plus, dans l'entête de la réponse mettez les conditions données : La température est : ${data.main.temp}, la description du météo : ${data.weather[0].description}`;
        console.log(data);
        this.messages.push({ role: 'user', content: conditions });
        this.handle();
        this.weatherData = data;
        return data; // Retournez les données météorologiques
      })
    );
  }*/

  //////////////////////Chatgpt//////////////////////
 
  public result:any;

  handle(): Observable<any> {
    let url = 'https://api.openai.com/v1/chat/completions';
    let httpHeaders = new HttpHeaders().set("Authorization", "Bearer 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");
    let payload = {
      model: "gpt-3.5-turbo",
      messages: this.messages
    };
  
    return this.httpclient.post(url, payload, { headers: httpHeaders }) .pipe(
      tap((resp) => {
        this.result = resp;
      })
    );
  }
 /* handle() {
    let url = 'https://api.openai.com/v1/chat/completions'; 
    let httpHeaders = new HttpHeaders().set("Authorization","Bearer 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"); // Remplacez "VOTRE_TOKEN" par votre véritable jeton
    let payload = {
      model: "gpt-3.5-turbo",
      messages: this.messages
    };
  
    this.httpclient.post(url, payload, { headers: httpHeaders })
      .subscribe({
        next: (resp) => {
          this.result = resp;
          //console.log(this.result);
        },
        error: (err) => {
          // Gestion des erreurs
          console.error(err);
        }
      });
  }*/
  /////////////////
 
  

}