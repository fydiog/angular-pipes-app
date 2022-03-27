import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'customUppercase'
})
export class customUppercasePipe implements PipeTransform {
    transform(string:string, toUppercase:boolean = true):string {
 
        return toUppercase 
        ? string.toUpperCase() 
        : string.toLowerCase();
        
    }
}