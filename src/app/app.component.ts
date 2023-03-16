import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './car';
import { CarService } from './car.service';
import {MatTable} from '@angular/material/table';
import {FormControl, Validators} from '@angular/forms';
import { MorsePipe } from './morse.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularmaterials';

  text: string = "fed abe";
  
  car$: Observable<Car> | undefined;
  cars$: Observable<Car[]>;

  constructor(public carService: CarService) {
    this.cars$ = carService.GetObsList();
  }
  displayedColumns: string[] = ['Nr', 'Model', 'Amount', 'Change in %'];
  
  
  @ViewChild(MatTable) table!: MatTable<Car>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * this.carService.GetList().length);
    this.carService.GetList().push(this.carService.GetList()[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.carService.GetList().pop();
    this.table.renderRows();
  }

  checkLength() {
    return this.carService.GetList().length == 0;
  }

  number = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  model = new FormControl('', [Validators.required]);
  amount = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  change = new FormControl('', [Validators.required]);

  getNumberErrorMessage() {
    if (this.number.hasError('required')) {
      return 'You must enter a value';
    }

    return this.number.hasError('number') ? 'Not a valid number' : '';
  }

  getModelErrorMessage() {
    if (this.model.hasError('required')) {
      return 'You must enter a value';
    }

    return this.number.hasError('model') ? 'Not a valid model name' : '';
  }

  getAmountErrorMessage() {
    if (this.number.hasError('required')) {
      return 'You must enter a value';
    }

    return this.number.hasError('amount') ? 'Not a valid number' : '';
  }

  getChangeErrorMessage() {
    if (this.number.hasError('required')) {
      return 'You must enter a value';
    }

    return this.number.hasError('change') ? 'Not a valid number' : '';
  }
}
