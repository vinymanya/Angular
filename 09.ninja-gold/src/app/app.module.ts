import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppComponent } from "./app.component";
import { NinjaComponent } from "./ninja/ninja.component";
import { GoldComponent } from "./gold/gold.component";
import { NinjaGoldService } from "./ninja-gold.service";

@NgModule({
  declarations: [AppComponent, NinjaComponent, GoldComponent],
  imports: [BrowserModule, CommonModule],
  providers: [NinjaGoldService],
  bootstrap: [AppComponent]
})
export class AppModule {}
