import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../../models/transaction';
import { TransactionService } from '../../services/transaction-service';

@Component({
  selector: 'transaction-create-component',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.css']
})
export class TransactionCreateComponent {
  transaction: Transaction
  validationError: boolean = false;
  constructor(private router: Router, private transactionService: TransactionService) {
    this.transaction = new Transaction();
  }

  createTransaction() {
    if (this.transaction && this.transaction.transactionName && this.transaction.transactionCost) {
      this.transactionService.createTransaction(this.transaction).subscribe(transaction => {
        if (transaction) {
          this.router.navigate(['/']);
        }
      });
    }
    else {
      this.validationError = true;
    }
  }
}
