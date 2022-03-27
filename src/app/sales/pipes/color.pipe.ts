import { Pipe, PipeTransform } from "@angular/core";
import { Color } from '../interfaces/sales.interfaces';

@Pipe({
    name:'color'
})
export class color implements PipeTransform {
    transform(color:Color):string {
 
        switch (color) {
            case 0:
                return 'red'
                break;
            case 1:
                return 'black'
                break;
            case 2:
                return 'blue'
                break;
            case 3:
                return 'green'
                break;        
            default:
                return 'color not valid'
                break;
        }
        
    }
}