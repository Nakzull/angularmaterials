import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

public cars: Array<Car>;

  constructor() {
    this.cars = [
      {nr: 1, model: "Citroën C3", amount: 2.268, changeInPercent: "-27%"},
      {nr: 2, model: "Peugeot 208	", amount: 2.107, changeInPercent: "-24%"},
      {nr: 3, model: "Kia Ceed/Xceed	", amount: 1.750, changeInPercent: "-1%"},
      {nr: 4, model: "Ford Kuga	", amount: 1.619, changeInPercent: "	-53%"},
      {nr: 5, model: "Toyota Yaris	", amount: 1.515, changeInPercent: "-45%"},
      {nr: 6, model: "VW T-Roc	", amount: 1.435, changeInPercent: "-7%"},
      {nr: 7, model: "Mercedes-Benz C-klasse", amount: 1.361, changeInPercent: "	-9%"},
      {nr: 8, model: "Hyundai i10	", amount: 1.300	, changeInPercent: "	-26%"},
      {nr: 9, model: "Nissan Qashqai	", amount: 1.246, changeInPercent: "	-42%"},
      {nr: 10, model: "Toyota Yaris Cross	", amount: 1.114, changeInPercent: "100%"}
    ]
   }

   GetObsList(): Observable<Car[]>{
    return of(this.cars);
   }

   GetList(): Array<Car>{
    return this.cars;
   }
   
   CarExistByNr(nr: number | null): boolean {
    if (nr === null) {
      return false;
    }
    return this.cars.some((car) => car.nr === nr);
  }

   AddCar(car: Car): void {
    this.cars.push(car);
  }

  UpdateCar(car: Car): void {
    const index = this.cars.findIndex((c) => c.nr === car.nr);
    this.cars[index] = car;
  }
}
