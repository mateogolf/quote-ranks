import { Component, OnInit, Output,EventEmitter } from '@angular/core';
// import { Quote } from '../quote';
import { Quote2 } from './quote2';
@Component({
  selector: 'app-quote-new',
  templateUrl: './quote-new.component.html',
  styleUrls: ['./quote-new.component.css']
})
export class QuoteNewComponent implements OnInit {
  // quote = new QuoteNewComponent();//Default option???
  quote = new Quote2();
  // quote = {content:"",author:"",vote:0}
  @Output() emitter = new EventEmitter();
  constructor() {}
  onSubmit() {
    console.log(this.quote)
    this.emitter.emit(this.quote);
    this.quote = new Quote2();
  }
  ngOnInit() {
  }

}
