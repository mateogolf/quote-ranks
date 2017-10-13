import { Component } from '@angular/core';
// import { Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //import from quote-new
  quotes = [];
  addQuote(eventData){
    let newQuote=eventData;
    this.quotes.push(eventData);
  }
}
