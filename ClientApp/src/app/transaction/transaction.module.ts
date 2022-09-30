import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';
import { TransactionCreateComponent } from './create/transaction-create.component';
import { TransactionViewComponent } from './view/transaction-view.component';
import { TransactionService } from '../services/transaction-service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TransactionComponent, TransactionCreateComponent, TransactionViewComponent],
  imports: [
    BrowserModule,
    CommonModule,
    TransactionRoutingModule,
    FormsModule 
  ],
  providers: [TransactionService]
})
export class TransactionModule { }
