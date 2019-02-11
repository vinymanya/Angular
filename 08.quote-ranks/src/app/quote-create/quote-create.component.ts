import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-quote-create",
  templateUrl: "./quote-create.component.html",
  styleUrls: ["./quote-create.component.css"]
})
export class QuoteCreateComponent implements OnInit {
  @Input()
  quotes;

  @Output()
  createQuote = new EventEmitter();

  // Initialize newQuote with empty properties for two-data binding
  newQuote = { body: "", author: "", rating: 0 };

  constructor() {}

  ngOnInit() {}

  onSubmit(isValid: boolean) {
    if (isValid) {
      // emit the newly created quote
      this.createQuote.emit(this.newQuote);
      // Clear the form
      this.newQuote = { body: "", author: "", rating: 0 };
    }
  }
}
