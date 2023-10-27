import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'customUppercase'
})
export class CustomUpperCase implements PipeTransform {
    transform(value: any, ...args: any[]): string {
        return value.toUpperCase();
    }
}