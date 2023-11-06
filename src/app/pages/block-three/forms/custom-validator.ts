import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";

export function requiredNumber(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const number = control.value;
    
    if (isNaN(number)) {
        return of({requiredNumber: true})
    }

    return of(null);
}