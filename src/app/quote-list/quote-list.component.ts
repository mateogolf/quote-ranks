import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit,OnChanges {
  @Input() quotes;
  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    this.quotes = changes.quotes.currentValue;
  }
  voteUp(idx){
    this.quotes[idx]+=1;
  }
  voteDown(idx) {
    this.quotes[idx] -= 1;
  }
  delete(idx){
    console.log("Placeholder for removal")
  }
  ngOnInit() {
  }

}
