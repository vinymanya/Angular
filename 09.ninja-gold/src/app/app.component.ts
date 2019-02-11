import { Component, OnInit } from "@angular/core";

import { NinjaGoldService } from "./ninja-gold.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title: string = "Gold Count";

  messages1: string = "";
  messages2: string = "";
  messages3: string = "";
  messages4: string = "";

  farm_gold: number;
  cave_gold: number;
  casino_gold: number;
  house_gold: number;

  total: number = 0;

  constructor(private ninjaService: NinjaGoldService) {}

  ngOnInit() {}

  handleFarm(event: string) {
    this.farm_gold = this.ninjaService.getGold(event);
    this.messages1 += `You've earned ${this.farm_gold} at the Farm!`;
    this.total += this.farm_gold;
  }

  handleCave(event: string) {
    this.cave_gold = this.ninjaService.getGold(event);
    this.messages2 += `You've earned ${this.cave_gold} at the Cave!`;
    this.total += this.cave_gold;
  }

  handleCasino(event: string) {
    this.casino_gold = this.ninjaService.getGold(event);
    this.messages2 += `You've lost ${this.casino_gold} at the Casino!`;
    this.total -= this.casino_gold;
  }

  handleHouse(event: string) {
    this.house_gold = this.ninjaService.getGold(event);
    this.messages2 += `You've earned ${this.house_gold} at the House!`;
    this.total += this.house_gold;
  }
}
