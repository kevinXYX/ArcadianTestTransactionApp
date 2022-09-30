import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ApiUrls } from "../constants/api-urls";
import { Transaction } from "../models/transaction";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TransactionService {
  private apiUrls: ApiUrls
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {
    this.apiUrls = new ApiUrls();
  }

  public getTransactions(): Observable<Transaction[]> {
    return this.http.get<Array<Transaction>>(this.apiUrls.GetTransactionUrl)
      .pipe(
        catchError(this.handleError<Transaction[]>('getTransactions', []))
      );
  }

  public getTransactionById(transactionId: number): Observable<Transaction> {
    return this.http.get<Transaction>(this.apiUrls.GetTransactionById.replace('$id', transactionId.toString()))
      .pipe(
        catchError(this.handleError<Transaction>('getTransactionById', <Transaction>{}))
      );
  }

  public createTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.apiUrls.CreateTransactionUrl, transaction, this.httpOptions)
      .pipe(
        catchError(this.handleError<Transaction>('createTransaction', transaction))
      );
  }

  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }
}
