import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { UncommonComponent } from './pages/uncommon/uncommon.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { customUppercasePipe } from './pipes/customUppercase.pipe';
import { flies } from './pipes/flies.pipe';
import { color } from './pipes/color.pipe';


@NgModule({
  declarations: [NumbersComponent, BasicsComponent, UncommonComponent, OrderComponent, customUppercasePipe, flies, color],
  exports: [
    NumbersComponent, BasicsComponent, UncommonComponent, OrderComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SalesModule { }
