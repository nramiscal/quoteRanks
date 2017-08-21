import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { QuoteAddComponent } from './quote-add/quote-add.component';
// import { OrderbyPipe } from './orderby.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteListComponent,
    QuoteAddComponent,
    // OrderbyPipe
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
