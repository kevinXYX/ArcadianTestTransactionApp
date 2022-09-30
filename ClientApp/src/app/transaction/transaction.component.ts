import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';
import { TransactionService } from '../services/transaction-service';

@Component({
  selector: 'transaction-component',
  templateUrl: './transaction.component.html'
})
export class TransactionComponent {
  transactions: Transaction[] = [];
  constructor(private router: Router, private transactionService: TransactionService) {
    this.getTransactions();
   }

  createTransaction() {
    this.router.navigate(['/create']);
  }
  viewTransaction(transactionId: Number) {
    this.router.navigate([`/view/${transactionId}`]);
  }
  getTransactions() {
    this.transactionService.getTransactions().subscribe(transactions => this.transactions = transactions);
  }
}
