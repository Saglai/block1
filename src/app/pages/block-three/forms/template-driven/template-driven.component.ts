import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { contactForm } from 'src/app/models/contact-form.model';
import { country } from 'src/app/models/country.model';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  countries: country[] = [
    {id: "1", name: "India"},
    {id: '2', name: 'Russia'},
    {id: '3', name: 'England'}
  ];

  contactForm: contactForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    isMarried: false,
    gender: '',
    country: '2',
    address: {
      city: '',
      street: ''
    }
  };

  @ViewChild('templateForm') form!: NgForm;

  ngOnInit(): void {
    setTimeout(() => {
      this.form.control.get('firstName')?.valueChanges.subscribe(newValue => {
        console.log(newValue)
      })

      this.form.control.get('firstName')?.valueChanges.subscribe(newStatus => {
        console.log(newStatus);
      })
    })
  }

  onSubmit(): void {
    console.log(this.contactForm, this.form.valid)
  }

  setDefaults(): void {
    const form = {
      firstName: 'Saglai',
      lastName: 'Sandanchik',
      email: 'power1800w@gmail.com',
      phone: '777-888',
      isMarried: false,
      gender: 'Female',
      country: '2',
      address: {
        city: 'Kyzyl',
        street: 'Kochetova'
      }
    }

    this.form.control.setValue(form)
  }

  reset(): void {
    this.form.resetForm();
  }
}
