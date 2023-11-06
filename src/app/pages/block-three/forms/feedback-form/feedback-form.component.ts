import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { requiredNumber } from '../custom-validator';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  public feedbackForm = this.formBuilder.group({
    fullName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(256)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(256)]],
    phone: ['', Validators.required, requiredNumber],
    comment: ['', Validators.maxLength(256)],
    consent: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

  public onSubmit(): void {
    console.log(this.feedbackForm.value);
  }

  get isConsentDisable() {
    const name = this.feedbackForm.get('fullName')?.valid;
    const email = this.feedbackForm.get('email')?.valid;
    const phone = this.feedbackForm.get('phone')?.valid;

    return !(name && email && phone);
  }

  get fullName() {
    return this.feedbackForm.get('fullName');
  }

  get email() {
    return this.feedbackForm.get('email');
  }

  get phone() {
    return this.feedbackForm.get('phone');
  }

  get comment() {
    return this.feedbackForm.get('comment');
  }

  get consent() {
    return this.feedbackForm.get('consent');
  }
}
