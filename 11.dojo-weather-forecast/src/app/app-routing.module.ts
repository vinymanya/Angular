import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BurbankComponent } from "./burbank/burbank.component";
import { ChicagoComponent } from "./chicago/chicago.component";
import { DcComponent } from "./dc/dc.component";
import { LandingComponent } from "./landing/landing.component";
import { SanjoseComponent } from "./sanjose/sanjose.component";
import { SeattleComponent } from "./seattle/seattle.component";
import { Routes, RouterModule } from "@angular/router";
import { DallasComponent } from "./dallas/dallas.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: LandingComponent },
  { path: "seattle", pathMatch: "full", component: SeattleComponent },
  { path: "sanjose", pathMatch: "full", component: SanjoseComponent },
  { path: "burbank", pathMatch: "full", component: BurbankComponent },
  { path: "dc", component: DcComponent },
  { path: "dallas", component: DallasComponent },
  { path: "chicago", component: ChicagoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
