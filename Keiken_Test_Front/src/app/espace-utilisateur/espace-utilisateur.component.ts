import { Component, OnInit } from '@angular/core';
import { LocalisationService } from '../Service/localisation.service';
import { InformationWeatherService } from '../Service/information-weather.service';
import { propGPT } from '../Model/propGPT.model';
import { PropGPTService } from '../Service/prop-gpt.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-espace-utilisateur',
  templateUrl: './espace-utilisateur.component.html',
  styleUrls: ['./espace-utilisateur.component.css']
})
export class EspaceUtilisateurComponent implements OnInit {

  
  constructor(private http: HttpClient, private route: ActivatedRoute,private locationService: LocalisationService,public Infoweather:InformationWeatherService,public Propgptservice:PropGPTService) {}
  ngOnInit() {
    this.recupALLpropGPT();
    

  }

  getPosition() {
    this.locationService.getPosition().then(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const userId = this.route.snapshot.params['userId'];
         console.log("ooooo"+userId)
        this.Infoweather.getWeatherConditions(latitude, longitude).subscribe(
          (response: any) => {
            // Utilisez les données météorologiques ici
            const weatherData = response.data;
            const result = response.result;
           
            const currentDate: Date = new Date();
            const proposition: propGPT = {
              emplacement: weatherData.name,
              date:currentDate.toLocaleString(),
              conditionsMeteo: weatherData.main.temp + " " + weatherData.weather[0].description,
              proposition: result.choices[0].message.content
            };
            this.Propgptservice.postProposition(proposition,this.route.snapshot.params['id'])
            this.recupALLpropGPT();

          },
          (error) => {
            console.error('Erreur lors de la récupération des données météorologiques :', error);
          }
        );
        
     // console.log("HHHHH"+this.Infoweather.result)
        //code pour stoker les donner
      //console.log("ok"+this.Infoweather.getWeatherConditions(latitude, longitude));
      //console.log(this.Infoweather.weatherData.main.temp+""+this.Infoweather.weatherData[0].description)
      /* console.log(this.Infoweather.weatherData.name)
       console.log(this.Infoweather.result.choices)
       const timezone = new Date().getTimezoneOffset();
       console.log('Fuseau horaire actuel:', timezone);
       console.log(timezone)*/
      
      },
      (error) => {
        // Gestion des erreurs
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert("Vous avez refusé la demande de géolocalisation. Pour utiliser cette fonctionnalité, veuillez autoriser la géolocalisation dans les paramètres de votre navigateur.");
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Impossible de déterminer votre emplacement actuel. Veuillez réessayer plus tard.");
            break;
          case error.TIMEOUT:
            alert("La demande de géolocalisation a expiré. Veuillez réessayer.");
            break;
          case error.UNKNOWN_ERROR:
            alert("Une erreur inconnue s'est produite lors de la demande de géolocalisation. Veuillez réessayer.");
            break;
        }
      }
    );
  }

  onAutresActivitesClick() {
    this.Infoweather.messages.push({ role: "user", content: "autres activités,dans l'entete de la reponse mettez les conditions données" });
  
   this.getPosition();}
  //////////////////////////////
  propositions!: propGPT[];

  
  recupALLpropGPT() {

    this.Propgptservice.recupALLProposition(this.route.snapshot.params['id']).subscribe(
      (data) => {
        this.propositions = data;
      },
      (error) => {
        console.error(error);
        console.error(error);
        this.propositions = []; // Réinitialisez la liste des propositions à vide
        this.propositions.push({ // Ajoutez une proposition avec le message d'erreur
          date: 'No data',
          emplacement: 'No data',
          conditionsMeteo: 'No data',
          proposition: 'Echec de la connexion avec la base de données'
        });
      
      }
    );
  }

  p: number = 1; // Page courante
  pageSize: number = 5; // Nombre d'éléments par page

  pageChanged(event: any): void {
    this.p = event;
  }
}
