import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { country } from 'src/app/models/country.model';
import { requiredNumber } from '../custom-validator';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  form = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [requiredNumber]),
    gender: new FormControl('', [Validators.required]),
    isMarried: new FormControl<boolean>(false, [Validators.required]),
    address: new FormGroup({
      country: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required])
    })
  });

  countries: country[] = [
    {id: "1", name: "India"},
    {id: '2', name: 'Russia'},
    {id: '3', name: 'England'}
  ];

  ngOnInit(): void {
    this.form.statusChanges.subscribe(newStatus => {
      console.log(newStatus,'form status changes');
    })

    this.form.get('firstName')?.statusChanges.subscribe(newStatus => {
      console.log(newStatus, 'first name status change');
    })

    this.form.get('firstName')?.valueChanges.subscribe(newValue => {
      console.log(newValue, 'newValue firstName');
    })
  }

  onSubmit(): void {
    console.log(this.form.value)
  }

  reset(): void {
    this.form.reset();
  }

  setDefaults(): void {
    let contactForm = {
      firstName: 'Saglai',
      lastName: 'San',
      email: 'power1800w@gmail.com',
      phone:  '89235416635',
      gender: 'Female',
      isMarried: false,
      address: {
        country: '2',
        city: 'Kyzyl',
        street: 'Koch'
      }
    }

    this.form.setValue(contactForm);
  }

  patchNames(): void {
    let names = {
      firstName: 'Sam',
      lastName: 'Smith'
    }
    this.form.patchValue(names);
  }

  changeAddress(): void {
    let address= {
      city: "Bangalore",
      street: "Brigade Road",
      country: '3'
    };

    this.form.get('address')?.setValue(address);
  }

  setEmail(): void {
    this.form.get('email')?.setValue('saglai@gmail.com')
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get email() {
    return this.form.get('email');
  }

  get phone() {
    return this.form.get('phone');
  }

  get gender() {
    return this.form.get('gender');
  }

  get isMarried() {
    return this.form.get('isMarried');
  }

  get country() {
    return this.form.get('address')?.get('country');
  }

  get city() {
    return this.form.get('address')?.get('city');
  }

  get street() {
    return this.form.get('address')?.get('street');
  }
}
