import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './car';
import { CarService } from './car.service';
import { MatTable } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MorsePipe } from './morse.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularmaterials';

  text: string = "";

  car$: Observable<Car> | undefined;
  cars$: Observable<Car[]>;

  carForm: FormGroup = new FormGroup({
    nr: new FormControl(),
    model: new FormControl(),
    amount: new FormControl(),
    changeInPercent: new FormControl(),
  });

  morseForm: FormGroup = new FormGroup({
    text: new FormControl()
  });

  onSubmit(): void {
    // Create a new car object
    const car: Car = {
      nr: this.carForm.value.nr,
      model: this.carForm.value.model,
      amount: this.carForm.value.amount,
      changeInPercent: this.carForm.value.changeInPercent,
    };

    // If carForm is invalid, do nothing
    if (this.carForm.invalid) {
      return;
    }

    // If carForm is valid, add or update car
    if (!this.carService.CarExistByNr(car.nr)) {
      this.carService.AddCar(car);
    } else {
      this.carService.UpdateCar(car);
    }
  }

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

  Morse() {
    this.text = this.morseForm.value.text;
  }
}
