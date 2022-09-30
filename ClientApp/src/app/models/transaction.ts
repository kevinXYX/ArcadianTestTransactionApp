export class Transaction {
  transactionId: number;
  transactionName: string;
  transactionDate: Date;
  transactionCost: number;

  constructor() {
    this.transactionId = 0;
    this.transactionName = '';
    this.transactionDate = new Date();
    this.transactionCost = 0;
  }
}
