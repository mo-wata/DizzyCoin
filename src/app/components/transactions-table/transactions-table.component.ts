import { Component, OnInit, Input } from '@angular/core';
import { BlockchainService } from '../../services/blockchain.service';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent implements OnInit {

  //this component will need a list of transactions to visualize
  @Input() public transactions = [];

  constructor(public blockchainService: BlockchainService) { }

  ngOnInit() {
  }
}
