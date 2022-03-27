import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'flies'
})
export class flies implements PipeTransform {
    transform(flies:boolean = true):string {
 
        return flies ? 'Flies' : "Can't fly";
        
    }
}