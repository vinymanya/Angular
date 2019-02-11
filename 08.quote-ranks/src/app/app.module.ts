import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { QuoteCreateComponent } from "./quote-create/quote-create.component";
import { QuoteListComponent } from "./quote-list/quote-list.component";
import { OrderbyPipe } from "./orderby.pipe";

@NgModule({
  declarations: [
    AppComponent,
    QuoteCreateComponent,
    QuoteListComponent,
    OrderbyPipe // register pipe
  ],
  imports: [BrowserModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
