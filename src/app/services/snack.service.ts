import { Injectable } from '@angular/core';
import { Snack } from '../models/snack';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  private data = [
    { "id": 1, "name": "Potato Chips", "category": "food", "price": 0.75 },
    { "id": 2, "name": "Sunflower Seeds", "category": "food", "price": 1.00 },
    { "id": 3, "name": "Cookies", "category": "food", "price": 2.50 },
    { "id": 4, "name": "Peanuts", "category": "food", "price": 1.25 },
    { "id": 5, "name": "Popcorn", "category": "food", "price": 0.99 },
    { "id": 6, "name": "Cola", "category": "drink", "price": 1.50 },
    { "id": 7, "name": "Orange Juice", "category": "drink", "price": 1.70 },
    { "id": 8, "name": "Iced Tea", "category": "drink", "price": 3.25 },
    { "id": 9, "name": "Water", "category": "drink", "price": 1.25 },
    { "id": 10, "name": "Iced Coffee", "category": "drink", "price": 5.00 }
  ];

  constructor() { }

  snacks(): Observable<Snack[]> {
    return of(this.data);
  }
}
