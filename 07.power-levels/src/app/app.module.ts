import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import { SaiyanComponent } from './power/saiyan/saiyan.component';
import { SupersaiyanComponent } from './power/supersaiyan/supersaiyan.component';
import { SupersaiyantwoComponent } from './power/supersaiyantwo/supersaiyantwo.component';
import { SupersaiyanthreeComponent } from './power/supersaiyanthree/supersaiyanthree.component';
import { SupersaiyanfourComponent } from './power/supersaiyanfour/supersaiyanfour.component';
import { HumainComponent } from './power/humain/humain.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    SaiyanComponent,
    SupersaiyanComponent,
    SupersaiyantwoComponent,
    SupersaiyanthreeComponent,
    SupersaiyanfourComponent,
    HumainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
