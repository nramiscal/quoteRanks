import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-add',
  templateUrl: './quote-add.component.html',
  styleUrls: ['./quote-add.component.css']
})
export class QuoteAddComponent implements OnInit {
  @Input() quotes;
  @Output() createQuoteEvent = new EventEmitter();

  newQuote = { body: '', author: '', rating: 0};

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formData) {
    console.log(formData)
    console.log(this.newQuote);
    this.createQuoteEvent.emit(this.newQuote);
    this.newQuote = { body: '', author: '', rating: 0};
  }

}
