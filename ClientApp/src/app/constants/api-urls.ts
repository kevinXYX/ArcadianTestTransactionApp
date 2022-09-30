import { isDevMode } from "@angular/core";
import { environment } from "../../environments/environment.prod";
import { environment as environmentProd } from "../../environments/environment.prod";

export class ApiUrls {
  private BaseUrl = environment.API_URL;
  public GetTransactionUrl: string = `${this.BaseUrl}/api/transactions`;
  public GetTransactionById: string = `${this.BaseUrl}/api/transaction/$id`;
  public CreateTransactionUrl: string = `${this.BaseUrl}/api/transaction/create`;

  constructor() {
    if (isDevMode()) {
      this.BaseUrl = environmentProd.API_URL
    }
  }
}
