import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { country } from 'src/app/models/country.model';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      gender: [''],
      isMarried: [false],
      address: this.formBuilder.group({
        country: [''],
        city: [''],
        street: ['']
      })
    })
  }

  countries: country[] = [
    {id: "1", name: "India"},
    {id: '2', name: 'Russia'},
    {id: '3', name: 'England'}
  ];

  onSubmit(): void {
    console.log(this.form.value)
  }
}
