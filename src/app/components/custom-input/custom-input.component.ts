import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomInputComponent),
    multi: true
  }]
})
export class CustomInputComponent implements ControlValueAccessor {
  private _value = '';
  private _onChange(_: any) {};
  private _onTouch() {};
  private isTouch = false;

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this._onChange(val);
    this.markAsTouched();
  }

  writeValue(name: string): void {
    this.value = name;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }

  markAsTouched() {
    if (!this.isTouch) {
      this._onTouch();
      this.isTouch = true;
    }
  }
}
