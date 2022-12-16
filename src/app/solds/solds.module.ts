import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { CommonsComponent } from './pages/commons/commons.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';

@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonsComponent,
    CommonsComponent,
    OrderComponent,
    MayusculasPipe,
    VuelaPipe,
    OrdenarPipe,
  ],
  exports: [
    NumbersComponent,
    NotCommonsComponent,
    CommonsComponent,
    OrderComponent,
  ],
  imports: [CommonModule, PrimeNgModule],
})
export class SoldsModule {}
