import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Transaction } from '../../models/transaction';
import { TransactionService } from '../../services/transaction-service';

@Component({
  selector: 'transaction-view-component',
  templateUrl: './transaction-view.component.html'
})
export class TransactionViewComponent {
  transaction: Transaction = <Transaction>{};
  constructor(private route: ActivatedRoute, private router: Router, private transactionService: TransactionService) {
    this.route.params.subscribe(params => {
      this.transactionService.getTransactionById(params.id).subscribe({
        next: (transaction: Transaction) => { this.transaction = transaction },
        error: (error: any) => { this.router.navigate(['/']) },
        complete: () => { }
      })
    });
  }
}
