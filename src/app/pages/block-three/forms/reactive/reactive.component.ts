import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { country } from 'src/app/models/country.model';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  form = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(8)]),
    lastName: new FormControl(),
    email: new FormControl(),
    phone: new FormControl({value: '222-888', disabled: true}),
    gender: new FormControl(),
    isMarried: new FormControl(false),
    address: new FormGroup({
      country: new FormControl(),
      city: new FormControl(),
      street: new FormControl()
    })
  });

  countries: country[] = [
    {id: "1", name: "India"},
    {id: '2', name: 'Russia'},
    {id: '3', name: 'England'}
  ];

  onSubmit(): void {
    console.log(this.form.value)
  }

  reset(): void {
  }

  setDefaults(): void {
  }
}
