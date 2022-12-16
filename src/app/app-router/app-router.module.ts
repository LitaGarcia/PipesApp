import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonsComponent } from '../solds/pages/commons/commons.component';
import { NumbersComponent } from '../solds/pages/numbers/numbers.component';
import { NotCommonsComponent } from '../solds/pages/not-commons/not-commons.component';
import { OrderComponent } from '../solds/pages/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: CommonsComponent,
    pathMatch: 'full',
  },
  {
    path: 'numbers',
    component: NumbersComponent,
  },
  {
    path: 'not-commons',
    component: NotCommonsComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
