import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private data = [
    {"id": 1, "name": "University Cafeteria"},
    {"id": 2, "name": "Grocery Store"},
    {"id": 3, "name": "Laundromat"},
    {"id": 4, "name": "Car Wash"},
    {"id": 5, "name": "Fairgrounds"}
  ]

  constructor() { }

  locations(): Observable<Location[]> {
    return of(this.data);
  }
}
