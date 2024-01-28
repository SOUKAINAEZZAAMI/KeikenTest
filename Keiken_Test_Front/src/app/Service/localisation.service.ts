import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalisationService {

  getPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(error)
      );
    });
  }
}
