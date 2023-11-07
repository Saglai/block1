import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { requiredNumber } from '../custom-validator';
import { FeedbackForm } from 'src/app/models/form.interface';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {
  public feedbackForm = this.formBuilder.group({
    fullName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(256)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(256)]],
    phone: ['', Validators.required, requiredNumber],
    comment: ['', Validators.maxLength(256)],
    consent: [false, Validators.required]
  })
  private formValues!: Required<FeedbackForm>;
  public isFormReady = false;

  constructor(private formBuilder: FormBuilder) {}

  public onSubmit(): void {
    this.formValues = this.feedbackForm.value as Required<FeedbackForm>;
    console.log(this.formValues);
    this.fullName?.markAsPristine();
    
    this.feedbackForm.reset();
    this.isFormReady = true;
  }

  get isConsentDisable() {
    const name = this.feedbackForm.get('fullName')?.valid;
    const email = this.feedbackForm.get('email')?.valid;
    const phone = this.feedbackForm.get('phone')?.valid;
    const isFormFilled = name && email && phone;

    if (!isFormFilled && this.isConsentTrue) {
      this.consent?.setValue(false);
    }

    return !isFormFilled;
  }

  get isConsentTrue() {
    if (this.consent?.value === true) {
      return true;
    }

    return false;
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
