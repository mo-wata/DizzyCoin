import { Component, OnInit, Input } from '@angular/core';
import { BlockchainService } from '../../services/blockchain.service';
@Component({
  selector: 'app-blockchain-viewer',
  templateUrl: './blockchain-viewer.component.html',
  styleUrls: ['./blockchain-viewer.component.scss']
})
export class BlockchainViewerComponent implements OnInit {

  //to store blocks
  public blocks = [];
  public selectedBlock = null;

  //private parameter: of type BlockchainService
  constructor(private blockchainService: BlockchainService) {
    //load all blocks from blockchain into blocks array
    this.blocks = blockchainService.blockchainInstance.chain;
    //whenever this component loads, it will make the first block on our chain active
    this.selectedBlock = this.blocks[0];
    console.log(this.blocks);
  }

  ngOnInit() {
  }

  showTransactions(block) {
    console.log(block);
    //if the user clicks on this block
    //we will set the selected block to the block that we received
    //here in the paramter
    this.selectedBlock = block;
    return false;
  }

  blockHasTx(block) {
    return block.transactions.length > 0;
  }

  selectedBlockHasTx() {
    return this.blockHasTx(this.selectedBlock);
  }

  isSelectedBlock(block) {
    return this.selectedBlock === block;
  }

  getBlockNumber(block) {
    return this.blocks.indexOf(block) + 1;
  }
}
