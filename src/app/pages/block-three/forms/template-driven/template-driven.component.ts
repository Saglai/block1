import { Component, ElementRef, OnInit, TemplateRef } from '@angular/core';
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
  contactForm!: contactForm;

  ngOnInit(): void {
    this.setDefaults();
  }

  onSubmit(): void {
    console.log(this.contactForm)
  }

  setDefaults(): void {
    this.contactForm = {
      firstName: 'Saglai',
      lastName: 'Sandanchik',
      email: 'power1800w@gmail.com',
      phone: '777-888',
      gender: 'Female',
      isMarried: false,
      country: '2',
      address: {
        city: 'Kyzyl',
        street: 'Kochetova'
      }
    }
  }

  reset(form: NgForm): void {
    form.resetForm();
  }
}
