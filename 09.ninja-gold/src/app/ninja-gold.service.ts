import { Injectable } from "@angular/core";

@Injectable()
export class NinjaGoldService {
  random_number: number;
  constructor() {}

  getGold(field: string): number {
    if (field == "farm") {
      this.random_number = Math.floor(Math.random() * 5) + 2;
    } else if (field == "cave") {
      this.random_number = Math.floor(Math.random() * 10) + 5;
    } else if (field == "casino") {
      this.random_number = Math.floor(Math.random() * 100) + 1;
    } else if (field == "house") {
      this.random_number = Math.floor(Math.random() * 15) + 7;
    }
    return this.random_number;
  }
}
