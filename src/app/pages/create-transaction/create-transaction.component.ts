import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlockchainService, IWalletKey } from '../../services/blockchain.service';
import { Transaction } from 'SavjeeCoin/src/blockchain';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {
  //adding attributes
  //this variable will store transaction details (from, to, amount)
  public newTx = new Transaction();
  //WalletKey of the user that wants to make a transaction
  //If you want to make a transaction you have to sign it with your private key
  public ownWalletKey: IWalletKey;

  //initialize variables
  constructor(private blockchainService: BlockchainService, private router: Router) {
    this.newTx = new Transaction();
    //pick first key in array
    this.ownWalletKey = blockchainService.walletKeys[0];
  }

  ngOnInit() {
  }

  createTransaction() {
    const newTx = this.newTx;

    // Set the FROM address and sign the transaction
    newTx.fromAddress = this.ownWalletKey.publicKey;
    //we hav4e to sign it with the key object we generate
    //signTransaction is a method created in the last video
    newTx.signTransaction(this.ownWalletKey.keyObj);

    try {
      //submitted the new transaction
      this.blockchainService.addTransaction(this.newTx);
    } catch (e) {
      alert(e);
      return;
    }

    this.router.navigate(['/new/transaction/pending', { addedTx: true }]);
    //reset the attribute to clear the ui
    this.newTx = new Transaction();
  }
}
