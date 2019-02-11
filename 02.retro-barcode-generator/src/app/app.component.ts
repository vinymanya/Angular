import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title: string = "Retro Barcode Generator";
  ColorNameArray: Array<string> = [];

  constructor() {}

  fillColorNameArray(): void {
    for (let i = 0; i < 10; i++) {
      // Generate a random number
      const randNum = Math.floor(Math.random() * 6) + 1;
      if (randNum === 1) {
        this.ColorNameArray.push("DarkSeaGreen ");
      } else if (randNum === 2) {
        this.ColorNameArray.push("MediumBlue ");
      } else if (randNum === 3) {
        this.ColorNameArray.push("MediumAquaMarine ");
      } else if (randNum === 4) {
        this.ColorNameArray.push("DarkBlue ");
      } else if (randNum === 5) {
        this.ColorNameArray.push("CadetBlue ");
      } else if (randNum === 6) {
        this.ColorNameArray.push("Chartreuse");
      } else if (randNum === 7) {
        this.ColorNameArray.push("IndianRed");
      }
    }
  }

  ngOnInit() {
    this.fillColorNameArray();
  }
}
