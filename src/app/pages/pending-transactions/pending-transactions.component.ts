import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlockchainService } from '../../services/blockchain.service';

@Component({
  selector: 'app-pending-transactions',
  templateUrl: './pending-transactions.component.html',
  styleUrls: ['./pending-transactions.component.scss']
})
export class PendingTransactionsComponent implements OnInit {
  // Here, we will add an attribute and say that this class
  // We will say that this class has some pending transactions
  // We will initialize it as being an empty array
  public pendingTransactions = [];
  public miningInProgress = false;
  public justAddedTx = false;

  // Request Angular to inject our BlockchainService
  constructor(private blockchainService: BlockchainService, private router: Router, private route: ActivatedRoute) {
    // We need to populate the array of pendingTransactions
    this.pendingTransactions = blockchainService.getPendingTransactions();
  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('addedTx')) {
      this.justAddedTx = true;

      setTimeout(() => {
        this.justAddedTx = false;
      }, 4000);
    }
  }

  minePendingTransactions() {
    this.miningInProgress = true;
    // Call blockchain service and execute exact same method
    this.blockchainService.minePendingTransactions();
    this.miningInProgress = false;
    this.router.navigate(['/']);
  }
}
