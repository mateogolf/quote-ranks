import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { QuoteNewComponent } from './quote-new/quote-new.component';
import { QuoteListComponent } from './quote-list/quote-list.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteNewComponent,
    QuoteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
