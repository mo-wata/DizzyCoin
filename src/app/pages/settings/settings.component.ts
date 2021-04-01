import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../../services/blockchain.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public blockchain;


  constructor(private blockchainService: BlockchainService) {
    //ask the blockchain service for the blockchain instance
    this.blockchain = blockchainService.blockchainInstance;
  }

  ngOnInit() {
  }
}
