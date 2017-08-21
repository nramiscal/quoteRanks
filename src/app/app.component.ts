import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    {body: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum .', author: 'Abby the Malshi', rating: 25},
    {body: 'Lorem ipsum Lorem ipsum ', author: 'Bella the Chihuahua', rating: 2},
    {body: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ', author: 'Muffins the Chinchilla', rating: 23}
  ];

  createQuote(quote) {
    console.log(quote);
    this.quotes.push(quote);
  }

  deleteQuote(quote) {
    const idx = this.quotes.indexOf(quote);
    this.quotes.splice(idx, 1);
  }

}
