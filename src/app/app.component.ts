import { Component } from '@angular/core';
// import { Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //import from quote-new
  myQuotes = [];
  addQuote(eventData){
    this.myQuotes.push(eventData);
  }
}
