import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionCreateComponent } from './create/transaction-create.component';
import { TransactionComponent } from './transaction.component';
import { TransactionViewComponent } from './view/transaction-view.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionComponent
  },
  {
    path: 'create',
    component: TransactionCreateComponent,
  },
  {
    path: 'view/:id',
    component: TransactionViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
