import { AbstractControl, ValidationErrors } from "@angular/forms";

export function requiredPhoneChar(control: AbstractControl): ValidationErrors | null {
    const firstCharStr = control.value[0];
    const restCharStr = control.value.slice(1);
    const restCharArr = restCharStr.split('');
    
    if (control.value === '') {
        return {requiredPhoneChar: true, requiredValue: 'Phone number is required'}
    }

    if (isNaN(restCharStr)) {
        return {requiredPhoneChar: true, requiredValue: 'Number is required'}
    }

    if (isNaN(firstCharStr) && firstCharStr !== '+') {
        return {requiredPhoneChar: true, requiredValue: 'The phone number should start with 8 or +7'}
    }

    if (!isNaN(firstCharStr) && +firstCharStr !== 8) {
        return {requiredPhoneChar: true, requiredValue: 'The phone number should start with 8 or +7'}
    }

    if (restCharArr.length < 10 || restCharArr.length > 11) {
        return {requiredPhoneChar: true, requiredValue: 'Phone should be min 11, max 12'}
    }

    return null;
}