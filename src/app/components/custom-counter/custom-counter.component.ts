import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Input } from '@angular/core';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomCounterComponent),
    multi: true
  }]
})
export class CustomCounterComponent implements ControlValueAccessor {
  private _counter = 0;
  private _onChange(counter: number) {}
  private _onTouch() {}
  private isTouch = false;

  @Input() 
  increment: number = 1;

  get counter() {
    return this._counter;
  }

  set counter(value) {
    this._counter = value;
  }

  add(): void {
    this.counter += this.increment;
    this._onChange(this.counter);
    this.markAsTouched();
  }

  remove(): void {
    this.counter-= this.increment;
    this._onChange(this.counter);
    this.markAsTouched();
  }

  writeValue(value: number): void {
    this.counter = value;
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
